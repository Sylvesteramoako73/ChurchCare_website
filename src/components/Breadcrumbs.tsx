import { Link } from 'react-router';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  const items = [{ name: 'Home', path: '/' }, ...trail];
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs font-medium" style={{ color: 'rgba(15,23,42,0.45)' }}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last
                ? <span aria-current="page" style={{ color: 'rgba(15,23,42,0.7)' }}>{c.name}</span>
                : <Link to={c.path} className="hover:text-[#1B2875] transition-colors">{c.name}</Link>}
              {!last && <ChevronRight className="w-3 h-3" aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
