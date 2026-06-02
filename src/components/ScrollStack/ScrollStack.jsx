import React, { useRef, useEffect, Children } from 'react';
import './ScrollStack.css';

/**
 * ScrollStackItem — wrapper for each card inside ScrollStack.
 * The `itemClassName` is applied to the outer scroll-stack-card div.
 */
export const ScrollStackItem = ({ children, itemClassName = '' }) => {
  // Rendered inside ScrollStack via cloneElement; the className is passed as a prop.
  // We return children as-is so ScrollStack can wrap them.
  return <>{children}</>;
};

ScrollStackItem.displayName = 'ScrollStackItem';

/**
 * ScrollStack — cinematic stacking scroll component.
 *
 * When useWindowScroll={true} the section itself has extra height
 * and a sticky inner viewport so the main page scroll drives the animation.
 * No nested scroll containers, no scroll trapping.
 */
const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,     // svh units of scroll budget per card transition
  itemScale = 0.035,      // scale reduction applied to cards as they get covered
  itemStackDistance = 34, // unused visual tweak (kept for API compatibility)
  stackPosition = '18%',  // unused (kept for API compatibility)
  scaleEndPosition = '8%',// unused (kept for API compatibility)
  baseScale = 0.86,       // unused (kept for API compatibility)
  rotationAmount = 0,     // rotation applied while card enters
  blurAmount = 0,         // blur applied as cards get covered
  useWindowScroll = false,
}) => {
  const scrollerRef = useRef(null);
  const cardRefs   = useRef([]);

  const childArray = Children.toArray(children);
  const cardCount  = childArray.length;

  // ── collect itemClassName from each ScrollStackItem ─────────────────────────
  const itemClassNames = childArray.map(child => {
    if (child && child.props) return child.props.itemClassName || '';
    return '';
  });

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const allCards = cardRefs.current.filter(Boolean);
    if (!allCards.length) return;

    // ── Reset helper ──────────────────────────────────────────────────────────
    const resetCards = () => {
      allCards.forEach(card => {
        card.style.transform = '';
        card.style.filter    = '';
        card.style.zIndex    = '';
      });
    };

    // ── Mobile / reduced-motion: plain stacked layout ─────────────────────────
    const mq = window.matchMedia('(max-width: 768px)');
    if (prefersReducedMotion || mq.matches) {
      resetCards();
      return;
    }

    // ── Desktop animated update ───────────────────────────────────────────────
    const update = () => {
      // Re-check breakpoint on every tick (handles resize)
      if (window.matchMedia('(max-width: 768px)').matches) {
        resetCards();
        return;
      }

      const rect          = scroller.getBoundingClientRect();
      const scrollerH     = scroller.offsetHeight;
      const viewportH     = window.innerHeight;
      const scrollable    = scrollerH - viewportH;
      const scrolled      = -rect.top;
      const rawProgress   = scrollable > 0 ? scrolled / scrollable : 0;
      const progress      = Math.max(0, Math.min(1, rawProgress));

      // Map 0-1 progress across (cardCount - 1) transitions
      const cardProgress  = progress * (cardCount - 1);

      allCards.forEach((card, i) => {
        if (!card) return;

        // localP: negative means card hasn't appeared yet; 0 = active; positive = being covered
        const localP   = cardProgress - i;

        let translateY = 0;
        let scale      = 1;
        let blurVal    = 0;
        let rotate     = 0;

        if (i === 0) {
          // First card starts fully visible; only gets covered/scaled
          translateY = 0;
        } else if (localP <= -1) {
          // Card hasn't started entering yet — park below
          translateY = 110;
        } else if (localP < 0) {
          // Card is animating in from the bottom
          translateY = Math.abs(localP) * 110;
          if (rotationAmount) rotate = Math.abs(localP) * rotationAmount;
        } else {
          // Card is active or being covered by the next card
          translateY = 0;
        }

        // Cards that are covered scale down and optionally blur
        if (localP > 0) {
          const coverP = Math.min(localP, 1);
          scale        = 1 - coverP * itemScale;
          if (blurAmount > 0) blurVal = coverP * blurAmount;
        }

        card.style.zIndex    = String(i + 1);
        card.style.transform = `translateY(${translateY}%) scale(${scale}) rotate(${rotate}deg)`;
        card.style.filter    = blurVal > 0 ? `blur(${blurVal}px)` : 'none';
      });
    };

    const scrollTarget = useWindowScroll ? window : scroller;
    scrollTarget.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true });
    update();

    const mqHandler = () => {
      if (mq.matches) resetCards();
      else update();
    };
    mq.addEventListener('change', mqHandler);

    return () => {
      scrollTarget.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      mq.removeEventListener('change', mqHandler);
    };
  }, [cardCount, itemScale, blurAmount, rotationAmount, useWindowScroll]);

  // Total height = 100svh (viewport for sticky) + scroll budget for all transitions
  // itemDistance = svh units per transition, (cardCount-1) transitions
  const scrollBudget = (cardCount - 1) * itemDistance;
  const totalHeight  = `calc(100svh + ${scrollBudget}svh)`;

  return (
    <div
      ref={scrollerRef}
      className={`scroll-stack-scroller ${className}`}
      style={useWindowScroll ? { height: totalHeight } : undefined}
    >
      <div className="scroll-stack-inner">
        <div className="scroll-stack-stage">
          {childArray.map((child, i) => (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el; }}
              className={`scroll-stack-card ${itemClassNames[i]}`}
            >
              {/* Render the actual child content (unwrap ScrollStackItem) */}
              {child && child.props ? child.props.children : child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;
