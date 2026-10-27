import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { Marked } from 'marked'

const slugify = (s: string) =>
  s.toLowerCase().replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, '').replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-')

/** Parses "key: value" frontmatter between --- lines. Values may be wrapped in double quotes. */
function parseFrontmatter(src: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(src)
  if (!match) return { data: {} as Record<string, string>, body: src }
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':')
    if (i === -1) continue
    const key = line.slice(0, i).trim()
    let value = line.slice(i + 1).trim()
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1)
    data[key] = value
  }
  return { data, body: src.slice(match[0].length) }
}

/**
 * Turns blog markdown files into JS modules at build time:
 * { ...frontmatter, html, headings, words }. The markdown parser never ships to the browser.
 */
function markdownPosts(): Plugin {
  return {
    name: 'markdown-posts',
    transform(code, id) {
      if (!id.endsWith('.md')) return null
      const { data, body } = parseFrontmatter(code)
      const headings: { id: string; text: string }[] = []
      const marked = new Marked({
        renderer: {
          heading({ tokens, depth }) {
            const text = this.parser.parseInline(tokens)
            const hid = slugify(text)
            if (depth === 2) headings.push({ id: hid, text: text.replace(/<[^>]+>/g, '') })
            return `<h${depth} id="${hid}">${text}</h${depth}>\n`
          },
          link({ href, tokens }) {
            const text = this.parser.parseInline(tokens)
            const external = /^https?:\/\//.test(href) && !href.includes('churchcare.online')
            return `<a href="${href}"${external ? ' target="_blank" rel="noopener"' : ''}>${text}</a>`
          },
        },
      })
      const html = marked.parse(body, { async: false }) as string
      const words = body.split(/\s+/).filter(Boolean).length
      return { code: `export default ${JSON.stringify({ ...data, html, headings, words })};`, map: null }
    },
  }
}

export default defineConfig({
  plugins: [markdownPosts(), react(), tailwindcss()],
})
