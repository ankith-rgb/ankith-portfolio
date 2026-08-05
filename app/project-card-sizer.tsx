"use client";

import { useEffect } from "react";

export default function ProjectCardSizer() {
  useEffect(() => {
    const equalize = () => {
      const cards = Array.from(document.querySelectorAll<HTMLElement>("#projects .project"));
      if (!cards.length || window.innerWidth < 801) return;

      cards.forEach((card) => { card.style.height = "auto"; });
      const tallest = Math.max(...cards.map((card) => card.offsetHeight));
      cards.forEach((card) => { card.style.height = `${tallest}px`; });
    };

    const frame = window.requestAnimationFrame(equalize);
    window.addEventListener("resize", equalize);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", equalize);
    };
  }, []);

  return null;
}
