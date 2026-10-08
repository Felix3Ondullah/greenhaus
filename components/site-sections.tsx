const services = [
  {
    tag: '01 / THE ROOT', title: 'Brand Identity & Visual Systems',
    description: 'For founders launching new ventures or established businesses outgrowing their initial identity. We build foundational assets that establish immediate authority.',
    image: 'photo-1586075010923-2dd4570fb338', alt: 'Minimal brand identity materials',
    items: ['Market Positioning & Brand Architecture', 'Primary, Secondary & Monogram Marks', 'Bespoke Typography & Color Hierarchies', 'Packaging, Print & Unboxing Design', 'Digital UI/UX Art Direction', 'Comprehensive Brand Guidelines'],
  },
  {
    tag: '02 / THE CLIMATE', title: 'Content Direction & Social Media',
    description: 'For brands requiring a consistent, high-taste presence. We manage your verbal and visual atmosphere with editorial discipline.',
    image: 'photo-1600585154340-be6161a56a0c', alt: 'Minimalist architecture surrounded by greenery',
    items: ['Full Social Management (IG, TikTok, LinkedIn)', 'Creative Direction & Shoot Production', 'Short-Form Editorial Video & Reels', 'Copywriting & Tone-of-Voice Alignment', 'Community Architecture & Engagement', 'Monthly Content Calendars & Assets'],
  },
  {
    tag: '03 / THE YIELD', title: 'Performance & Digital Acquisition',
    description: 'For scaling companies ready to turn visual authority into predictable customer acquisition without cheapening brand perception.',
    image: 'photo-1522337360788-8b13dee7a37e', alt: 'Botanical skincare and beauty products',
    items: ['Paid Social Strategy (Meta, TikTok Ads)', 'Direct-Response Video & Static Variations', 'Click-to-Message & Lead Generation Funnels', 'E-Commerce Conversion Optimization', 'Monthly Attribution & CAC Reporting', 'Creative Iteration & Testing Frameworks'],
  },
];

const phases = [
  ['01', 'Diagnose & Position', 'Market Audit & Creative Strategy', 'Identifying category white space, audience friction points, and establishing unambiguous commercial positioning.'],
  ['02', 'Architect & Design', 'Identity System & Asset Build', 'Constructing the visual architecture: typography hierarchies, packaging specifications, UI wireframes, and brand books.'],
  ['03', 'Cultivate & Scale', 'Content Execution & Growth', 'Deploying editorial social channels, testing ad creatives, and managing continuous customer acquisition funnels.'],
];

const projects = [
  { name: 'SÖL Apothecary', metric: '+42% AOV', image: 'photo-1608248597359-54bc78345c2f', alt: 'Sustainable botanical skincare packaging', description: 'Complete rebrand, sustainable packaging architecture, and 3.4x ROAS launch strategy for clean botanical formulations.' },
  { name: 'Atelier Forme Studio', metric: '+180% Inbound B2B', image: 'photo-1486406146926-c627a92ad1ab', alt: 'Contemporary commercial architecture', description: 'Editorial visual identity and weekly content direction for an architectural design practice scaling high-ticket commercial commissions.' },
];

function Photo({ id, alt, className = '' }: { id: string; alt: string; className?: string }) {
  return <img className={className} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=85`} alt={alt} loading="lazy" />;
}

export function Hero() {
  return <section id="top" className="border-b border-ink/10 px-4 pb-16 pt-24 sm:px-6 md:px-10 md:pt-28">
    <div className="mx-auto max-w-[1500px]">
      <div className="relative flex min-h-[78vh] items-center justify-center overflow-hidden rounded-2xl border border-black/10 px-6 py-20 text-center shadow-2xl md:min-h-[84vh] md:rounded-3xl">
        <Photo id="photo-1509198397868-475647b2a1e5" alt="Botanical shadows falling across a concrete wall" className="absolute inset-0 h-full w-full scale-105 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/50" />
        <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-paper">
          <p className="eyebrow justify-center text-white/85"><i/>Nairobi — Working Globally<i/></p>
          <h1 className="font-serif text-4xl uppercase leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">Where Brands<br/><span className="lowercase italic">take</span> Root &amp; Scale</h1>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-white/80 sm:text-base md:text-lg">We engineer enduring visual identities and disciplined digital strategies for ambitious lifestyle brands—bridging the gap between design integrity and commercial scale.</p>
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
            <a className="action-light" href="#work">View Selected Work</a><a className="action-outline" href="#contact">Begin a Project</a>
          </div>
        </div>
        <span className="absolute bottom-6 right-8 hidden font-mono text-[10px] uppercase tracking-widest text-white/60 sm:block">[ Fig. 01 — Botanical Light Archive ]</span>
      </div>
      <div className="grid gap-6 pt-12 md:grid-cols-3">
        {[
          ['01', 'Bespoke Visual Systems', 'Built for pricing authority and long-term brand equity.'],
          ['02', 'Editorial Content Direction', 'Art-directed media that builds lasting audience affinity.'],
          ['03', 'Data-Informed Acquisition', 'Direct-response performance with strict aesthetic discipline.'],
        ].map(([n, title, copy]) => <div key={n} className="space-y-1"><span className="eyebrow text-muted">[ {n} ]</span><p className="font-serif text-lg">{title}</p><p className="text-xs text-muted">{copy}</p></div>)}
      </div>
    </div>
  </section>;
}

export function Philosophy() {
  return <section id="about" className="border-b border-ink/10 bg-paper py-24 md:py-32"><div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-12 lg:grid-cols-12 lg:gap-16">
    <div className="lg:col-span-4"><p className="eyebrow mb-3 text-muted">[ The Philosophy ]</p><h2 className="font-serif text-3xl leading-tight md:text-4xl">Growth is not accidental. It requires an engineered ecosystem.</h2></div>
    <div className="space-y-6 text-base font-light leading-relaxed text-muted md:text-lg lg:col-span-8"><p>A commodity solves an immediate problem. A brand commands pricing power and enduring loyalty. Yet too many modern businesses are forced to choose between design agencies that ignore commercial reality, and performance marketers whose generic ads dilute brand prestige.</p><p className="font-normal text-forest">At Greenhaus, we eliminate that divide.</p><p>Inspired by the precision of architectural greenhouses, we build controlled microclimates where modern brands take root and flourish. We establish the strategic soil (positioning), construct the architecture (visual identity and packaging), and cultivate the ongoing atmosphere (editorial social content and paid acquisition).</p><div className="grid gap-4 border-t border-ink/10 pt-6 font-mono text-xs uppercase tracking-widest text-forest sm:grid-cols-3"><span>• Clarity over noise</span><span>• Retention over churn</span><span>• Growth that lasts</span></div></div>
  </div></section>;
}

export function Capabilities() {
  return <section id="services" className="border-b border-ink/10 py-24 md:py-32"><div className="mx-auto max-w-7xl px-6 md:px-12">
    <div className="mb-16 flex flex-col justify-between gap-6 border-b border-ink/10 pb-8 md:flex-row md:items-end"><div><p className="eyebrow mb-3 text-muted">[ Core Disciplines ]</p><h2 className="font-serif text-4xl md:text-5xl">Engineered for distinction.<br/>Built for performance.</h2></div><p className="max-w-xs font-mono text-xs uppercase tracking-widest text-muted">Comprehensive agency capabilities designed to scale lifestyle &amp; modern ventures.</p></div>
    <div className="grid items-start gap-8 lg:grid-cols-3">{services.map((service) => <article key={service.tag} className="group flex flex-col justify-between border border-ink/10 bg-white/40 p-8 transition duration-500 hover:border-forest/40 hover:shadow-lg md:p-10"><span className="eyebrow mb-4 text-sprout">[ {service.tag} ]</span><h3 className="mb-3 font-serif text-2xl">{service.title}</h3><p className="mb-8 text-sm font-light leading-relaxed text-muted">{service.description}</p><div className="mb-10 aspect-[4/3] overflow-hidden border border-ink/10 bg-linen"><Photo id={service.image} alt={service.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"/></div><div className="border-t border-ink/10 pt-6"><p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-wider">Deliverables</p><ul className="space-y-2.5 text-xs font-light text-muted">{service.items.map(item => <li key={item} className="flex gap-2"><span>▫</span>{item}</li>)}</ul></div></article>)}</div>
  </div></section>;
}

export function Methodology() {
  return <section id="process" className="border-b border-ink/10 bg-linen/30 py-24 md:py-32"><div className="mx-auto max-w-7xl px-6 md:px-12"><div className="mb-16"><p className="eyebrow mb-3 text-muted">[ Methodology ]</p><h2 className="font-serif text-3xl md:text-4xl">A structured path to scale.</h2></div><div className="grid gap-8 md:grid-cols-3">{phases.map(([n,title,sub,copy])=><article key={n} className="space-y-4 border border-ink/10 bg-paper p-6 transition-colors hover:bg-linen/50"><span className="eyebrow text-muted">[ Phase {n} ]</span><h3 className="font-serif text-xl">{title}</h3><p className="eyebrow text-sprout">{sub}</p><p className="text-sm font-light leading-relaxed text-muted">{copy}</p></article>)}</div></div></section>;
}

export function SelectedWork() {
  return <section id="work" className="border-b border-ink/10 py-24 md:py-32"><div className="mx-auto max-w-7xl px-6 md:px-12"><div className="mb-16 flex flex-col justify-between gap-4 border-b border-ink/10 pb-6 md:flex-row md:items-end"><div><p className="eyebrow mb-3 text-muted">[ Selected Archive ]</p><h2 className="font-serif text-4xl">Recent client outcomes.</h2></div><span className="eyebrow text-muted">Case Records 2025–2026</span></div><div className="grid gap-12 md:grid-cols-2">{projects.map(project=><article key={project.name} className="group"><div className="mb-6 aspect-[16/10] overflow-hidden border border-ink/10 bg-linen"><Photo id={project.image} alt={project.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/></div><div className="space-y-2"><div className="flex items-baseline justify-between gap-4"><h3 className="font-serif text-2xl transition-colors group-hover:text-sprout">{project.name}</h3><span className="shrink-0 font-mono text-xs font-bold text-sprout">{project.metric}</span></div><p className="text-sm font-light text-muted">{project.description}</p></div></article>)}</div></div></section>;
}
