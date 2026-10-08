'use client';

import { useState } from 'react';

const links = [
  ['Philosophy', '#about'],
  ['Capabilities', '#services'],
  ['Methodology', '#process'],
  ['Archive', '#work'],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <a href="#top" className="group flex flex-col" aria-label="Greenhaus home">
          <span className="font-serif text-2xl font-semibold uppercase tracking-[.2em]">Greenhaus</span>
          <span className="-mt-1 font-mono text-[9px] uppercase tracking-widest text-muted">Creative Agency</span>
        </a>
        <nav className="hidden items-center gap-10 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          {links.map(([label, href]) => <a key={href} className="nav-link" href={href}>{label}</a>)}
        </nav>
        <a href="#contact" className="hidden border border-forest bg-forest px-5 py-3 font-mono text-xs uppercase tracking-wider text-paper transition hover:bg-muted md:inline-flex">Inquire</a>
        <button className="p-2 md:hidden" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="block h-px w-6 bg-forest"/><span className="mt-2 block h-px w-6 bg-forest"/>
        </button>
      </div>
      {open && <nav className="space-y-3 border-t border-ink/10 bg-paper px-6 pb-7 pt-4 font-mono text-xs uppercase tracking-widest md:hidden">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block py-2 text-muted">{label}</a>)}
        <a href="#contact" onClick={() => setOpen(false)} className="block bg-forest py-3 text-center text-paper">Inquire</a>
      </nav>}
    </header>
  );
}
