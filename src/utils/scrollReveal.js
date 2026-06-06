import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const getRevealFromVars = (type) => {
  switch (type) {
    case "fade-left":
      return { opacity: 0, x: -72, y: 0, scale: 1, filter: "blur(8px)" };

    case "fade-right":
      return { opacity: 0, x: 72, y: 0, scale: 1, filter: "blur(8px)" };

    case "fade-down":
      return { opacity: 0, x: 0, y: -56, scale: 1, filter: "blur(8px)" };

    case "zoom-in":
      return { opacity: 0, x: 0, y: 24, scale: 0.92, filter: "blur(10px)" };

    case "zoom-out":
      return { opacity: 0, x: 0, y: 16, scale: 1.08, filter: "blur(10px)" };

    case "soft":
      return { opacity: 0, x: 0, y: 0, scale: 1, filter: "blur(12px)" };

    case "fade-up":
    default:
      return { opacity: 0, x: 0, y: 56, scale: 1, filter: "blur(8px)" };
  }
};

export const setupScrollReveals = (scope) => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const targets = gsap.utils
    .toArray("[data-reveal]", scope)
    .filter((item) => !item.closest(".hero-section"));

  const groups = gsap.utils
    .toArray("[data-reveal-group]", scope)
    .filter((item) => !item.closest(".hero-section"));

  if (reduceMotion) {
    gsap.set([...targets, ...groups.flatMap((group) => gsap.utils.toArray(group.children))], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "none",
      clearProps: "transform,filter,opacity",
    });
    return;
  }

  targets.forEach((item) => {
    const type = item.dataset.reveal || "fade-up";
    const fromVars = getRevealFromVars(type);
    const delay = item.dataset.revealDelay ? Number(item.dataset.revealDelay) : 0;
    const duration = item.dataset.revealDuration ? Number(item.dataset.revealDuration) : 0.95;

    gsap.fromTo(
      item,
      fromVars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 86%",
          end: "top 58%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  groups.forEach((group) => {
    const children = gsap.utils.toArray(group.children);
    const type = group.dataset.revealGroup || "fade-up";
    const fromVars = getRevealFromVars(type);
    const stagger = group.dataset.revealStagger
      ? Number(group.dataset.revealStagger)
      : 0.12;

    gsap.fromTo(
      children,
      fromVars,
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.95,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: group,
          start: "top 86%",
          end: "top 58%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};
