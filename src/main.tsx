import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@fontsource-variable/inter/wght.css'
import './index.css'
import App from './App.tsx'
import { initLinkTracking } from './lib/analytics'

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Prerendered pages arrive with HTML already inside #root, so hydrate them. The dev server sends an empty root.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)

initLinkTracking()
