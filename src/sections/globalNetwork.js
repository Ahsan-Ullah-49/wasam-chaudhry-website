const countries = [
  { name: 'Australia',  flag: '🇦🇺' },
  { name: 'Japan',      flag: '🇯🇵' },
  { name: 'Singapore',  flag: '🇸🇬' },
  { name: 'Indonesia',  flag: '🇮🇩' },
  { name: 'UAE',        flag: '🇦🇪' },
  { name: 'USA',        flag: '🇺🇸' },
  { name: 'East Timor', flag: '🇹🇱' },
  { name: 'Hong Kong',  flag: '🇭🇰' },
];

export function renderGlobalNetwork() {
  return `
<section id="network" aria-labelledby="network-heading" style="background:var(--color-matte-black);position:relative;overflow:hidden;">

  <!-- Background grid pattern -->
  <div aria-hidden="true" style="position:absolute;inset:0;opacity:0.03;background-image:linear-gradient(var(--color-champagne-gold) 1px,transparent 1px),linear-gradient(90deg,var(--color-champagne-gold) 1px,transparent 1px);background-size:60px 60px;pointer-events:none;"></div>
  <!-- Radial glow -->
  <div aria-hidden="true" style="position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(184,154,94,0.04) 0%,transparent 70%);pointer-events:none;"></div>

  <div class="max-container section-pad" style="position:relative;z-index:1;">

    <div class="reveal" style="text-align:center;margin-bottom:4rem;">
      <p class="section-subtitle">Reach</p>
      <h2 id="network-heading" class="section-title">
        Global Network
      </h2>
      <div class="gold-rule gold-rule-center"></div>
      <p style="max-width:520px;margin:0 auto;color:rgba(242,240,235,0.55);line-height:1.8;font-size:0.95rem;">
        Operating across eight countries. Building trust, partnerships, and opportunity across cultures and time zones.
      </p>
    </div>

    <!-- World map placeholder -->
    <div class="reveal" style="margin-bottom:4rem;">
      <div class="placeholder-block"
           style="width:100%;aspect-ratio:16/6;max-width:900px;margin:0 auto;border-radius:2px;"
           role="img"
           aria-label="World map showing countries in Wasam Chaudhry's global network">
        <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(184,154,94,0.04) 0%,transparent 60%);"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:0.75rem;position:relative;z-index:1;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(184,154,94,0.5)" stroke-width="1" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          <p class="placeholder-label">World Map Placeholder</p>
          <p style="font-size:0.55rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(184,154,94,0.3);font-family:var(--font-sans);">Replace with SVG world map or map image</p>
        </div>
      </div>
    </div>

    <!-- Country pills -->
    <div class="reveal" style="display:flex;flex-wrap:wrap;gap:0.75rem;justify-content:center;">
      ${countries.map((c, i) => `
      <div class="country-pill" style="transition-delay:${i * 0.05}s;" aria-label="${c.name}">
        <span class="dot" aria-hidden="true"></span>
        <span>${c.flag}</span>
        <span>${c.name}</span>
      </div>
      `).join('')}
    </div>

    <!-- Stats row -->
    <div class="reveal" style="margin-top:4rem;display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;text-align:center;border-top:1px solid var(--color-gold-border);padding-top:3rem;">
      <div>
        <p style="font-family:var(--font-serif);font-size:3rem;font-weight:700;color:var(--color-champagne-gold);line-height:1;">8</p>
        <p style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(242,240,235,0.5);margin-top:0.5rem;font-family:var(--font-sans);">Countries</p>
      </div>
      <div>
        <p style="font-family:var(--font-serif);font-size:3rem;font-weight:700;color:var(--color-champagne-gold);line-height:1;">4</p>
        <p style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(242,240,235,0.5);margin-top:0.5rem;font-family:var(--font-sans);">Ventures</p>
      </div>
      <div>
        <p style="font-family:var(--font-serif);font-size:3rem;font-weight:700;color:var(--color-champagne-gold);line-height:1;">1</p>
        <p style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:rgba(242,240,235,0.5);margin-top:0.5rem;font-family:var(--font-sans);">Standard</p>
      </div>
    </div>

  </div>
</section>
`;
}
