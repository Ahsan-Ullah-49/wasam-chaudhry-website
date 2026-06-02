import { useState, useEffect } from 'react';

export function useTypewriter(phrase = "MAGIC TOGETHER!") {
  const [text, setText] = useState("");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setText(phrase);
      return;
    }

    let i = 0;
    let isDeleting = false;
    let typingSpeed = 90;
    let timeoutId;

    const typeWriter = () => {
      if (!isDeleting && i <= phrase.length) {
        setText(phrase.substring(0, i));
        i++;
        timeoutId = setTimeout(typeWriter, typingSpeed);
      } else if (isDeleting && i >= 0) {
        setText(phrase.substring(0, i));
        i--;
        timeoutId = setTimeout(typeWriter, 55);
      } else if (i > phrase.length) {
        isDeleting = true;
        timeoutId = setTimeout(typeWriter, 1300);
      } else if (i < 0) {
        isDeleting = false;
        i = 0;
        timeoutId = setTimeout(typeWriter, 500);
      }
    };

    typeWriter();

    return () => clearTimeout(timeoutId);
  }, [phrase]);

  return text;
}
