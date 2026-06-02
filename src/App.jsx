import React, { useEffect } from 'react';
import Header from "./components/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
// import Companies from "./sections/Companies";
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

function App() {
  useEffect(() => {
    initSmoothScroll();
    initReveal();
    initLightbox();
    initContactForm();
    initFooterYear();
    initHeroFadeIn();
  }, []);

  return (
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
        <Media />
        {/* <Companies /> is paused until final client content is ready. */}
      </main>
    </ClickSpark>
  );
}

export default App;
