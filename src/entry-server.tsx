import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App.tsx'
import { headTags } from './lib/seo'
import { allPages, notFoundMeta } from './routes'

/** Renders one route to HTML for the prerender script */
export function render(url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
  return { html }
}

export { allPages, notFoundMeta, headTags }
