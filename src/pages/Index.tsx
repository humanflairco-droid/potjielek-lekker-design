import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import PageWrapper from "@/components/PageWrapper";
import SectionDivider from "@/components/SectionDivider";
import heroImage from "@/assets/hero-potjie.jpg";
import productImage from "@/assets/potjie-product.jpg";
import familyImage from "@/assets/family-gathering.jpg";

const SteamWisps = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="steam-wisp absolute rounded-full bg-cream/10 blur-xl"
        style={{
          width: `${20 + i * 10}px`,
          height: `${40 + i * 15}px`,
          left: `${30 + i * 8}%`,
          bottom: "30%",
          animationDelay: `${i * 0.7}s`,
          animationDuration: `${3 + i * 0.5}s`,
        }}
      />
    ))}
  </div>
);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 }
      );
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 1.3 }
      );
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

        {/* Ember glow */}
        <div className="ember-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/10 blur-3xl" />

        <SteamWisps />

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
            <img
              src={productImage}
              alt="Cast iron potjie pot on custom stand"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl text-primary mb-6">Crafted With Purpose</h2>
            <p className="font-body text-foreground/80 leading-relaxed mb-6">
              Each pot is hand-selected for quality. Our custom stands are designed and welded to provide stability, style, and safety — so your focus stays on the people, not the fire.
            </p>
            <Link
              to="/shop"
              className="inline-block px-6 py-3 border border-primary text-primary font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
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
            <Link
              to="/about"
              className="inline-block px-6 py-3 border border-primary text-primary font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Our Story
            </Link>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded">
            <img
              src={familyImage}
              alt="Family gathered around a potjie"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
