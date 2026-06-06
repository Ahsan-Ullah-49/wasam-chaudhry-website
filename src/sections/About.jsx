import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">

      <div className="about-bg-word" aria-hidden="true">
        <span>WASAM</span>
        <span>CHAUDHRY</span>
      </div>

      <div className="about-layout">

        <div className="about-visual reveal-on-scroll" data-reveal="fade-right">
          <div className="about-image-shell">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=80"
              alt="Executive portrait placeholder"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                e.target.closest('.about-image-shell').classList.add('image-missing');
                e.target.style.display = 'none';
              }}
            />
            <div className="about-image-fallback" aria-hidden="true">
              <span>WASAM CHAUDHRY</span>
            </div>
            
            <div className="about-image-badges" aria-hidden="true">
              <span>Founder of Autolinx</span>
              <span>Executive Producer</span>
              <span>Global Operator</span>
            </div>
          </div>
          <div className="about-vertical-label" aria-hidden="true">EXECUTIVE PROFILE</div>
        </div>

        <div className="about-content reveal-on-scroll">
          <div className="about-kicker" data-reveal="fade-down">
            <span className="about-kicker-line"></span>
            <span className="about-kicker-index">01</span>
            <span className="about-kicker-text">ABOUT ME</span>
          </div>

          <h2 id="about-heading" data-reveal="zoom-in">The vision behind the name.</h2>

          <p className="about-subtitle">Entrepreneur &bull; Executive Producer &bull; Automotive Specialist &bull; Connector</p>

          <div className="about-copy" data-reveal-group="fade-left" data-reveal-stagger="0.1">
            <p>Wasam Chaudhry is an <strong><em>entrepreneur</em></strong> and <strong><em>executive producer</em></strong> with a presence shaped by <strong><em>business</em></strong>, <strong><em>media</em></strong>, <strong><em>automotive culture</em></strong>, and <strong><em>international relationships</em></strong>.</p>
            <p>As the <strong><em>founder of Autolinx</em></strong> and <strong><em>executive producer of The ANSWER</em></strong>, he works across <strong><em>commerce</em></strong>, <strong><em>content</em></strong>, <strong><em>compliance</em></strong>, and <strong><em>global opportunity</em></strong> with a calm executive mindset.</p>
            <p>His personal brand is built around <strong><em>credibility</em></strong>, <strong><em>meaningful conversations</em></strong>, and the ability to <strong><em>connect people, ideas, and opportunities</em></strong> across borders.</p>
          </div>

          <a href="#contact" className="btn-gold about-cta">
            LET&rsquo;S MAKE MAGIC TOGETHER
          </a>
        </div>

        <div className="about-marquee reveal-on-scroll" aria-label="Key roles and credentials" data-reveal="soft">
          <div className="about-marquee-track">
            <div className="about-marquee-group">
              <span className="credential-text">Founder of Autolinx</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
              <span className="credential-text">Executive Producer of The ANSWER</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
              <span className="credential-text">International Business Operator</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
              <span className="credential-text">Compliance Specialist</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
              <span className="credential-text">Media &amp; Content Creator</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
            </div>
            <div className="about-marquee-group" aria-hidden="true">
              <span className="credential-text">Founder of Autolinx</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
              <span className="credential-text">Executive Producer of The ANSWER</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
              <span className="credential-text">International Business Operator</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
              <span className="credential-text">Compliance Specialist</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
              <span className="credential-text">Media &amp; Content Creator</span>
              <span className="credential-separator" aria-hidden="true">✦</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
