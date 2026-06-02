import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const typedText = useTypewriter("MAGIC TOGETHER!");

  return (
    <section className="hero-section" id="hero" aria-labelledby="hero-heading">
      <div className="hero-overlay"></div>
      <div className="hero-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=2400&q=80')" }}></div>

      <div className="hero-content">
        <h1 id="hero-heading" className="fade-in">WASAM CHAUDHRY</h1>
        <p className="tagline fade-in">Entrepreneur &bull; Executive Producer &bull; Automotive Specialist &bull; Connector</p>
        <p className="hero-microline fade-in">
          <span>LET&rsquo;S MAKE </span>
          <span className="typewriter-text" aria-live="polite">{typedText}</span>
          <span className="typewriter-cursor" aria-hidden="true" style={{ display: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'none' : 'inline' }}>|</span>
        </p>
        <div className="hero-buttons fade-in">
          <a href="#contact" className="btn-gold" aria-label="Send a business inquiry">Business Inquiries</a>
          <a href="#companies" className="hero-secondary-btn" aria-label="Explore Wasam Chaudhry's ventures">
            <span>Explore Ventures</span>
            <span className="btn-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
