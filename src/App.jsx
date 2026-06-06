import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setupScrollReveals } from './utils/scrollReveal';
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Companies from "./sections/Companies";
import Media from "./sections/Media";
import ClickSpark from "./components/ClickSpark";

// Import utilities for global vanilla behaviors we didn't migrate to React
import { 
  initSmoothScroll, 
  initReveal, 
  initLightbox, 
  initContactForm, 
  initFooterYear,
  initHeroFadeIn
} from './utils/animations';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef(null);

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const html = document.documentElement;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);

      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        html.style.scrollBehavior = previousScrollBehavior;
      });
    });

    const ctx = gsap.context(() => {
      setupScrollReveals(appRef.current);
    }, appRef);

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    initSmoothScroll();
    initReveal();
    initLightbox();
    initContactForm();
    initFooterYear();
    initHeroFadeIn();
  }, []);

  return (
    <div ref={appRef}>
      <ClickSpark
        sparkColor="#B89A5E"
        sparkSize={15}
        sparkRadius={25}
        sparkCount={10}
        duration={500}
      >
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Companies />
          <Media />
        </main>
      </ClickSpark>
    </div>
  );
}

export default App;
