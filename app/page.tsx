import { InquiryForm } from '@/components/inquiry-form';
import { SiteHeader } from '@/components/site-header';
import { Capabilities, Hero, Methodology, Philosophy, SelectedWork } from '@/components/site-sections';

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <Hero />
      <Philosophy />
      <Capabilities />
      <Methodology />
      <SelectedWork />
      <section id="contact" className="bg-forest py-24 text-paper md:py-32"><div className="mx-auto grid max-w-7xl gap-16 px-6 md:px-12 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5"><p className="eyebrow text-sprout">[ Project Inquiries ]</p><h2 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">Cultivate<br/><span className="italic">what lasts.</span></h2><p className="max-w-md text-sm font-light leading-relaxed text-white/65 md:text-base">We accept a limited number of identity commissions and monthly retainer partnerships each quarter to maintain uncompromising creative quality.</p><div className="space-y-3 border-t border-white/10 pt-8 font-mono text-xs tracking-wider"><p className="text-white/50">Direct Communications</p><a className="transition-colors hover:text-sprout" href="mailto:studio@greenhauscreative.com">studio@greenhauscreative.com</a><p className="text-white/50">Nairobi • Working Globally</p></div></div>
        <div className="lg:col-span-7"><InquiryForm/></div>
      </div></section>
    </main>
    <footer className="border-t border-white/10 bg-forest py-12 font-mono text-xs text-white/55"><div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12"><div className="flex items-center gap-4"><span className="font-serif font-semibold tracking-widest text-paper">GREENHAUS</span><span>•</span><span>The climate for modern brands.</span></div><nav className="flex gap-8 text-[11px] uppercase tracking-widest"><a className="hover:text-paper" href="#about">Philosophy</a><a className="hover:text-paper" href="#services">Services</a><a className="hover:text-paper" href="#contact">Contact</a></nav><p className="text-[10px]">© 2026 GREENHAUS CREATIVE AGENCY. ALL RIGHTS RESERVED.</p></div></footer>
  </>;
}
