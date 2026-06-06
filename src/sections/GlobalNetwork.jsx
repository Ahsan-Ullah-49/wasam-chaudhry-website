import React, { useState } from 'react';
import worldMapBase from "../assets/world-map.svg";
import '../styles/globalNetwork.css';

const networkPoints = [
  { name: "USA", x: 19, y: 39 },
  { name: "UAE", x: 62.5, y: 44.5 },
  { name: "Singapore", x: 75.5, y: 55 },
  { name: "Indonesia", x: 78, y: 60.5 },
  { name: "Hong Kong", x: 79.5, y: 46.5 },
  { name: "Japan", x: 86.5, y: 36.5 },
  { name: "East Timor", x: 82.5, y: 62.5 },
  { name: "Australia", x: 83, y: 77, hub: true },
];

const GlobalNetwork = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const hub = networkPoints.find(p => p.hub);

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
          alt="Luxury global network base map"
          className="global-network-base-image"
          loading="lazy"
        />

        <svg className="global-network-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          {networkPoints.filter(p => !p.hub).map((target) => {
            const midX = (hub.x + target.x) / 2;
            const midY = (hub.y + target.y) / 2 - 8;
            const isHovered = hoveredCountry === target.name || hoveredCountry === hub.name;
            const isAnyHovered = hoveredCountry !== null;
            
            return (
              <path
                key={`line-${target.name}`}
                d={`M ${hub.x} ${hub.y} Q ${midX} ${midY} ${target.x} ${target.y}`}
                className={`network-path ${isHovered ? 'is-active' : ''} ${isAnyHovered && !isHovered ? 'is-faded' : ''}`}
              />
            );
          })}
        </svg>

        <div className="global-network-pins">
          {networkPoints.map((point) => {
            const isHovered = hoveredCountry === point.name || (hoveredCountry === hub.name && !point.hub);
            const isAnyHovered = hoveredCountry !== null;

            return (
              <div
                key={`pin-${point.name}`}
                className={`network-pin-wrapper ${point.hub ? 'is-hub' : ''} ${isHovered ? 'is-active' : ''} ${isAnyHovered && !isHovered && !point.hub ? 'is-faded' : ''}`}
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                onMouseEnter={() => setHoveredCountry(point.name)}
                onMouseLeave={() => setHoveredCountry(null)}
              >
                <div className="network-pin"></div>
                <div className="network-pin-glow"></div>
                <div className="network-pin-label">{point.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="global-network-countries reveal-on-scroll" aria-label="Global network regions" data-reveal-group="fade-up">
        {networkPoints.filter(p => !p.hub).concat([hub]).map((point) => (
          <div 
            key={`pill-${point.name}`} 
            className={`global-network-country ${hoveredCountry === point.name ? 'is-active' : ''}`}
            onMouseEnter={() => setHoveredCountry(point.name)}
            onMouseLeave={() => setHoveredCountry(null)}
          >
            {point.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalNetwork;
