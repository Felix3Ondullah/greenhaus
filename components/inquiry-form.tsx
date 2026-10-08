'use client';

import { useState } from 'react';
import type { FormEvent } from 'react';

const choices = {
  service: [['identity', 'Brand Identity'], ['social', 'Social Retainer'], ['full', 'Full-Service']],
  budget: [['tier1', '$3,000 – $6,000'], ['tier2', '$6,000 – $12,000'], ['tier3', '$12,000+']],
};

function RadioChoices({ title, name, values, defaultValue }: { title: string; name: string; values: string[][]; defaultValue: string }) {
  return <fieldset className="space-y-3 pt-2"><legend className="eyebrow mb-3 text-muted">{title}</legend><div className="grid gap-3 sm:grid-cols-3">{values.map(([value,label])=><label key={value} className="flex cursor-pointer items-center gap-2 border border-white/10 p-3 text-xs text-muted transition-colors hover:text-paper"><input type="radio" name={name} value={value} defaultChecked={value===defaultValue} className="accent-sprout"/><span>{label}</span></label>)}</div></fieldset>;
}

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }
  return <form onSubmit={submit} className="space-y-6 border border-white/10 bg-white/[.03] p-8 md:p-10">
    <div className="grid gap-6 md:grid-cols-2">
      <label className="form-field"><span>Your Name / Company</span><input required name="name" placeholder="Jane Doe / Studio Ltd."/></label>
      <label className="form-field"><span>Email Address</span><input required type="email" name="email" placeholder="jane@company.com"/></label>
    </div>
    <label className="form-field"><span>Current Website / Social Handle</span><input name="website" placeholder="@yourbrand or brand.com"/></label>
    <RadioChoices title="Engagement Type" name="service" values={choices.service} defaultValue="full"/>
    <RadioChoices title="Estimated Monthly Budget / Project Tier" name="budget" values={choices.budget} defaultValue="tier2"/>
    <label className="form-field pt-2"><span>Project Details &amp; Objectives</span><textarea rows={3} name="details" placeholder="Tell us about your brand stage and goals..."/></label>
    <button className="w-full bg-paper py-4 font-mono text-xs uppercase tracking-widest text-forest transition hover:bg-sprout" type="submit">Submit Inquiry</button>
    {submitted && <p role="status" className="pt-2 text-center font-mono text-xs text-sprout">Thank you. Your inquiry has been logged. We will review your materials within 24 hours.</p>}
  </form>;
}
