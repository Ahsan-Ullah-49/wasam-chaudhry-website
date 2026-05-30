export function renderGolfBusiness() {
  return `
<section id="golf" aria-labelledby="golf-heading" style="position:relative;overflow:hidden;background:var(--color-off-white);">

  <!-- Subtle diagonal texture -->
  <div aria-hidden="true" style="position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(184,154,94,0.04) 0px,rgba(184,154,94,0.04) 1px,transparent 1px,transparent 60px);pointer-events:none;"></div>

  <div class="max-container section-pad" style="position:relative;z-index:1;">
    <div style="display:grid;grid-template-columns:1fr;gap:4rem;align-items:center;" class="lg-two-col">

      <!-- Golf course image placeholder -->
      <div class="reveal" style="order:2;">
        <div class="placeholder-block"
             style="width:100%;aspect-ratio:4/3;background:var(--color-dark-charcoal);border-color:rgba(184,154,94,0.35);"
             role="img"
             aria-label="Golf course lifestyle image placeholder">
          <div style="position:absolute;inset:0;background:linear-gradient(145deg,rgba(184,154,94,0.08) 0%,transparent 60%);"></div>
          <div style="position:absolute;top:1.5rem;left:1.5rem;right:1.5rem;bottom:1.5rem;border:1px solid rgba(184,154,94,0.2);pointer-events:none;"></div>
          <div class="placeholder-icon" style="width:3rem;height:3rem;border-color:rgba(184,154,94,0.5);color:rgba(184,154,94,0.7);">
            <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.25" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2v12M12 14l4-8"/>
              <circle cx="12" cy="22" r="1"/>
              <ellipse cx="12" cy="22" rx="4" ry="1.5"/>
            </svg>
          </div>
          <p class="placeholder-label" style="color:rgba(184,154,94,0.7);">Golf Course Lifestyle Placeholder</p>
        </div>
      </div>

      <!-- Text content -->
      <div class="reveal" style="order:1;">

        <p class="section-subtitle" style="color:var(--color-champagne-gold);">Business &amp; Lifestyle</p>
        <h2 id="golf-heading" style="font-family:var(--font-serif);font-size:clamp(1.75rem,4vw,3rem);font-weight:700;line-height:1.1;color:var(--color-matte-black);margin-bottom:1.5rem;letter-spacing:0.03em;">
          Let&rsquo;s Do Some Business<br>on the Golf Course
        </h2>
        <div class="gold-rule" style="background:var(--color-champagne-gold);"></div>

        <p style="font-size:1rem;line-height:1.9;color:rgba(10,10,10,0.7);margin-bottom:2.5rem;max-width:520px;">
          Some conversations are bigger than the boardroom. Whether it is business, media, partnerships, or new opportunities — the right connection can begin anywhere.
        </p>

        <!-- Decorative quote block -->
        <div style="padding:1.5rem 2rem;border-left:2px solid var(--color-champagne-gold);margin-bottom:2.5rem;background:rgba(184,154,94,0.06);">
          <p style="font-family:var(--font-serif);font-size:1.1rem;font-style:italic;color:var(--color-matte-black);line-height:1.6;">
            &ldquo;The fairway is just a boardroom with better views.&rdquo;
          </p>
        </div>

        <a href="#contact" class="btn-primary" aria-label="Start a conversation with Wasam Chaudhry">
          Start a Conversation
        </a>

      </div>
    </div>
  </div>
</section>
`;
}
