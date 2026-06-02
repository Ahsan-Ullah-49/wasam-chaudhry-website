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

      mm.add("(min-width: 769px)", () => {
        gsap.set(cards, {
          yPercent: 120,
          scale: 1,
          autoAlpha: 1,
          filter: "brightness(1)",
          zIndex: (index) => index + 1,
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
            end: () => `+=${(cards.length - 1) * window.innerHeight}`,
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
              scale: 0.965,
              filter: "brightness(0.72)",
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

        ScrollTrigger.refresh();

        return () => {
          tl.kill();
        };
      });

      mm.add("(max-width: 768px)", () => {
        gsap.set(cards, {
          clearProps: "all",
        });

        if (progressBar) {
          gsap.set(progressBar, {
            clearProps: "all",
          });
        }
      });

      return () => {
        mm.revert();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section id="companies" className="companies-section" ref={sectionRef}>
      <div className="companies-bg-word" aria-hidden="true">
        VENTURES
      </div>

      <div className="companies-pin" ref={pinRef}>
        <div className="companies-header">
          <p className="companies-kicker">
            <span></span>
            VENTURE STACK
          </p>

          <h2>Business Portfolio</h2>

          <p>
            A curated look at the ventures connected to Wasam Chaudhry’s
            personal brand, spanning automotive commerce, media visibility,
            executive production, and future-facing opportunities.
          </p>
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

                  <p className="company-note">
                    Connected to Wasam Chaudhry’s personal brand.
                  </p>
                </div>

                <div className="company-visual" aria-hidden="true">
                  <div className="company-orbit"></div>
                  <div className="company-monogram">{venture.monogram}</div>
                </div>

                <div className="company-meta" aria-hidden="true">
                  <span>Personal Brand</span>
                  <span>Business</span>
                  <span>Media</span>
                  <span>Global Opportunity</span>
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
