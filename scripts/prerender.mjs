// Writes a fully rendered HTML file for every route, plus 404.html and sitemap.xml.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const { render, allPages, notFoundMeta, headTags } = await import(pathToFileURL(ssrEntry).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

if (!template.includes('<!--app-head-->') || !template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> or <!--app-html--> placeholder')
}

/** "/" -> index.html, "/features/attendance" -> features/attendance.html (served at /features/attendance via cleanUrls) */
const fileFor = route => (route === '/' ? 'index.html' : `${route.slice(1)}.html`)

const page = (meta, url) => {
  const { html } = render(url)
  return template.replace('<!--app-head-->', headTags(meta)).replace('<!--app-html-->', html)
}

const write = (file, contents) => {
  const out = path.join(dist, file)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, contents)
}

for (const meta of allPages) {
  write(fileFor(meta.path), page(meta, meta.path))
  console.log(`  prerendered ${meta.path}`)
}

write('404.html', page(notFoundMeta, '/404'))
console.log('  prerendered 404.html')

const SITE = 'https://www.churchcare.online'
const urls = allPages
  .filter(m => !m.noindex)
  .map(m => `  <url>\n    <loc>${m.path === '/' ? `${SITE}/` : SITE + m.path}</loc>\n    <lastmod>${m.lastmod}</lastmod>\n  </url>`)
  .join('\n')
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
console.log(`  sitemap.xml with ${allPages.length} URLs`)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
