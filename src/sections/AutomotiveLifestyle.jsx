import React, { useState, useEffect, useCallback } from 'react';
import '../styles/automotiveLifestyle.css';

// TODO: Replace with client-provided final vehicle images.
const vehicles = [
  {
    name: "Nissan GT-R",
    label: "Performance Icon",
    description: "A symbol of precision, presence, and controlled aggression.",
    // TODO: Replace with client-provided final vehicle image.
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "Toyota Century V12",
    label: "Executive Classic",
    description: "Quiet authority, heritage, and understated luxury.",
    // TODO: Replace with client-provided final vehicle image.
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "BMW E39 M5",
    label: "Analog Legend",
    description: "A timeless performance sedan defined by balance and character.",
    // TODO: Replace with client-provided final vehicle image.
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80&auto=format&fit=crop",
  },
  {
    name: "BMW F90 M5",
    label: "Modern Power",
    description: "Executive performance with a sharper, contemporary edge.",
    // TODO: Replace with client-provided final vehicle image.
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900&q=80&auto=format&fit=crop",
  },
];

const AutomotiveLifestyle = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const closeLightbox = useCallback(() => {
    setSelectedVehicle(null);
  }, []);

  useEffect(() => {
    if (!selectedVehicle) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedVehicle, closeLightbox]);

  return (
    <section id="automotive-lifestyle" className="automotive-section">
      <div className="automotive-bg-word" aria-hidden="true" data-reveal="soft">
        MACHINES
      </div>

      <div className="automotive-header reveal-on-scroll">
        <div className="automotive-kicker" data-reveal="fade-down">
          <span className="automotive-kicker-line"></span>
          <span className="automotive-kicker-index">05</span>
          <span className="automotive-kicker-text">AUTOMOTIVE LIFESTYLE</span>
        </div>

        <h2 data-reveal="zoom-in">Driven by Detail</h2>

        <p className="automotive-editorial-line" data-reveal="fade-up">
          Icons of the Journey
        </p>
      </div>

      <div className="automotive-grid reveal-on-scroll" data-reveal-group="fade-up">
        {vehicles.map((vehicle) => (
          <button
            key={vehicle.name}
            type="button"
            className="automotive-card"
            onClick={() => setSelectedVehicle(vehicle)}
            aria-label={`Open preview for ${vehicle.name}`}
          >
            <img
              src={vehicle.image}
              alt={`${vehicle.name} — automotive lifestyle placeholder`}
              loading="lazy"
            />
            <div className="automotive-card-overlay">
              <span className="automotive-card-label">{vehicle.label}</span>
              <h3>{vehicle.name}</h3>
              <p>{vehicle.description}</p>
            </div>
          </button>
        ))}
      </div>

      {selectedVehicle && (
        <div
          className="automotive-lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedVehicle.name} preview`}
        >
          <div
            className="automotive-lightbox-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="automotive-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close preview"
              type="button"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
            <img
              src={selectedVehicle.image}
              alt={`${selectedVehicle.name} — full preview`}
            />
            <div className="automotive-lightbox-content">
              <span className="automotive-lightbox-label">{selectedVehicle.label}</span>
              <h3>{selectedVehicle.name}</h3>
              <p>{selectedVehicle.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AutomotiveLifestyle;
