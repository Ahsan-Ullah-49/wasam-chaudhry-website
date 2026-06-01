const ventures = [
  {
    id: 'autolinx',
    number: '01',
    category: 'Automotive Commerce',
    name: 'Autolinx',
    description:
      'A trusted automotive business foundation connected to premium vehicles, compliance awareness, and long-term client relationships.',
    cta: 'Explore Venture',
    ctaAriaLabel: 'Explore Autolinx venture',
    monogram: 'ALX',
  },
  {
    id: 'focus',
    number: '02',
    category: 'Media & Broadcast',
    name: 'Focus TV',
    description:
      'A media platform built around visibility, conversations, storytelling, and digital audience connection.',
    cta: 'Visit Network',
    ctaAriaLabel: 'Visit Focus TV network',
    monogram: 'FTV',
  },
  {
    id: 'answer',
    number: '03',
    category: 'Executive Production',
    name: 'The ANSWER',
    description:
      'A content and interview platform shaped around meaningful conversations, media presence, and purposeful storytelling.',
    cta: 'Watch Content',
    ctaAriaLabel: 'Watch The ANSWER content',
    monogram: 'ANS',
  },
  {
    id: 'future',
    number: '04',
    category: 'Future Ventures',
    name: 'Pear Pressure',
    description:
      'A forward-looking space for future business concepts, creative ideas, strategic opportunities, and emerging collaborations.',
    cta: 'Discover Future',
    ctaAriaLabel: 'Discover future ventures',
    monogram: 'PRP',
  },
];

export function renderVentures() {
  return `
<section id="companies" class="companies-section" aria-labelledby="ventures-heading">

  <div class="companies-header reveal-on-scroll">
    <p class="companies-kicker">
      <span class="companies-kicker-line" aria-hidden="true"></span>
      VENTURES
    </p>
    <p class="companies-label">Built around trust, visibility, and long-term opportunity.</p>
    <h2 id="ventures-heading">The Business Portfolio</h2>
    <p class="companies-intro">
      A refined look at the ventures connected to Wasam Chaudhry's personal brand, spanning automotive business, media, executive production, and future-facing opportunities.
    </p>
  </div>

  <ul class="ventures-stack" aria-label="Wasam Chaudhry business ventures">
    ${ventures.map(v => `
    <li class="venture-stack-card">
      <article class="venture-card venture-card--${v.id}" aria-label="${v.name} – ${v.category}">

        <div class="venture-content">
          <div class="venture-pill" aria-label="Venture ${v.number}, category: ${v.category}">
            <span class="venture-pill-dot" aria-hidden="true"></span>
            Venture ${v.number} &nbsp;/&nbsp; ${v.category}
          </div>

          <h3>${v.name}</h3>

          <p>${v.description}</p>

          <a href="#" class="venture-button" aria-label="${v.ctaAriaLabel}">
            ${v.cta}
            <span class="venture-btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>

        <div class="venture-visual" aria-hidden="true">
          <div class="venture-logo-shell">
            <div class="venture-logo-mark">
              <span>${v.monogram}</span>
              <i class="venture-gold-rule"></i>
            </div>
          </div>
        </div>

      </article>
    </li>
    `).join('')}
  </ul>

</section>
`;
}
