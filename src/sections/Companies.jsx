import React from 'react';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack/ScrollStack';
import { ventures } from '../data/ventures';

const Companies = () => {
  return (
    <section id="companies" className="companies-section">

      {/* Ghost background word */}
      <div className="companies-bg-word" aria-hidden="true">VENTURES</div>

      {/* Editorial section header */}
      <div className="companies-header">
        <p className="companies-kicker">
          <span aria-hidden="true"></span>
          VENTURE STACK
        </p>
        <h2>Business Portfolio</h2>
        <p className="companies-intro">
          A curated look at the ventures connected to Wasam Chaudhry&rsquo;s personal
          brand, spanning automotive commerce, media visibility, executive
          production, and future-facing opportunities.
        </p>
      </div>

      {/* ScrollStack — window-driven stacking animation */}
      <ScrollStack
        className="companies-scroll-stack"
        useWindowScroll={true}
        itemDistance={90}
        itemScale={0.035}
        itemStackDistance={34}
        stackPosition="18%"
        scaleEndPosition="8%"
        baseScale={0.86}
        rotationAmount={0}
        blurAmount={0}
      >
        {ventures.map((venture) => (
          <ScrollStackItem key={venture.id} itemClassName="company-stack-card">
            <article
              className={`company-card company-card-${venture.id}`}
              aria-label={`${venture.name} — ${venture.category}`}
            >
              <div className="company-card-inner">
                {/* Left: copy */}
                <div className="company-copy">
                  <p className="company-count">{venture.index}</p>
                  <p className="company-category">{venture.category}</p>
                  <h3>{venture.name}</h3>
                  <p className="company-description">{venture.description}</p>
                  <p className="company-note">
                    Connected to Wasam Chaudhry&rsquo;s personal brand.
                  </p>
                </div>

                {/* Right: monogram visual */}
                <div className="company-mark-wrap" aria-hidden="true">
                  <div className="company-orbit"></div>
                  <div className="company-mark">{venture.monogram}</div>
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
          </ScrollStackItem>
        ))}
      </ScrollStack>

    </section>
  );
};

export default Companies;
