import '../css/style.css';

// Section renderers
import { renderHeader }              from '../sections/header.js';
import { renderHero }                from '../sections/hero.js';
import { renderAbout }               from '../sections/about.js';
import { renderVentures }            from '../sections/ventures.js';
import { renderInterviews }          from '../sections/interviews.js';
import { renderGlobalNetwork }       from '../sections/globalNetwork.js';
import { renderAutomotiveLifestyle } from '../sections/automotiveLifestyle.js';
import { renderGolfBusiness }        from '../sections/golfBusiness.js';
import { renderContact }             from '../sections/contact.js';
import { renderFooter }              from '../sections/footer.js';

// Utilities (reference-matched behaviors)
import {
  initNavbarScroll,
  initHeroFadeIn,
  initSmoothScroll,
  initMobileMenu,
  initReveal,
  initLightbox,
  initContactForm,
  initFooterYear,
  initTypewriterEffect
} from '../utils/animations.js';

function init() {
  // 1. Render header into its slot
  const headerSlot = document.getElementById('header-slot');
  if (headerSlot) headerSlot.innerHTML = renderHeader();

  // 2. Render all page sections into main
  const main = document.getElementById('main-content');
  if (main) {
    main.innerHTML = [
      renderHero(),
      /* Remaining sections are temporarily hidden for client preview and will be developed later:
      renderAbout(),
      renderVentures(),
      renderInterviews(),
      renderGlobalNetwork(),
      renderAutomotiveLifestyle(),
      renderGolfBusiness(),
      renderContact(),
      */
    ].join('');
  }

  // 3. Render footer (temporarily hidden for client preview)
  /*
  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) footerSlot.innerHTML = renderFooter();
  */

  // 4. Boot all interactive behaviors
  initNavbarScroll();   // .navbar → .scrolled on scroll
  initHeroFadeIn();     // .fade-in → .visible with stagger
  initSmoothScroll();   // anchor links smooth scroll
  initMobileMenu();     // hamburger menu toggle
  initReveal();         // section scroll reveal
  initLightbox();       // vehicle lightbox
  initContactForm();    // contact form preview
  initFooterYear();     // footer copyright year
  initTypewriterEffect(); // hero typewriter animation

  if (import.meta.env.DEV) {
    console.log('[WasamChaudhry.com] All sections and behaviors initialized.');
  }
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
