import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-bg-word" aria-hidden="true" data-reveal="soft">
        WASAM
      </div>

      <div className="site-footer-inner">
        <div className="site-footer-brand" data-reveal="fade-up">
          <a href="#home" className="site-footer-logo">WASAM CHAUDHRY</a>
          <p>Entrepreneur • Executive Producer • Automotive Specialist • Connector</p>
          <span>LET’S MAKE MAGIC TOGETHER!</span>
        </div>

        <nav className="site-footer-nav" aria-label="Footer navigation" data-reveal="fade-up">
          <h3 className="site-footer-column-title">Navigation</h3>
          <a href="#about">About</a>
          <a href="#companies">Companies</a>
          <a href="#media">Media</a>
          <a href="#global-network">Global Network</a>
          <a href="#automotive-lifestyle">Lifestyle</a>
          <a href="#contact">Inquire</a>
        </nav>

        <div className="site-footer-contact" data-reveal="fade-up">
          <h3 className="site-footer-column-title">Contact</h3>
          {/* TODO: Replace email link with final client-provided link */}
          <a href="mailto:contact@wasamchaudhry.com">contact@wasamchaudhry.com</a>
          {/* TODO: Replace social links with final client-provided links */}
          <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          {/* TODO: Replace booking link with final client-provided link */}
          <a href="#" target="_blank" rel="noreferrer">Schedule a Conversation</a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>© {currentYear} Wasam Chaudhry. All Rights Reserved.</p>
        <p>Designed for meaningful connections.</p>
      </div>
    </footer>
  );
};

export default Footer;
