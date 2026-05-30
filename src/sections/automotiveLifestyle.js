const vehicles = [
  {
    id: 'gtr',
    name: 'Nissan GT-R',
    label: 'The Icon',
    desc: 'A machine that needs no introduction. Pure performance wrapped in Japanese engineering precision.',
  },
  {
    id: 'century',
    name: 'Toyota Century V12',
    label: 'The Pinnacle',
    desc: 'The quiet authority of Japan\'s finest. Ultra-rare, hand-crafted, and reserved for those who understand restraint.',
  },
  {
    id: 'e39m5',
    name: 'BMW E39 M5',
    label: 'The Legend',
    desc: 'The benchmark by which all performance sedans are measured. An era-defining machine with timeless presence.',
  },
  {
    id: 'f90m5',
    name: 'BMW F90 M5',
    label: 'The Standard',
    desc: 'Modern performance refined to near perfection. Power, refinement, and presence — on demand.',
  },
];

export function renderAutomotiveLifestyle() {
  return `
<section id="lifestyle" aria-labelledby="automotive-heading" style="background:var(--color-dark-charcoal);border-top:1px solid var(--color-gold-border);">
  <div class="max-container section-pad">

    <div class="reveal" style="text-align:center;margin-bottom:1rem;">
      <p class="section-subtitle">Lifestyle</p>
      <h2 id="automotive-heading" class="section-title">
        Automotive Lifestyle
      </h2>
      <div class="gold-rule gold-rule-center"></div>
    </div>

    <div class="reveal" style="text-align:center;margin-bottom:4rem;">
      <p style="font-family:var(--font-serif);font-size:1.1rem;font-style:italic;color:rgba(242,240,235,0.6);letter-spacing:0.04em;">
        Icons, taste, and machines that reflect a personal standard.
      </p>
    </div>

    <!-- Vehicle grid -->
    <div style="display:grid;grid-template-columns:1fr;gap:1.5rem;" class="vehicle-grid">
      ${vehicles.map((v, i) => `
      <article
        class="vehicle-card reveal"
        style="transition-delay:${i * 0.08}s;"
        data-vehicle-id="${v.id}"
        data-vehicle-name="${v.name}"
        data-vehicle-label="${v.label}"
        data-vehicle-desc="${v.desc}"
        role="button"
        tabindex="0"
        aria-label="View ${v.name} – ${v.label}"
      >
        <!-- Vehicle image placeholder -->
        <div class="placeholder-block" style="width:100%;aspect-ratio:16/9;border:none;" role="img" aria-label="${v.name} image placeholder">
          <div style="position:absolute;inset:0;background:linear-gradient(160deg,rgba(184,154,94,0.06) 0%,rgba(10,10,10,0.6) 100%);"></div>
          <!-- Vehicle name large bg text -->
          <p aria-hidden="true" style="position:absolute;bottom:1rem;right:1.25rem;font-family:var(--font-serif);font-size:clamp(1.5rem,4vw,2.5rem);font-weight:700;color:rgba(184,154,94,0.08);letter-spacing:0.1em;text-transform:uppercase;white-space:nowrap;pointer-events:none;user-select:none;">${v.name}</p>
          <div class="placeholder-icon" style="width:3rem;height:3rem;" aria-hidden="true">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.25" viewBox="0 0 24 24">
              <rect x="1" y="8" width="22" height="10" rx="2"/>
              <circle cx="6.5" cy="18" r="2.5"/>
              <circle cx="17.5" cy="18" r="2.5"/>
              <path d="M6 8l3-5h6l3 5"/>
            </svg>
          </div>
          <p class="placeholder-label">${v.name} — Image Placeholder</p>
        </div>

        <!-- Vehicle overlay on hover -->
        <div class="vehicle-overlay" aria-hidden="true">
          <div>
            <p style="font-size:0.6rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-champagne-gold);margin-bottom:0.25rem;font-family:var(--font-sans);">${v.label}</p>
            <p style="font-family:var(--font-serif);font-size:1.25rem;color:var(--color-off-white);font-weight:600;">${v.name}</p>
          </div>
        </div>

        <!-- Info strip -->
        <div style="padding:1.25rem 1.5rem;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--color-gold-border);background:rgba(10,10,10,0.5);">
          <div>
            <p style="font-size:0.6rem;letter-spacing:0.22em;text-transform:uppercase;color:var(--color-champagne-gold);font-family:var(--font-sans);">${v.label}</p>
            <p style="font-family:var(--font-serif);font-size:1rem;font-weight:600;color:var(--color-off-white);margin-top:0.125rem;">${v.name}</p>
          </div>
          <span style="font-size:0.65rem;letter-spacing:0.15em;text-transform:uppercase;color:rgba(184,154,94,0.6);font-family:var(--font-sans);display:flex;align-items:center;gap:0.4rem;" aria-hidden="true">
            View
            <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </article>
      `).join('')}
    </div>

  </div>
</section>

<!-- Lightbox -->
<div
  id="lightbox"
  role="dialog"
  aria-modal="true"
  aria-label="Vehicle detail"
  aria-hidden="true"
>
  <button id="lightbox-close" aria-label="Close vehicle detail">&#10005;</button>

  <div id="lightbox-content" style="width:100%;max-width:800px;padding:0 1.5rem;display:flex;flex-direction:column;align-items:center;gap:2rem;">

    <!-- Lightbox image placeholder -->
    <div id="lightbox-image" class="placeholder-block" style="width:100%;aspect-ratio:16/9;max-height:60vh;" role="img" aria-label="Vehicle image placeholder">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(184,154,94,0.06) 0%,transparent 60%);"></div>
      <div class="placeholder-icon" style="width:3.5rem;height:3.5rem;">
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.25" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="1" y="8" width="22" height="10" rx="2"/>
          <circle cx="6.5" cy="18" r="2.5"/>
          <circle cx="17.5" cy="18" r="2.5"/>
          <path d="M6 8l3-5h6l3 5"/>
        </svg>
      </div>
      <p id="lightbox-image-label" class="placeholder-label">Vehicle Image Placeholder</p>
    </div>

    <div style="text-align:center;">
      <p id="lightbox-label" style="font-size:0.65rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-champagne-gold);margin-bottom:0.5rem;font-family:var(--font-sans);">The Icon</p>
      <h3 id="lightbox-name" style="font-family:var(--font-serif);font-size:2rem;font-weight:600;color:var(--color-off-white);letter-spacing:0.05em;margin-bottom:1rem;">Vehicle Name</h3>
      <p id="lightbox-desc" style="color:rgba(242,240,235,0.6);line-height:1.8;max-width:560px;font-size:0.95rem;">Vehicle description placeholder.</p>
    </div>

  </div>
</div>
`;
}
