declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Send a GA4 event. Never pass names, emails or phone numbers here. */
export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', event, params);
}

/**
 * One listener for every link into the app, so each CTA does not need its own handler.
 * Trial links fire begin_trial, demo links fire view_demo, sign in links are ignored.
 */
export function initLinkTracking() {
  document.addEventListener('click', e => {
    const link = (e.target as Element | null)?.closest?.('a[href*="app.churchcare.online"]');
    if (!link) return;
    const text = (link.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 60);
    const params = { link_text: text, page_path: window.location.pathname };
    if (/trial|get started|start free/i.test(text)) track('begin_trial', params);
    else if (/demo/i.test(text)) track('view_demo', params);
  });
}
