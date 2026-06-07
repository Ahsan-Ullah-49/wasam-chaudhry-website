import React from 'react';
import worldMapBase from "../assets/world-map.svg";
import '../styles/globalNetwork.css';

const countries = [
  "USA", "UAE", "Singapore", "Indonesia", "Hong Kong", "Japan", "East Timor", "Australia"
];

const GlobalNetwork = () => {
  return (
    <section id="global-network" className="global-network-section">
      <div className="global-network-bg-word" aria-hidden="true" data-reveal="soft">
        NETWORK
      </div>

      <div className="global-network-header reveal-on-scroll">
        <div className="global-network-kicker" data-reveal="fade-down">
          <span className="global-network-kicker-line"></span>
          <span className="global-network-kicker-index">04</span>
          <span className="global-network-kicker-text">GLOBAL NETWORK</span>
        </div>

        <h2 data-reveal="zoom-in">International Reach</h2>

        <p data-reveal="fade-up">
          A network shaped by business, media, and global opportunity.
        </p>
      </div>

      <div className="global-network-map-frame reveal-on-scroll" data-reveal="zoom-in">
        <img
          src={worldMapBase}
          alt="Global network map highlighting Wasam Chaudhry's international reach"
          className="global-network-map-image"
          loading="lazy"
        />
      </div>

      <div className="global-network-countries reveal-on-scroll" aria-label="Global network regions" data-reveal-group="fade-up">
        {countries.map((country) => (
          <div key={`pill-${country}`} className="global-network-country">
            {country}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalNetwork;
