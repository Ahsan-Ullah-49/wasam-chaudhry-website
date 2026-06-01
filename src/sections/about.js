export function renderAbout() {
  return `
<section id="about" class="about-section" aria-labelledby="about-heading">

  <div class="about-bg-word" aria-hidden="true">
    <span>WASAM</span>
    <span>CHAUDHRY</span>
  </div>

  <div class="about-layout">

    <div class="about-visual reveal-on-scroll">
      <div class="about-image-shell">
        <!-- Temporary CEO placeholder image. Replace with Wasam Chaudhry's final portrait later. -->
        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80"
          alt="Executive portrait placeholder"
          loading="lazy"
          decoding="async"
          onerror="this.closest('.about-image-shell').classList.add('image-missing'); this.style.display='none';"
        />
        <div class="about-image-fallback" aria-hidden="true">
          <span>WASAM CHAUDHRY</span>
        </div>
        
        <div class="about-image-badges" aria-hidden="true">
          <span>Founder of Autolinx</span>
          <span>Executive Producer</span>
          <span>Global Operator</span>
        </div>
      </div>
      <div class="about-vertical-label" aria-hidden="true">EXECUTIVE PROFILE</div>
    </div>

    <div class="about-content reveal-on-scroll">
      <div class="about-kicker">
        <span class="about-kicker-line"></span>
        <span class="about-kicker-index">01</span>
        <span class="about-kicker-text">ABOUT ME</span>
      </div>

      <h2 id="about-heading">The vision behind the name.</h2>

      <p class="about-subtitle">Entrepreneur &bull; Executive Producer &bull; Automotive Specialist &bull; Connector</p>

      <div class="about-copy">
        <p>Wasam Chaudhry is an <strong><em>entrepreneur</em></strong> and <strong><em>executive producer</em></strong> with a presence shaped by <strong><em>business</em></strong>, <strong><em>media</em></strong>, <strong><em>automotive culture</em></strong>, and <strong><em>international relationships</em></strong>.</p>
        <p>As the <strong><em>founder of Autolinx</em></strong> and <strong><em>executive producer of The ANSWER</em></strong>, he works across <strong><em>commerce</em></strong>, <strong><em>content</em></strong>, <strong><em>compliance</em></strong>, and <strong><em>global opportunity</em></strong> with a calm executive mindset.</p>
        <p>His personal brand is built around <strong><em>credibility</em></strong>, <strong><em>meaningful conversations</em></strong>, and the ability to <strong><em>connect people, ideas, and opportunities</em></strong> across borders.</p>
      </div>

      <a href="#contact" class="btn-gold about-cta">
        LET&rsquo;S MAKE MAGIC TOGETHER
      </a>
    </div>

    <div class="about-credentials reveal-on-scroll" aria-label="Key roles and credentials">
      <div class="credential">
        <span aria-hidden="true">01</span>
        <strong>Founder of Autolinx</strong>
      </div>
      <div class="credential">
        <span aria-hidden="true">02</span>
        <strong>Executive Producer of The ANSWER</strong>
      </div>
      <div class="credential">
        <span aria-hidden="true">03</span>
        <strong>International Business Operator</strong>
      </div>
      <div class="credential">
        <span aria-hidden="true">04</span>
        <strong>Compliance Specialist</strong>
      </div>
      <div class="credential">
        <span aria-hidden="true">05</span>
        <strong>Media &amp; Content Creator</strong>
      </div>
    </div>

  </div>
</section>
`;
}
