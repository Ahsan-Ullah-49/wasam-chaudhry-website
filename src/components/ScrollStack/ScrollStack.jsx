import React, { useRef, useEffect, Children } from 'react';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => {
  return <>{children}</>;
};
ScrollStackItem.displayName = 'ScrollStackItem';

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0.6,
  useWindowScroll = false,
}) => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const childArray = Children.toArray(children);

  useEffect(() => {
    let animationFrameId;
    const scroller = containerRef.current;
    if (!scroller) return;

    const updateCardTransforms = () => {
      const allCards = cardRefs.current.filter(Boolean);
      if (!allCards.length) return;

      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        allCards.forEach((card) => {
          card.style.transform = '';
          card.style.filter = '';
          card.style.position = '';
          card.style.top = '';
          card.style.marginBottom = '';
          card.style.zIndex = '';
        });
        return;
      }

      const stackYStr = stackPosition.toString();
      const stackYOffset = stackYStr.includes('%')
        ? scroller.offsetHeight * (parseFloat(stackYStr) / 100)
        : parseFloat(stackYStr);

      allCards.forEach((card, index) => {
        const topVal = stackYStr.includes('%') ? stackYStr : `${stackYStr}px`;
        card.style.position = 'sticky';
        card.style.top = `calc(${topVal} + ${index * itemStackDistance}px)`;
        card.style.marginBottom = `${itemDistance}px`;
        card.style.zIndex = index + 1;
        card.style.transformOrigin = 'top center';
        card.style.willChange = 'transform, filter';

        if (index < allCards.length - 1) {
          const nextCard = allCards[index + 1];
          const scrollerRect = scroller.getBoundingClientRect();
          const nextRect = nextCard.getBoundingClientRect();
          
          const nextTopRelative = nextRect.top - scrollerRect.top;
          const nextTargetY = stackYOffset + ((index + 1) * itemStackDistance);
          
          const distanceToNextSticky = nextTopRelative - nextTargetY;
          const maxDist = itemDistance + nextCard.offsetHeight * 0.8;
          
          let progress = 0;
          if (distanceToNextSticky <= 0) {
            progress = 1;
          } else if (distanceToNextSticky < maxDist) {
            progress = 1 - (distanceToNextSticky / maxDist);
          }

          const targetScale = 1 - progress * itemScale;
          const scale = Math.max(baseScale, targetScale);
          const blur = progress * blurAmount;
          const rotate = progress * rotationAmount;

          card.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
          card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
        } else {
          card.style.transform = 'scale(1) rotate(0deg)';
          card.style.filter = 'none';
        }
      });
    };

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(updateCardTransforms);
    };

    scroller.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    updateCardTransforms();

    setTimeout(updateCardTransforms, 100);

    return () => {
      scroller.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [itemDistance, itemScale, itemStackDistance, stackPosition, blurAmount, rotationAmount, baseScale]);

  return (
    <div ref={containerRef} className={`scroll-stack-scroller ${className}`}>
      <div className="scroll-stack-inner">
        {childArray.map((child, i) => (
          <div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            className={`scroll-stack-card ${child.props?.itemClassName || ''}`}
          >
            {child.props ? child.props.children : child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollStack;
