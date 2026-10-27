import { Banknote, CalendarCheck, MessageSquare, UserPlus, Users } from 'lucide-react';
import type { FeatureIcon as IconName } from '../data/features';

const icons = { users: Users, banknote: Banknote, message: MessageSquare, calendar: CalendarCheck, userPlus: UserPlus };

export default function FeatureIcon({ name, color, size = 'md' }: { name: IconName; color: string; size?: 'sm' | 'md' }) {
  const Icon = icons[name];
  const box = size === 'sm' ? 'w-10 h-10 rounded-xl' : 'w-12 h-12 rounded-2xl';
  return (
    <div className={`${box} flex items-center justify-center shrink-0`} style={{ background: `${color}14` }}>
      <Icon className={size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'} style={{ color }} strokeWidth={2} aria-hidden="true" />
    </div>
  );
}
