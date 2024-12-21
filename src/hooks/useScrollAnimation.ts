import { useEffect } from "react";

export const useScrollAnimation = () => {
  useEffect(() => {
    const mainElement = document.querySelector("main");
    const sections = document.querySelectorAll("section");

    if (!mainElement || sections.length === 0) return;

    const handleScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        const opacity = Math.max(0, Math.min(1, 1 - Math.abs(sectionTop) / windowHeight));

        let scale = 1;

        if (sectionTop < windowHeight) {
          const scaleFactor = Math.max(0.9, 1 - Math.abs(sectionTop) / (windowHeight * 2));
          scale = scaleFactor > 1 ? 1 : scaleFactor;
        }

        if (sectionTop >= 0 && sectionTop <= windowHeight) {
          scale = 1;
        }

        (section as HTMLElement).style.opacity = opacity.toString();
        (section as HTMLElement).style.transform = `scale(${scale})`;
        (section as HTMLElement).style.transition = "opacity 0.1s ease-in-out, transform 0.05s ease-in-out";
      });
    };

    mainElement.addEventListener("scroll", handleScroll);

    return () => {
      mainElement.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
