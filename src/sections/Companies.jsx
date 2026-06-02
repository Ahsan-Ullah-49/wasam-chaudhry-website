import React, { useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ventures } from '../data/ventures';

gsap.registerPlugin(ScrollTrigger);

const Companies = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".company-card");
    const progressBar = sectionRef.current.querySelector(".companies-progress span");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 769px) and (prefers-reduced-motion: no-preference)", () => {
      // Setup initial state for desktop pinning
      gsap.set(cards, {
        yPercent: 110,
        zIndex: (i) => i + 1,
      });
      gsap.set(cards[0], { yPercent: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        tl.to(card, {
          yPercent: 0,
          duration: 1,
          ease: "none",
        });

        tl.to(
          cards[index - 1],
          {
            scale: 0.96,
            filter: "brightness(0.78)",
            duration: 1,
            ease: "none",
          },
          "<"
        );
      });

      if (progressBar) {
        gsap.to(progressBar, {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${cards.length * window.innerHeight}`,
            scrub: true,
          }
        });
      }

      return () => {
        // Timeline is automatically killed by ScrollTrigger
      };
    });

    mm.add("(max-width: 768px), (prefers-reduced-motion: reduce)", () => {
      // Mobile / Reduced Motion fallback
      gsap.set(cards, { clearProps: "all" });
      if (progressBar) gsap.set(progressBar, { clearProps: "all" });
      sectionRef.current.classList.add("companies-fallback");

      return () => {
        sectionRef.current.classList.remove("companies-fallback");
      };
    });

    return () => {
      mm.revert();
    };
  }, { scope: sectionRef });

  return (
    <section id="companies" className="companies-section" data-companies-pinned ref={sectionRef}>
      <div className="companies-scroll-space">
        <div className="companies-pin">
          
          <div className="companies-bg-word" aria-hidden="true">VENTURES</div>

          <div className="companies-stage-label">
            <p><span></span>VENTURE THEATRE</p>
            <h2>Business Portfolio</h2>
          </div>

          <div className="companies-progress" aria-hidden="true">
            <span></span>
          </div>

          <div className="companies-stage" aria-label="Wasam Chaudhry business ventures">
            {ventures.map((venture, index) => {
              // Recreate the original classes based on index (one, two, three, four)
              const cardClassMap = ['one', 'two', 'three', 'four'];
              const cardClass = cardClassMap[index] || 'one';

              return (
                <article 
                  key={venture.id} 
                  className={`company-card company-card-${cardClass}`} 
                  data-company-slide
                >
                  <div className="company-card-inner">
                    <div className="company-copy">
                      <p className="company-count">{venture.index}</p>
                      <p className="company-category">{venture.category}</p>
                      <h3>{venture.name}</h3>
                      <p className="company-description">{venture.description}</p>
                      <p className="company-note">{venture.note}</p>
                    </div>

                    <div className="company-mark-wrap" aria-hidden="true">
                      <div className="company-orbit"></div>
                      <div className="company-mark">{venture.monogram}</div>
                    </div>

                    <div className="company-meta" aria-hidden="true">
                      {venture.meta.map((m, i) => (
                        <span key={i}>{m}</span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
