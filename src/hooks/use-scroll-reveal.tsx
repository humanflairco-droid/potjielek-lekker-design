import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = containerRef.current.querySelectorAll(".scroll-reveal");

    const ctx = gsap.context(() => {
      sections.forEach((section) => {
        const children = section.querySelectorAll(".reveal-child");
        if (children.length > 0) {
          gsap.fromTo(
            children,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power2.out",
              stagger: 0.13,
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
                once: true,
              },
            }
          );
        } else {
          gsap.fromTo(
            section,
            { opacity: 0, y: 34 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
                once: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};
