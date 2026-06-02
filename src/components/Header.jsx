import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };
    const handleResize = () => {
      if (window.innerWidth > 1024) closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); 
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="navbar">
      <div className="logo"><a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>WASAM CHAUDHRY</a></div>
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="nav-links">
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#companies" onClick={closeMenu}>Companies</a>
        <a href="#media" onClick={closeMenu}>Media</a>
        <a href="#network" onClick={closeMenu}>Global Network</a>
        <a href="#lifestyle" onClick={closeMenu}>Lifestyle</a>
        <a href="#contact" className="btn-gold-outline" onClick={closeMenu}>Inquire</a>
      </nav>
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
        id="mobile-menu" 
        aria-label="Open navigation menu" 
        aria-expanded={isMenuOpen} 
        type="button"
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </header>
  );
};

export default Header;
