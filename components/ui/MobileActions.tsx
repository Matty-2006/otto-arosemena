'use client';

import { Mail, Phone } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function MobileActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/98 shadow-[0_-6px_20px_rgba(15,23,42,0.08)] backdrop-blur dark:border-slate-800 dark:bg-slate-950/98 md:hidden">
      <div className="grid grid-cols-2 gap-3 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a href={SOCIAL_LINKS.phone} className="btn-green px-4 py-4 text-lg">
          <Phone size={22} />
          Llamar
        </a>
        <a href={SOCIAL_LINKS.email} className="btn-primary px-4 py-4 text-lg">
          <Mail size={22} />
          Escribir
        </a>
      </div>
    </div>
  );
}