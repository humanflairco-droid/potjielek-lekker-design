import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import PageWrapper from "@/components/PageWrapper";
import SectionDivider from "@/components/SectionDivider";
import heroImage from "@/assets/hero-potjie.jpg";
import productImage from "@/assets/potjie-product.jpg";
import familyImage from "@/assets/family-gathering.jpg";

const SVGSteamWisps = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 800 600"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="steamGrad" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="hsl(37,50%,93%)" stopOpacity="0.25" />
        <stop offset="100%" stopColor="hsl(37,50%,93%)" stopOpacity="0" />
      </linearGradient>
    </defs>
    {/* Steam wisp 1 - left of center */}
    <path
      className="steam-svg-1"
      d="M380,520 Q370,480 385,440 Q400,400 375,360 Q350,320 370,280 Q390,240 380,200"
      fill="none"
      stroke="url(#steamGrad)"
      strokeWidth="12"
      strokeLinecap="round"
      opacity="0"
    />
    {/* Steam wisp 2 - center */}
    <path
      className="steam-svg-2"
      d="M400,530 Q420,490 395,450 Q370,410 400,370 Q430,330 410,290 Q390,250 400,210"
      fill="none"
      stroke="url(#steamGrad)"
      strokeWidth="16"
      strokeLinecap="round"
      opacity="0"
    />
    {/* Steam wisp 3 - right of center */}
    <path
      className="steam-svg-3"
      d="M420,525 Q440,485 425,445 Q410,405 435,365 Q460,325 440,285 Q420,245 430,205"
      fill="none"
      stroke="url(#steamGrad)"
      strokeWidth="10"
      strokeLinecap="round"
      opacity="0"
    />
  </svg>
);

const RISING_WORDS = ["Family", "Tradition", "Warmth", "Flavour"];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const emberRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- Intro animations ---
      gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 });
      gsap.fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 });
      gsap.fromTo(ctaRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.3 });

      // --- SVG Steam wisps with path drawing ---
      const steamPaths = [".steam-svg-1", ".steam-svg-2", ".steam-svg-3"];
      steamPaths.forEach((sel, i) => {
        const el = document.querySelector(sel) as SVGPathElement | null;
        if (!el) return;
        const length = el.getTotalLength();
        gsap.set(el, { strokeDasharray: length, strokeDashoffset: length });

        gsap.timeline({ repeat: -1, delay: i * 1.8 })
          .to(el, { opacity: 0.6, duration: 0.5, ease: "power1.in" })
          .to(el, { strokeDashoffset: 0, duration: 4, ease: "none" }, "<")
          .to(el, { opacity: 0, duration: 1.5, ease: "power1.out" }, "-=1.5")
          .set(el, { strokeDashoffset: length });
      });

      // --- Ember glow breathing ---
      if (emberRef.current) {
        gsap.to(emberRef.current, {
          opacity: 0.7,
          scale: 1.15,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // --- Rising words ---
      if (wordsRef.current) {
        const wordEls = wordsRef.current.querySelectorAll(".rising-word");
        const wordTl = gsap.timeline({ repeat: -1, delay: 2 });

        wordEls.forEach((word) => {
          wordTl
            .fromTo(word, { opacity: 0, y: 40 }, { opacity: 0.8, y: 0, duration: 1.2, ease: "power2.out" })
            .to(word, { opacity: 0, y: -50, duration: 1.4, ease: "power1.in" }, "+=0.6");
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageWrapper>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img src={heroImage} alt="Potjie pot over fire" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/40" />
        </div>

        {/* Ember glow - GSAP animated */}
        <div
          ref={emberRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] md:w-[700px] h-[250px] md:h-[350px] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(ellipse, hsl(35,80%,50%) 0%, hsl(43,52%,54%) 40%, transparent 70%)" }}
        />

        {/* SVG Steam */}
        <SVGSteamWisps />

        {/* Rising words */}
        <div ref={wordsRef} className="absolute inset-0 flex items-end justify-center pb-[18%] pointer-events-none">
          {RISING_WORDS.map((word) => (
            <span
              key={word}
              className="rising-word absolute font-heading text-2xl md:text-4xl tracking-widest uppercase opacity-0"
              style={{ color: "hsl(43,52%,54%)" }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 ref={headingRef} className="font-heading text-5xl md:text-7xl font-bold text-primary leading-tight opacity-0">
            Real Potjie. Real Flavour.
          </h1>
          <p ref={subRef} className="mt-6 font-body text-lg md:text-xl text-foreground/80 opacity-0">
            Handcrafted cast iron. Built for family.
          </p>
          <div ref={ctaRef} className="mt-10 opacity-0">
            <Link
              to="/shop"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_30px_hsl(43,52%,54%,0.4)] hover:scale-105"
            >
              Explore Our Pots
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider text="Welcome" />

      {/* Welcome section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-8">
            Welcome to Potjielek-Lekker
          </h2>
          <p className="font-body text-foreground/80 text-lg leading-relaxed">
            At Potjielek-Lekker, we believe the best meals aren't just about what's in the pot — they're about who is gathered around it. In a fast-paced world, the slow-cooked lifestyle is a rare gift.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Featured product */}
      <section className="py-16 px-6 bg-iron/30">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded">
            <img src={productImage} alt="Cast iron potjie pot on custom stand" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" width={800} height={800} />
          </div>
          <div>
            <h2 className="font-heading text-3xl text-primary mb-6">Crafted With Purpose</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              Each pot is hand-selected for quality. Our custom stands are designed and welded to provide stability, style, and safety — so your focus stays on the people, not the fire.
            </p>
            <Link to="/shop" className="inline-block px-6 py-3 border border-primary text-primary font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
              View Products
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Family image section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-heading text-3xl text-primary mb-6">Built for Family</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              From our family to yours — we hope our pots bring as much warmth, laughter, and delicious food to your home as they have to ours.
            </p>
            <Link to="/about" className="inline-block px-6 py-3 border border-primary text-primary font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
              Our Story
            </Link>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded">
            <img src={familyImage} alt="Family gathered around a potjie" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" loading="lazy" width={1200} height={800} />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
