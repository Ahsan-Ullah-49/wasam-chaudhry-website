export function renderFooter() {
  return `
<footer id="site-footer" role="contentinfo" style="background:var(--color-dark-charcoal);border-top:1px solid var(--color-gold-border);">

  <div class="max-container" style="padding-top:3.5rem;padding-bottom:3.5rem;">

    <!-- Top row -->
    <div style="display:grid;grid-template-columns:1fr;gap:2.5rem;margin-bottom:3rem;" class="footer-top-grid">

      <!-- Brand -->
      <div>
        <a href="/" class="nav-wordmark" style="display:inline-block;margin-bottom:0.75rem;" aria-label="Wasam Chaudhry – Home">
          Wasam Chaudhry
        </a>
        <p style="font-size:0.7rem;letter-spacing:0.18em;text-transform:uppercase;color:rgba(242,240,235,0.45);font-family:var(--font-sans);line-height:1.8;">
          Entrepreneur&nbsp;&bull;&nbsp;Executive Producer<br>
          Automotive Specialist&nbsp;&bull;&nbsp;Connector
        </p>
      </div>

      <!-- Navigation -->
      <nav aria-label="Footer navigation" style="display:flex;flex-direction:column;gap:0.75rem;">
        <p style="font-size:0.6rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-champagne-gold);font-family:var(--font-sans);margin-bottom:0.25rem;">Navigate</p>
        ${['About', 'Ventures', 'Interviews', 'Global Network', 'Automotive', 'Contact'].map(item => `
        <a href="#${item.toLowerCase().replace(' ', '-')}" class="nav-link" style="font-size:0.75rem;">${item}</a>
        `).join('')}
      </nav>

      <!-- Social + contact -->
      <div>
        <p style="font-size:0.6rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-champagne-gold);font-family:var(--font-sans);margin-bottom:1rem;">Connect</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          <a href="mailto:hello@wasamchaudhry.com"
             style="font-size:0.8rem;color:rgba(242,240,235,0.55);text-decoration:none;transition:color 0.25s;font-family:var(--font-sans);"
             onmouseover="this.style.color='var(--color-champagne-gold)'"
             onmouseout="this.style.color='rgba(242,240,235,0.55)'"
             aria-label="Email Wasam Chaudhry">
            hello@wasamchaudhry.com
          </a>
          <span style="font-size:0.75rem;color:rgba(242,240,235,0.35);font-family:var(--font-sans);font-style:italic;">Instagram — @wasamchaudhry (link coming)</span>
          <span style="font-size:0.75rem;color:rgba(242,240,235,0.35);font-family:var(--font-sans);font-style:italic;">LinkedIn — Wasam Chaudhry (link coming)</span>
        </div>
      </div>

    </div>

    <!-- Divider -->
    <div class="gold-divider" style="margin-bottom:2rem;"></div>

    <!-- Bottom row -->
    <div style="display:flex;flex-wrap:wrap;gap:1rem;align-items:center;justify-content:space-between;">
      <p style="font-size:0.7rem;color:rgba(242,240,235,0.35);font-family:var(--font-sans);">
        &copy; <span id="footer-year"></span> Wasam Chaudhry. All rights reserved.
      </p>
      <p style="font-size:0.7rem;color:rgba(242,240,235,0.25);font-family:var(--font-sans);">
        wasamchaudhry.com
      </p>
    </div>

  </div>

</footer>
`;
}
