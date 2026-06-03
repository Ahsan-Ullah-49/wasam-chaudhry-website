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
  const carouselRef = useRef(null);

  const scrollTimeoutRef = useRef(null);

  const activePodcast = podcasts[activeIndex];

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

  const handleCarouselScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    window.clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = window.setTimeout(() => {
      const cards = Array.from(
        carousel.querySelectorAll(".media-podcast-card")
      );

      const carouselRect = carousel.getBoundingClientRect();
      const carouselCenter = carouselRect.left + carouselRect.width / 2;

      let closestIndex = activeIndex;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(carouselCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }, 120);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const activeCard = carousel.querySelector(".media-podcast-card.is-active");
    activeCard?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  useEffect(() => {
    return () => window.clearTimeout(scrollTimeoutRef.current);
  }, []);

  return (
    <section id="media" className="media-section">
      <div className="media-header reveal-on-scroll">
        <div className="media-kicker">
          <span className="media-kicker-line"></span>
          <span className="media-kicker-index">03</span>
          <span className="media-kicker-text">MEDIA</span>
        </div>

        <h2>Podcast & Interviews</h2>
      </div>

      <div className="media-player-stage reveal-on-scroll">
        <div className="media-bg-word" aria-hidden="true">
          PODCASTS
        </div>

        <div className="media-player-wrap">
          <div className="media-player-info">
            <p>{activePodcast.category}</p>
            <h3>{activePodcast.title}</h3>
            <span>{activePodcast.number} / 07</span>
          </div>

          <div className="media-main-player">
            <iframe
              key={activePodcast.id}
              src={`https://www.youtube-nocookie.com/embed/${activePodcast.id}?rel=0&modestbranding=1&playsinline=1&autoplay=1`}
              title={activePodcast.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
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
          className="media-carousel" 
          ref={carouselRef} 
          onScroll={handleCarouselScroll}
          aria-label="Podcast carousel"
        >
          {podcasts.map((podcast, index) => (
            <button
              type="button"
              key={podcast.id}
              className={`media-podcast-card ${index === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Play ${podcast.title}`}
            >
              <div className="media-podcast-thumb">
                <img
                  src={`https://img.youtube.com/vi/${podcast.id}/hqdefault.jpg`}
                  alt=""
                  loading="lazy"
                />
              </div>

              <span className="media-podcast-play" aria-hidden="true">
                <i></i>
              </span>

              <div className="media-podcast-body">
                <span>{podcast.number}</span>
                <p>{podcast.category}</p>
                <h3>{podcast.title}</h3>
              </div>
            </button>
          ))}
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

      <div className="media-view-more-wrap">
        <a href="#contact" className="btn-gold media-view-more">
          View More
        </a>
      </div>
    </section>
  );
};

export default Media;
