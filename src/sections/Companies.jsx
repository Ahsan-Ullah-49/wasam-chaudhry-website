import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ventures } from "../data/ventures";
import "../styles/companies.css";

gsap.registerPlugin(ScrollTrigger);

const Companies = () => {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pin = pinRef.current;

      if (!section || !pin) return;

      const cards = gsap.utils.toArray("[data-company-card]", section);
      const progressBar = section.querySelector(".companies-progress span");

      if (!cards.length) return;

      const mm = gsap.matchMedia();

      const setupCompaniesStack = ({
        endMultiplier,
        incomingY,
        previousScale,
        previousBrightness,
      }) => {
        gsap.set(cards, {
          position: "absolute",
          inset: 0,
          yPercent: incomingY,
          scale: 1,
          autoAlpha: 1,
          filter: "brightness(1)",
          zIndex: (index) => index + 1,
          clearProps: "opacity",
        });

        gsap.set(cards[0], {
          yPercent: 0,
        });

        if (progressBar) {
          gsap.set(progressBar, {
            scaleY: 0,
            transformOrigin: "top",
          });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${(cards.length - 1) * window.innerHeight * endMultiplier}`,
            scrub: 1,
            pin: pin,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          if (index === 0) return;

          tl.to(
            card,
            {
              yPercent: 0,
              duration: 1,
              ease: "none",
            },
            index - 1
          );

          tl.to(
            cards[index - 1],
            {
              scale: previousScale,
              filter: `brightness(${previousBrightness})`,
              duration: 1,
              ease: "none",
            },
            index - 1
          );

          if (progressBar) {
            tl.to(
              progressBar,
              {
                scaleY: index / (cards.length - 1),
                duration: 1,
                ease: "none",
              },
              index - 1
            );
          }
        });

        return tl;
      };

      mm.add("(min-width: 1025px)", () => {
        const tl = setupCompaniesStack({
          endMultiplier: 1,
          incomingY: 118,
          previousScale: 0.965,
          previousBrightness: 0.72,
        });
        ScrollTrigger.refresh();
        return () => tl.kill();
      });

      mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
        const tl = setupCompaniesStack({
          endMultiplier: 0.9,
          incomingY: 112,
          previousScale: 0.97,
          previousBrightness: 0.76,
        });
        ScrollTrigger.refresh();
        return () => tl.kill();
      });

      mm.add("(max-width: 768px)", () => {
        const tl = setupCompaniesStack({
          endMultiplier: 0.78,
          incomingY: 108,
          previousScale: 0.975,
          previousBrightness: 0.8,
        });
        ScrollTrigger.refresh();
        return () => tl.kill();
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section id="companies" className="companies-section" ref={sectionRef}>
      <div className="companies-pin" ref={pinRef}>
        <div className="companies-bg-word" aria-hidden="true">
          VENTURES
        </div>
        
        <div className="companies-header">
          <div className="companies-kicker">
            <span className="companies-kicker-line"></span>
            <span className="companies-kicker-index">02</span>
            <span className="companies-kicker-text">COMPANIES</span>
          </div>

          <h2>Business Portfolio</h2>
        </div>

        <div className="companies-progress" aria-hidden="true">
          <span></span>
        </div>

        <div className="companies-stage">
          {ventures.map((venture) => (
            <article
              key={venture.id}
              className={`company-card company-card-${venture.id}`}
              data-company-card
            >
              <div className="company-card-content">
                <div className="company-copy">
                  <p className="company-index">{venture.index}</p>
                  <p className="company-category">{venture.category}</p>

                  <h3>{venture.name}</h3>

                  <p className="company-description">{venture.description}</p>

                  <div className="company-actions">
                    <a
                      href={venture.websiteUrl}
                      className="company-visit-btn"
                      aria-label={`Visit ${venture.name} website`}
                    >
                      <span>Visit Website</span>
                      <i aria-hidden="true">↗</i>
                    </a>
                  </div>
                </div>

                <div className="company-visual" aria-hidden="true">
                  <div className="company-orbit"></div>
                  <div className="company-monogram">{venture.monogram}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
