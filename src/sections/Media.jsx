import React, { useState, useRef, useEffect } from 'react';
import '../styles/media.css';

// Temporary YouTube podcast placeholders. Replace with Wasam Chaudhry's real media links later.
const podcasts = [
  {
    id: "ky1oHHJ5Ne8",
    number: "01",
    title: "Business Mindset & Personal Growth",
    category: "Podcast Feature",
  },
  {
    id: "gCS0-1YhmPw",
    number: "02",
    title: "Building a Personal Brand",
    category: "Founder Conversation",
  },
  {
    id: "kxLmeUIXXtU",
    number: "03",
    title: "Entrepreneurship & Strategy",
    category: "Business Interview",
  },
  {
    id: "sdd4BST87ks",
    number: "04",
    title: "Scaling Vision Into Impact",
    category: "Executive Dialogue",
  },
  {
    id: "FHamDLiiZxs",
    number: "05",
    title: "Fame, Authenticity & Influence",
    category: "Media Conversation",
  },
  {
    id: "2WUb457Zpm4",
    number: "06",
    title: "Partnerships & Creator Economy",
    category: "Industry Podcast",
  },
  {
    id: "ZJRYFJ_0kKQ",
    number: "07",
    title: "Audience, Content & Monetization",
    category: "Creator Economy",
  },
];

const Media = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(null);

  const getCardOffset = (index) => {
    const total = podcasts.length;
    let offset = index - activeIndex;

    if (offset > total / 2) {
      offset -= total;
    }

    if (offset < -total / 2) {
      offset += total;
    }

    return offset;
  };

  const goToPrev = () => {
    setActiveIndex((current) =>
      current === 0 ? podcasts.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === podcasts.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0].clientX;
    const distance = touchStartX.current - touchEndX;

    if (Math.abs(distance) > 45) {
      if (distance > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <section id="media" className="media-section">
      <div className="media-bg-word" aria-hidden="true">
        PODCASTS
      </div>

      <div className="media-header reveal-on-scroll">
        <div className="media-kicker">
          <span className="media-kicker-line"></span>
          <span className="media-kicker-index">03</span>
          <span className="media-kicker-text">MEDIA</span>
        </div>

        <h2>Podcast & Interviews</h2>
      </div>

      <div className="media-carousel-shell">
        <button
          className="media-arrow media-arrow-prev"
          type="button"
          aria-label="Previous podcast"
          onClick={goToPrev}
        >
          ←
        </button>

        <div
          className="media-coverflow"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          aria-label="Podcast carousel"
        >
          {podcasts.map((podcast, index) => {
            const offset = getCardOffset(index);
            const absOffset = Math.abs(offset);
            const isActive = index === activeIndex;

            return (
              <article
                key={podcast.id}
                className={`media-podcast-card ${isActive ? "is-active" : ""}`}
                style={{
                  "--offset": offset,
                  "--abs-offset": absOffset,
                  "--z-index": 20 - absOffset,
                }}
              >
                <div className="media-podcast-thumb">
                  {isActive ? (
                    <iframe
                      key={podcast.id}
                      src={`https://www.youtube-nocookie.com/embed/${podcast.id}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
                      title={podcast.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${podcast.id}/hqdefault.jpg`}
                        alt=""
                        loading="lazy"
                      />

                      <button
                        className="media-podcast-select"
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Play ${podcast.title}`}
                      >
                        <span className="media-podcast-play" aria-hidden="true">
                          <i></i>
                        </span>
                      </button>
                    </>
                  )}
                </div>

                {!isActive && (
                  <button
                    className="media-podcast-body"
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Select ${podcast.title}`}
                  >
                    <p>{podcast.category}</p>
                    <h3>{podcast.title}</h3>
                  </button>
                )}

                {isActive && (
                  <div className="media-active-label">
                    <p>{podcast.category}</p>
                    <h3>{podcast.title}</h3>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <button
          className="media-arrow media-arrow-next"
          type="button"
          aria-label="Next podcast"
          onClick={goToNext}
        >
          →
        </button>
      </div>

    </section>
  );
};

export default Media;
