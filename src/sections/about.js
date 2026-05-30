export function renderAbout() {
  return `
<section id="about" class="section-light" aria-labelledby="about-heading">
  <div class="max-container section-pad">

    <!-- Top: label + rule -->
    <div class="reveal" style="margin-bottom:3rem;">
      <p class="section-subtitle">About</p>
      <h2 id="about-heading" class="section-title" style="color:var(--color-matte-black);max-width:640px;line-height:1.1;">
        Building Businesses.<br>Creating Conversations.
      </h2>
      <div class="gold-rule" style="background:var(--color-champagne-gold);"></div>
    </div>

    <!-- Two-column layout -->
    <div style="display:grid;grid-template-columns:1fr;gap:4rem;align-items:start;" class="lg-two-col">

      <!-- Left: editorial image placeholder -->
      <div class="reveal" style="order:2;">
        <div class="placeholder-block"
             style="width:100%;aspect-ratio:4/5;max-width:520px;background:var(--color-dark-charcoal);"
             role="img"
             aria-label="Editorial photo of Wasam Chaudhry – placeholder">
          <div style="position:absolute;inset:0;background:linear-gradient(145deg,rgba(184,154,94,0.07) 0%,transparent 60%);"></div>
          <div style="position:absolute;top:1.5rem;left:1.5rem;right:1.5rem;bottom:1.5rem;border:1px solid rgba(184,154,94,0.15);pointer-events:none;"></div>
          <div class="placeholder-icon" style="width:3rem;height:3rem;border-color:rgba(184,154,94,0.4);color:rgba(184,154,94,0.6);">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
          </div>
          <p class="placeholder-label" style="color:rgba(184,154,94,0.7);">Editorial Portrait Placeholder</p>
        </div>
      </div>

      <!-- Right: bio text -->
      <div class="reveal" style="order:1;">

        <p style="font-family:var(--font-serif);font-size:clamp(1.2rem,2.5vw,1.5rem);font-style:italic;color:var(--color-matte-black);margin-bottom:2rem;line-height:1.5;">
          &ldquo;The right connection, at the right moment, can change everything.&rdquo;
        </p>

        <div style="display:flex;flex-direction:column;gap:1.25rem;font-size:1rem;line-height:1.8;color:rgba(10,10,10,0.8);">

          <p>
            Wasam Chaudhry is an entrepreneur, executive producer, and international business operator with a career built on creating meaningful connections across industries and borders.
          </p>

          <p>
            As the founder of <strong>Autolinx</strong>, Wasam leads a specialised compliance and automotive consulting operation serving international markets — bringing precision, integrity, and global perspective to every transaction.
          </p>

          <p>
            As executive producer of <strong>The ANSWER</strong> and contributor to <strong>Focus TV</strong>, Wasam has built a credible presence in the media and content space — producing conversations that matter and giving a platform to voices worth amplifying.
          </p>

          <p>
            With a network spanning Australia, Japan, Singapore, Indonesia, the UAE, the USA, East Timor, and Hong Kong, Wasam operates at the intersection of culture, commerce, and connection.
          </p>

        </div>

        <div style="margin-top:2.5rem;padding:1.75rem;background:rgba(10,10,10,0.05);border-left:2px solid var(--color-champagne-gold);">
          <p style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--color-champagne-gold);margin-bottom:0.75rem;font-family:var(--font-sans);">Roles</p>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
            ${['Founder – Autolinx','Executive Producer – The ANSWER','Contributor – Focus TV','International Business Operator','Automotive Compliance Specialist','Media Creator & Connector'].map(r => `
            <span style="font-size:0.7rem;letter-spacing:0.12em;text-transform:uppercase;border:1px solid rgba(10,10,10,0.15);padding:0.3rem 0.75rem;font-family:var(--font-sans);color:rgba(10,10,10,0.7);">${r}</span>
            `).join('')}
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
`;
}
