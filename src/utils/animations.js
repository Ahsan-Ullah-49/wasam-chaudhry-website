/**
 * All interactive behaviors for WasamChaudhry.com
 * Matches the provided reference JS — no libraries, production-friendly.
 */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────────────────
   1. NAVBAR SCROLL EFFECT
   Adds .scrolled to .navbar when scrollY > 50
───────────────────────────────────────────────────────── */
export function initNavbarScroll() {
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
  onScroll(); // run immediately on load
}

/* ─────────────────────────────────────────────────────────
   2. HERO FADE-IN
   Triggers .visible on all .fade-in elements with staggered delay
───────────────────────────────────────────────────────── */
export function initHeroFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  // If reduced motion, show instantly
  if (prefersReducedMotion) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 150 + index * 180);
  });
}

/* ─────────────────────────────────────────────────────────
   3. SMOOTH ANCHOR SCROLL
   Intercepts all href="#..." links
───────────────────────────────────────────────────────── */
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ─────────────────────────────────────────────────────────
   4. MOBILE MENU — clean toggle, no alert
   Uses .open class on .nav-links; accessible aria-expanded
───────────────────────────────────────────────────────── */
export function initMobileMenu() {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  if (!menuToggle || !navLinks) return;

  const openMenu = () => {
    menuToggle.classList.add("active");
    navLinks.classList.add("active");
    document.body.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) closeMenu();
  });
}

/* ─────────────────────────────────────────────────────────
   5. SCROLL REVEAL (other sections)
   IntersectionObserver on .reveal elements
───────────────────────────────────────────────────────── */
export function initReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-on-scroll');
  if (!elements.length) return;

  if (prefersReducedMotion) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          // Honour per-card stagger set via --card-delay inline style
          const delay = el.style.getPropertyValue('--card-delay');
          if (delay) {
            el.style.transitionDelay = delay;
          }
          el.classList.add('visible');
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.10, rootMargin: '0px 0px -32px 0px' }
  );

  elements.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────
   6. VEHICLE LIGHTBOX
───────────────────────────────────────────────────────── */
export function initLightbox() {
  const lightbox     = document.getElementById('lightbox');
  const closeBtn     = document.getElementById('lightbox-close');
  const lbName       = document.getElementById('lightbox-name');
  const lbLabel      = document.getElementById('lightbox-label');
  const lbDesc       = document.getElementById('lightbox-desc');
  const lbImgLabel   = document.getElementById('lightbox-image-label');
  if (!lightbox || !closeBtn) return;

  let lastFocused = null;

  const open = card => {
    if (lbName)     lbName.textContent     = card.dataset.vehicleName  || '';
    if (lbLabel)    lbLabel.textContent    = card.dataset.vehicleLabel || '';
    if (lbDesc)     lbDesc.textContent     = card.dataset.vehicleDesc  || '';
    if (lbImgLabel) lbImgLabel.textContent = `${card.dataset.vehicleName || 'Vehicle'} — Image Placeholder`;
    lastFocused = document.activeElement;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtn.focus(), 50);
  };

  const close = () => {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  };

  document.querySelectorAll('.vehicle-card').forEach(card => {
    card.addEventListener('click', () => open(card));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
    });
  });

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) close();
  });
}

/* ─────────────────────────────────────────────────────────
   7. CONTACT FORM — frontend preview
───────────────────────────────────────────────────────── */
export function initContactForm() {
  const form     = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    feedback.style.display = 'block';
    feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => { feedback.style.display = 'none'; form.reset(); }, 6000);
  });
}

/* ─────────────────────────────────────────────────────────
   8. FOOTER YEAR
───────────────────────────────────────────────────────── */
export function initFooterYear() {
  const el = document.getElementById('footer-year');
  if (el) el.textContent = new Date().getFullYear();
}

/* ─────────────────────────────────────────────────────────
   9. HERO TYPEWRITER EFFECT
───────────────────────────────────────────────────────── */
export function initTypewriterEffect() {
  const textElement = document.querySelector('.typewriter-text');
  if (!textElement) return;

  if (prefersReducedMotion) {
    textElement.textContent = "MAGIC TOGETHER!";
    const cursor = document.querySelector('.typewriter-cursor');
    if (cursor) cursor.style.display = 'none';
    return;
  }

  const phrase = "MAGIC TOGETHER!";
  let i = 0;
  let isDeleting = false;
  let typingSpeed = 90;
  
  function typeWriter() {
    if (!isDeleting && i <= phrase.length) {
      textElement.textContent = phrase.substring(0, i);
      i++;
      setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && i >= 0) {
      textElement.textContent = phrase.substring(0, i);
      i--;
      setTimeout(typeWriter, 55);
    } else if (i > phrase.length) {
      isDeleting = true;
      setTimeout(typeWriter, 1300);
    } else if (i < 0) {
      isDeleting = false;
      i = 0;
      setTimeout(typeWriter, 500);
    }
  }

  typeWriter();
}

/* ─────────────────────────────────────────────────────────
   10. COMPANIES PINNED SCROLL ANIMATION
   Cinematic scroll animation for Venture Theatre
───────────────────────────────────────────────────────── */
export function initCompaniesPinnedScroll() {
  const section = document.querySelector("[data-companies-pinned]");
  if (!section) return;

  const slides = Array.from(section.querySelectorAll("[data-company-slide]"));
  const progressBar = section.querySelector(".companies-progress span");

  if (!slides.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobileQuery = window.matchMedia("(max-width: 768px)");

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const easeOutCubic = (value) => 1 - Math.pow(1 - value, 3);

  let ticking = false;

  function setMobileFallback() {
    const shouldFallback = prefersReducedMotion || mobileQuery.matches;

    section.classList.toggle("companies-fallback", shouldFallback);

    if (shouldFallback) {
      slides.forEach((slide) => {
        slide.style.transform = "";
        slide.style.filter = "";
        slide.style.zIndex = "";
      });

      if (progressBar) {
        progressBar.style.transform = "";
      }
    }

    return shouldFallback;
  }

  function update() {
    ticking = false;

    if (setMobileFallback()) return;

    const rect = section.getBoundingClientRect();
    const scrollable = section.offsetHeight - window.innerHeight;
    const progress = clamp(-rect.top / scrollable, 0, 1);
    const step = progress * (slides.length - 1);

    slides.forEach((slide, index) => {
      let y = 0;
      let scale = 1;
      let brightness = 1;

      if (index === 0) {
        y = 0;
      } else {
        const local = clamp(step - (index - 1), 0, 1);
        const eased = easeOutCubic(local);
        y = (1 - eased) * 115;
      }

      const coveredDepth = clamp(step - index, 0, 1);
      scale = 1 - coveredDepth * 0.045;
      brightness = 1 - coveredDepth * 0.13;

      slide.style.transform = `translate3d(0, ${y}%, 0) scale(${scale})`;
      slide.style.filter = `brightness(${brightness})`;
      slide.style.zIndex = String(index + 1);
    });

    if (progressBar) {
      progressBar.style.transform = `scaleY(${progress})`;
    }
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  mobileQuery.addEventListener?.("change", requestUpdate);

  update();
}
