import { useRef, useLayoutEffect } from "react";
import { ventures } from "../data/ventures";
import "../styles/companies.css";

const Companies = () => {
  const sectionRef = useRef(null);
  const stackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = Array.from(section.querySelectorAll("[data-company-stack-item]"));
    const visuals = Array.from(section.querySelectorAll("[data-company-card-visual]"));

    if (!items.length || !visuals.length) return;

    const state = visuals.map(() => ({
      currentScale: 1,
      targetScale: 1,
      currentBrightness: 1,
      targetBrightness: 1,
    }));

    let rafId = null;
    let running = true;

    const clamp = (value, min = 0, max = 1) =>
      Math.min(Math.max(value, min), max);

    const lerp = (start, end, amount) =>
      start + (end - start) * amount;

    const calculateTargets = () => {
      const viewportHeight = window.innerHeight;

      visuals.forEach((visual, index) => {
        const nextItem = items[index + 1];

        let progress = 0;

        if (nextItem) {
          const rect = nextItem.getBoundingClientRect();

          const start = viewportHeight * 0.82;
          const end = viewportHeight * 0.34;

          progress = clamp((start - rect.top) / (start - end));
        }

        state[index].targetScale = lerp(1, 0.965, progress);
        state[index].targetBrightness = lerp(1, 0.74, progress);
      });
    };

    const render = () => {
      calculateTargets();

      let needsNextFrame = false;

      visuals.forEach((visual, index) => {
        const itemState = state[index];

        itemState.currentScale = lerp(
          itemState.currentScale,
          itemState.targetScale,
          0.14
        );

        itemState.currentBrightness = lerp(
          itemState.currentBrightness,
          itemState.targetBrightness,
          0.14
        );

        const scaleDiff = Math.abs(itemState.currentScale - itemState.targetScale);
        const brightnessDiff = Math.abs(
          itemState.currentBrightness - itemState.targetBrightness
        );

        if (scaleDiff > 0.0005 || brightnessDiff > 0.0005) {
          needsNextFrame = true;
        }

        visual.style.transform = `scale(${itemState.currentScale})`;
        visual.style.filter = `brightness(${itemState.currentBrightness})`;
      });

      if (running && needsNextFrame) {
        rafId = window.requestAnimationFrame(render);
      } else {
        rafId = null;
      }
    };

    const requestRender = () => {
      calculateTargets();

      if (rafId === null) {
        rafId = window.requestAnimationFrame(render);
      }
    };

    calculateTargets();
    render();

    window.addEventListener("scroll", requestRender, { passive: true });
    window.addEventListener("resize", requestRender);

    return () => {
      running = false;

      window.removeEventListener("scroll", requestRender);
      window.removeEventListener("resize", requestRender);

      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }

      visuals.forEach((visual) => {
        visual.style.transform = "";
        visual.style.filter = "";
      });
    };
  }, []);

  return (
    <section id="companies" className="companies-section" ref={sectionRef}>
      <div className="companies-bg-word ventures-optical-center" aria-hidden="true" data-reveal="soft">
        VENTURES
      </div>
      
      <div className="companies-header">
        <div className="companies-kicker" data-reveal="fade-down">
          <span className="companies-kicker-line"></span>
          <span className="companies-kicker-index">02</span>
          <span className="companies-kicker-text">COMPANIES</span>
        </div>

        <h2 data-reveal="zoom-in">Business Portfolio</h2>
      </div>

      <div className="companies-stack" ref={stackRef} data-reveal="soft">
        {ventures.map((venture, index) => (
          <div
            className="company-stack-item"
            key={venture.id}
            style={{ "--i": index }}
            data-company-stack-item
          >
            <article
              className={`company-card company-card-${venture.id}`}
              data-company-card
            >
              <div className="company-card-visual" data-company-card-visual>
                <div className="company-card-content">
                  <div className="company-copy">
                    <p className="company-index">{venture.index}</p>
                    <p className="company-category">{venture.category}</p>
                    <h3 className={`company-card-title ${venture.name.includes("Pear") && venture.name.includes("Pressure") ? "company-card-title--pear-pressure" : ""}`}>
                      {venture.name}
                    </h3>

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
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
