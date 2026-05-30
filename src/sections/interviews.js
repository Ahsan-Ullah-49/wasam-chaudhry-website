const placeholderInterviews = [
  {
    label: 'Feature Interview',
    title: 'Interview Title Placeholder',
    desc: 'A featured conversation coming soon. Full media embed and thumbnail will be available on launch.',
  },
  {
    label: 'Podcast Episode',
    title: 'Episode Title Placeholder',
    desc: 'Podcast content and episode details will be added here. Supports YouTube or external links.',
  },
  {
    label: 'Media Appearance',
    title: 'Media Feature Placeholder',
    desc: 'Media appearances, press features, and broadcast content will be showcased in this slot.',
  },
];

export function renderInterviews() {
  return `
<section id="media" aria-labelledby="interviews-heading" style="background:var(--color-dark-charcoal);border-top:1px solid var(--color-gold-border);border-bottom:1px solid var(--color-gold-border);">
  <div class="max-container section-pad">

    <div class="reveal" style="text-align:center;margin-bottom:4rem;">
      <p class="section-subtitle">Media</p>
      <h2 id="interviews-heading" class="section-title">
        Media &amp; Interviews
      </h2>
      <div class="gold-rule gold-rule-center"></div>
      <p style="max-width:520px;margin:0 auto;color:rgba(242,240,235,0.55);line-height:1.8;font-size:0.95rem;font-style:italic;font-family:var(--font-serif);">
        Conversations, stories, and connections coming soon.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:1fr;gap:1.5rem;" class="interviews-grid">
      ${placeholderInterviews.map((item, i) => `
      <article class="interview-card reveal" aria-label="${item.label} placeholder" style="transition-delay:${i * 0.1}s;">

        <!-- Thumbnail placeholder -->
        <div class="placeholder-block" style="width:100%;aspect-ratio:16/9;" role="img" aria-label="Interview thumbnail placeholder">
          <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(184,154,94,0.05) 0%,transparent 70%);"></div>
          <!-- Play icon -->
          <div style="position:relative;z-index:1;width:3.5rem;height:3.5rem;border-radius:50%;border:1px solid rgba(184,154,94,0.5);display:flex;align-items:center;justify-content:center;">
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none" aria-hidden="true">
              <path d="M1 1l14 8L1 17V1z" fill="rgba(184,154,94,0.8)" stroke="rgba(184,154,94,0.8)" stroke-width="1" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="placeholder-label" style="margin-top:0.5rem;">Thumbnail Placeholder</p>
        </div>

        <div style="padding:1.5rem;">
          <p style="font-size:0.65rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-champagne-gold);margin-bottom:0.5rem;font-family:var(--font-sans);">${item.label}</p>
          <h3 style="font-family:var(--font-serif);font-size:1.25rem;font-weight:600;color:var(--color-off-white);margin-bottom:0.75rem;">${item.title}</h3>
          <p style="font-size:0.875rem;color:rgba(242,240,235,0.55);line-height:1.75;margin-bottom:1.25rem;">${item.desc}</p>
          <span style="display:inline-flex;align-items:center;gap:0.5rem;font-size:0.65rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(184,154,94,0.5);font-family:var(--font-sans);border:1px solid rgba(184,154,94,0.2);padding:0.4rem 0.875rem;" aria-label="Content coming soon">
            &#9679; Coming Soon
          </span>
        </div>

      </article>
      `).join('')}
    </div>

  </div>
</section>
`;
}
