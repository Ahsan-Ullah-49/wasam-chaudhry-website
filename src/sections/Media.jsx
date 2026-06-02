import React from 'react';
import '../styles/media.css';

const Media = () => {
  return (
    <section id="media" className="media-section">
      <div className="media-bg-word" aria-hidden="true">MEDIA</div>

      <div className="media-header reveal-on-scroll">
        <p className="media-kicker">
          <span></span>
          MEDIA
        </p>

        <h2>Media & Interviews</h2>

        <p>
          A curated space for conversations, interviews, and media moments connected to Wasam Chaudhry’s personal brand and executive production work.
        </p>
      </div>

      <div className="media-layout">
        <article className="media-feature reveal-on-scroll">
          <div className="media-feature-visual">
            <div className="media-play-button" aria-hidden="true">
              <span></span>
            </div>
            <p className="media-feature-label">Featured Platform</p>
          </div>

          <div className="media-feature-content">
            <p className="media-eyebrow">Executive Production / Conversations / Media Presence</p>
            <h3>The ANSWER</h3>
            <p>
              A platform shaped around meaningful conversations, purposeful storytelling, and high-value media presence.
            </p>

            <a href="#contact" className="btn-gold media-cta">
              Explore Media
            </a>
          </div>
        </article>

        <aside className="media-rail reveal-on-scroll">
          <p className="media-rail-label">Media Direction</p>
          <h4>Built for conversations that create presence.</h4>
          <p>
            This section is designed to support interviews, podcast moments, and future content releases without overwhelming the personal brand.
          </p>
        </aside>
      </div>

      <div className="media-cards">
        <article className="media-card reveal-on-scroll">
          <div className="media-card-top">
            <span>01</span>
            <p>Media Appearances</p>
          </div>
          <h3>Interviews</h3>
          <p>
            Future interviews, guest conversations, and professional media features will be highlighted here.
          </p>
        </article>

        <article className="media-card reveal-on-scroll">
          <div className="media-card-top">
            <span>02</span>
            <p>Conversations</p>
          </div>
          <h3>Podcast Moments</h3>
          <p>
            Selected clips and meaningful conversations from Wasam’s media journey will be organized in this space.
          </p>
        </article>

        <article className="media-card reveal-on-scroll">
          <div className="media-card-top">
            <span>03</span>
            <p>Executive Producer</p>
          </div>
          <h3>Production Work</h3>
          <p>
            A refined look at projects, ideas, and storytelling connected to The ANSWER and future media initiatives.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Media;
