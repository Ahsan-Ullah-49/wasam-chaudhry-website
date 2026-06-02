import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ventures } from '../data/ventures';

gsap.registerPlugin(ScrollTrigger);

const Companies = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const cards = gsap.utils.toArray('[data-company-card]', section);
      const progressBar = section.querySelector('.companies-progress span');

      if (!cards.length) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 769px)', () => {
        // All cards start absolutely positioned in the stage
        gsap.set(cards, {
          position: 'absolute',
          inset: 0,
          yPercent: 120,
          scale: 1,
          filter: 'brightness(1)',
          zIndex: (i) => i + 1,
        });

        // First card is immediately visible
        gsap.set(cards[0], { yPercent: 0 });

        // Progress bar starts at 0
        if (progressBar) {
          gsap.set(progressBar, { scaleY: 0 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${(cards.length - 1) * window.innerHeight}`,
            scrub: 1,
            pin: '.companies-pin',
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          if (index === 0) return;

          // New card slides up from below
          tl.to(
            card,
            { yPercent: 0, duration: 1, ease: 'none' },
            index - 1
          );

          // Previous card dims and scales down slightly
          tl.to(
            cards[index - 1],
            { scale: 0.965, filter: 'brightness(0.72)', duration: 1, ease: 'none' },
            index - 1
          );

          // Progress bar grows
          if (progressBar) {
            tl.to(
              progressBar,
              { scaleY: index / (cards.length - 1), duration: 1, ease: 'none' },
              index - 1
            );
          }
        });

        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger === section) st.kill();
          });
        };
      });

      mm.add('(max-width: 768px)', () => {
        gsap.set(cards, { clearProps: 'all' });
        if (progressBar) gsap.set(progressBar, { clearProps: 'all' });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="companies" className="companies-section" ref={sectionRef}>
      {/* Ghost background word */}
      <div className="companies-bg-word" aria-hidden="true">VENTURES</div>

      {/* Pinned viewport */}
      <div className="companies-pin">
        {/* Section header */}
        <div className="companies-header">
          <p className="companies-kicker">
            <span></span>
            VENTURE STACK
          </p>
          <h2>Business Portfolio</h2>
          <p>
            A curated look at the ventures connected to Wasam Chaudhry&rsquo;s personal brand,
            spanning automotive commerce, media visibility, executive production,
            and future-facing opportunities.
          </p>
        </div>

        {/* Vertical progress indicator */}
        <div className="companies-progress" aria-hidden="true">
          <span></span>
        </div>

        {/* Card stage */}
        <div className="companies-stage">
          {ventures.map((venture) => (
            <article
              key={venture.id}
              className={`company-card company-card-${venture.id}`}
              data-company-card
              aria-label={`${venture.name} — ${venture.category}`}
            >
              <div className="company-card-content">
                {/* Left: copy */}
                <div className="company-copy">
                  <p className="company-index">{venture.index}</p>
                  <p className="company-category">{venture.category}</p>
                  <h3>{venture.name}</h3>
                  <p className="company-description">{venture.description}</p>
                  <p className="company-note">
                    Connected to Wasam Chaudhry&rsquo;s personal brand.
                  </p>
                </div>

                {/* Right: monogram visual */}
                <div className="company-visual" aria-hidden="true">
                  <div className="company-orbit"></div>
                  <div className="company-monogram">{venture.monogram}</div>
                </div>

                {/* Bottom: metadata row */}
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
