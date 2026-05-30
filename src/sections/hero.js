export function renderHero() {
  return `
<section class="hero-section" id="hero" aria-labelledby="hero-heading">
  <div class="hero-overlay"></div>
  <div class="hero-bg" style="background-image: url('https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=2070&auto=format&fit=crop');"></div>

  <div class="hero-content">
    <h1 id="hero-heading" class="fade-in">WASAM CHAUDHRY</h1>
    <p class="tagline fade-in">Entrepreneur &bull; Executive Producer &bull; Automotive Specialist &bull; Connector</p>
    <p class="hero-microline fade-in">
      <span>LET&rsquo;S MAKE </span>
      <span class="typewriter-text" aria-live="polite"></span><span class="typewriter-cursor" aria-hidden="true">|</span>
    </p>
    <div class="hero-buttons fade-in">
      <a href="#contact" class="btn-gold" aria-label="Send a business inquiry">Business Inquiries</a>
      <a href="#companies" class="hero-secondary-btn" aria-label="Explore Wasam Chaudhry's ventures">
        <span>Explore Ventures</span>
        <span class="btn-arrow" aria-hidden="true">&rarr;</span>
      </a>
    </div>
  </div>
</section>
`;
}
