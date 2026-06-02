import ScrollStack, { ScrollStackItem } from "../components/ScrollStack/ScrollStack";
import { ventures } from "../data/ventures";

const Companies = () => {
  return (
    <section id="companies" className="companies-section">
      <div className="companies-bg-word" aria-hidden="true">
        VENTURES
      </div>

      <div className="companies-header">
        <p className="companies-kicker">
          <span></span>
          VENTURE STACK
        </p>

        <h2>Business Portfolio</h2>

        <p>
          A curated look at the ventures connected to Wasam Chaudhry’s personal brand, spanning automotive commerce, media visibility, executive production, and future-facing opportunities.
        </p>
      </div>

      <div className="companies-stack-viewport">
        <ScrollStack
          className="companies-scroll-stack"
          useWindowScroll={false}
          itemDistance={100}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.85}
          rotationAmount={0}
          blurAmount={0.6}
        >
          {ventures.map((venture) => (
            <ScrollStackItem
              key={venture.id}
              itemClassName="company-stack-card"
            >
              <article className={`company-card company-card-${venture.id}`}>
                <div className="company-card-content">
                  <div className="company-copy">
                    <p className="company-index">{venture.index}</p>
                    <p className="company-category">{venture.category}</p>

                    <h3>{venture.name}</h3>

                    <p className="company-description">
                      {venture.description}
                    </p>

                    <p className="company-note">
                      Connected to Wasam Chaudhry’s personal brand.
                    </p>
                  </div>

                  <div className="company-visual" aria-hidden="true">
                    <div className="company-orbit"></div>
                    <div className="company-monogram">
                      {venture.monogram}
                    </div>
                  </div>

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
      </div>
    </section>
  );
};

export default Companies;
