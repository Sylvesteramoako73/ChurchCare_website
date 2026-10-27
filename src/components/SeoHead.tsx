import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { headTags } from '../lib/seo';
import { metaForPath } from '../routes';

/**
 * Keeps the document head in sync with the current route during client side navigation.
 * Prerendered HTML already contains the right tags for the first page, so the first run is skipped.
 */
export default function SeoHead() {
  const { pathname } = useLocation();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      if (document.head.querySelector('[data-seo]')) return;
    }
    document.head.querySelectorAll('[data-seo]').forEach(el => el.remove());
    const tpl = document.createElement('template');
    tpl.innerHTML = headTags(metaForPath(pathname));
    // Scripts parsed via innerHTML are inert, which is what we want for JSON-LD
    document.head.append(...Array.from(tpl.content.childNodes).filter(n => n.nodeType === Node.ELEMENT_NODE));
  }, [pathname]);

  return null;
}
