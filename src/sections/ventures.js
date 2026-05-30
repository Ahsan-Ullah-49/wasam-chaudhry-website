const ventures = [
  {
    name: 'Autolinx',
    tagline: 'Automotive Compliance & Consulting',
    description:
      'International automotive compliance and consulting services. Specialising in vehicle importation, regulatory guidance, and market entry for discerning clients across global markets.',
    link: '#',
    linkLabel: 'autolinx.com.au',
  },
  {
    name: 'Focus TV',
    tagline: 'Independent Media & Content',
    description:
      'A platform dedicated to purposeful storytelling, independent media production, and content that elevates perspectives across Australia and internationally.',
    link: '#',
    linkLabel: 'focustv.com.au',
  },
  {
    name: 'The ANSWER',
    tagline: 'Executive Produced Media Project',
    description:
      'An executive-produced media initiative exploring the conversations, stories, and ideas that shape culture — delivered with intention and editorial precision.',
    link: '#',
    linkLabel: 'theanswer.com.au',
  },
  {
    name: 'Pear Pressure',
    tagline: 'Creative & Lifestyle Ventures',
    description:
      'A creative and lifestyle brand born from the belief that influence, culture, and commerce can coexist beautifully. Evolving, intentional, and unmistakably independent.',
    link: '#',
    linkLabel: 'Coming Soon',
  },
];

export function renderVentures() {
  return `
<section id="companies" aria-labelledby="ventures-heading" style="background:var(--color-matte-black);">
  <div class="max-container section-pad">

    <div class="reveal" style="text-align:center;margin-bottom:4rem;">
      <p class="section-subtitle">Companies & Ventures</p>
      <h2 id="ventures-heading" class="section-title">
        The Portfolio
      </h2>
      <div class="gold-rule gold-rule-center"></div>
      <p style="max-width:560px;margin:0 auto;color:rgba(242,240,235,0.6);line-height:1.8;font-size:0.95rem;">
        A collection of independent ventures spanning automotive, media, and lifestyle — each built with intention.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:1fr;gap:1.5rem;" class="ventures-grid">
      ${ventures.map((v, i) => `
      <article class="venture-card reveal" aria-label="${v.name} – ${v.tagline}" style="transition-delay:${i * 0.08}s;">
        <!-- Logo placeholder -->
        <div style="margin-bottom:1.75rem;">
          <div class="placeholder-block" style="width:4rem;height:4rem;border-radius:2px;" role="img" aria-label="${v.name} logo placeholder">
            <span style="font-family:var(--font-serif);font-size:1.1rem;color:var(--color-champagne-gold);font-weight:600;position:relative;z-index:1;">${v.name.charAt(0)}</span>
          </div>
        </div>

        <p style="font-size:0.65rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-champagne-gold);margin-bottom:0.5rem;font-family:var(--font-sans);">${v.tagline}</p>
        <h3 style="font-family:var(--font-serif);font-size:1.75rem;font-weight:600;color:var(--color-off-white);margin-bottom:1rem;letter-spacing:0.05em;">${v.name}</h3>
        <p style="color:rgba(242,240,235,0.6);line-height:1.8;font-size:0.9rem;margin-bottom:1.75rem;">${v.description}</p>

        <a href="${v.link}"
           class="btn-outline"
           style="font-size:0.65rem;padding:0.625rem 1.25rem;"
           aria-label="Visit ${v.name}"
           ${v.linkLabel === 'Coming Soon' ? 'aria-disabled="true" tabindex="-1" style="font-size:0.65rem;padding:0.625rem 1.25rem;opacity:0.5;pointer-events:none;"' : ''}>
          ${v.linkLabel === 'Coming Soon' ? '&#9679; Coming Soon' : '&#8599; ' + v.linkLabel}
        </a>
      </article>
      `).join('')}
    </div>

  </div>
</section>
`;
}
