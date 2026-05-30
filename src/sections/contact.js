export function renderContact() {
  return `
<section id="contact" aria-labelledby="contact-heading" style="background:var(--color-matte-black);border-top:1px solid var(--color-gold-border);">
  <div class="max-container section-pad">

    <div class="reveal" style="text-align:center;margin-bottom:4rem;">
      <p class="section-subtitle">Get in Touch</p>
      <h2 id="contact-heading" class="section-title">
        Let&rsquo;s Connect
      </h2>
      <div class="gold-rule gold-rule-center"></div>
      <p style="max-width:480px;margin:0 auto;color:rgba(242,240,235,0.55);line-height:1.8;font-size:0.95rem;">
        Business inquiries, partnerships, media opportunities, and collaborations are welcome.
      </p>
    </div>

    <div style="display:grid;grid-template-columns:1fr;gap:4rem;align-items:start;" class="lg-two-col">

      <!-- Left: contact info -->
      <div class="reveal">

        <div style="display:flex;flex-direction:column;gap:2rem;">

          <div>
            <p style="font-size:0.65rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-champagne-gold);margin-bottom:0.5rem;font-family:var(--font-sans);">Email</p>
            <a href="mailto:hello@wasamchaudhry.com"
               style="font-family:var(--font-serif);font-size:1.15rem;color:var(--color-off-white);text-decoration:none;transition:color 0.25s;"
               onmouseover="this.style.color='var(--color-champagne-gold)'"
               onmouseout="this.style.color='var(--color-off-white)'"
               aria-label="Email Wasam Chaudhry">
              hello@wasamchaudhry.com
            </a>
            <p style="font-size:0.7rem;color:rgba(242,240,235,0.35);margin-top:0.25rem;font-family:var(--font-sans);">Placeholder — update with final email</p>
          </div>

          <div>
            <p style="font-size:0.65rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-champagne-gold);margin-bottom:0.75rem;font-family:var(--font-sans);">Social Channels</p>
            <div style="display:flex;flex-direction:column;gap:0.5rem;">
              ${[
                { label: 'Instagram', handle: '@wasamchaudhry' },
                { label: 'LinkedIn',  handle: 'Wasam Chaudhry' },
                { label: 'YouTube',   handle: 'Coming Soon' },
              ].map(s => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;border:1px solid var(--color-gold-border);transition:border-color 0.25s;"
                   onmouseover="this.style.borderColor='rgba(184,154,94,0.5)'"
                   onmouseout="this.style.borderColor='var(--color-gold-border)'">
                <span style="font-size:0.7rem;letter-spacing:0.15em;text-transform:uppercase;color:rgba(242,240,235,0.5);font-family:var(--font-sans);">${s.label}</span>
                <span style="font-family:var(--font-serif);font-size:0.9rem;color:var(--color-off-white);">${s.handle}</span>
              </div>
              `).join('')}
            </div>
            <p style="font-size:0.7rem;color:rgba(242,240,235,0.35);margin-top:0.5rem;font-family:var(--font-sans);">Social links will be added when accounts are confirmed.</p>
          </div>

          <div>
            <p style="font-size:0.65rem;letter-spacing:0.25em;text-transform:uppercase;color:var(--color-champagne-gold);margin-bottom:0.5rem;font-family:var(--font-sans);">Booking</p>
            <p style="font-family:var(--font-serif);font-size:1rem;color:rgba(242,240,235,0.6);font-style:italic;">Calendar &amp; booking link — coming soon.</p>
          </div>

        </div>
      </div>

      <!-- Right: contact form -->
      <div class="reveal">
        <form id="contact-form" novalidate aria-label="Contact form">

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
            <div class="form-field">
              <label for="contact-name" class="form-label">Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                class="form-input"
                placeholder="Your name"
                autocomplete="name"
                required
                aria-required="true"
              />
            </div>
            <div class="form-field">
              <label for="contact-email" class="form-label">Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                class="form-input"
                placeholder="your@email.com"
                autocomplete="email"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div class="form-field" style="margin-bottom:1rem;">
            <label for="contact-type" class="form-label">Inquiry Type</label>
            <select id="contact-type" name="type" class="form-input" required aria-required="true">
              <option value="" disabled selected>Select inquiry type</option>
              <option value="partnership">Partnership</option>
              <option value="media">Media Opportunity</option>
              <option value="business">Business Inquiry</option>
              <option value="collaboration">Collaboration</option>
            </select>
          </div>

          <div class="form-field" style="margin-bottom:1.5rem;">
            <label for="contact-message" class="form-label">Message</label>
            <textarea
              id="contact-message"
              name="message"
              class="form-input"
              placeholder="Tell me about your opportunity or inquiry…"
              rows="5"
              required
              aria-required="true"
              style="resize:vertical;min-height:120px;"
            ></textarea>
          </div>

          <button type="submit" class="btn-primary" style="width:100%;justify-content:center;" aria-label="Submit contact form">
            Send Message
          </button>

          <!-- Form feedback -->
          <div
            id="form-feedback"
            role="status"
            aria-live="polite"
            aria-atomic="true"
            style="display:none;margin-top:1rem;padding:1rem;border:1px solid rgba(184,154,94,0.4);background:rgba(184,154,94,0.06);font-size:0.875rem;line-height:1.6;color:var(--color-champagne-gold);"
          >
            Thank you. This form is currently a frontend preview. Final form submission will be configured on launch.
          </div>

        </form>
      </div>

    </div>
  </div>
</section>
`;
}
