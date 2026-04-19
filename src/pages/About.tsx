import PageWrapper from "@/components/PageWrapper";
import SectionDivider from "@/components/SectionDivider";
import { Heart, Users, Flame } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const pillars = [
  {
    icon: Heart,
    title: "Family-First Values",
    desc: "We treat every customer like a guest at our own table.",
  },
  {
    icon: Users,
    title: "Crafted for Connection",
    desc: "Our stands are designed for stability and style, ensuring your focus stays on your loved ones — not the fire.",
  },
  {
    icon: Flame,
    title: "Honoring Tradition",
    desc: "We celebrate the heritage of potjie cooking while providing quality gear for the next generation of outdoor chefs.",
  },
];

const About = () => {
  const scrollRef = useScrollReveal();

  return (
    <PageWrapper>
      <div ref={scrollRef}>
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl text-center mb-16 scroll-reveal">
            <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4 reveal-child">Our Story</h1>
            <p className="font-body text-foreground/70 text-lg reveal-child">
              A family-owned business on a mission to help families reclaim their time around the fire.
            </p>
          </div>

          <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 scroll-reveal">
            <div className="overflow-hidden rounded reveal-child" style={{ backgroundColor: "#5C3317" }}>
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ minHeight: "400px" }}
              >
                <span style={{ color: "#C9A84C" }} className="font-heading text-2xl">Image Coming Soon</span>
              </div>
            </div>
            <div className="reveal-child">
              <p className="font-body text-foreground/80 leading-relaxed mb-6">
                Potjielek-Lekker was born from a love of gathering. We saw how the simple act of cooking over fire could bring families closer — and we wanted to make that experience accessible to everyone.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed mb-6">
                Our custom-designed stands and premium pots bridge tradition and modern convenience, giving you the tools to create memories that last a lifetime.
              </p>
              <p className="font-body text-foreground/80 leading-relaxed italic">
                Every pot is proudly handcrafted in Albertinia, a small town in the heart of the Western Cape — where quality and tradition go hand in hand.
              </p>
            </div>
          </div>

          <SectionDivider text="Why Choose Us" />

          <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-20 scroll-reveal">
            {pillars.map((pillar, i) => (
              <div key={i} className="text-center p-8 bg-card border border-primary/15 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] reveal-child">
                <pillar.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-heading text-xl text-primary mb-3">{pillar.title}</h3>
                <p className="font-body text-foreground/70 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <SectionDivider />

          <div className="container mx-auto max-w-3xl text-center scroll-reveal">
            <p className="font-heading text-2xl md:text-3xl text-primary italic leading-relaxed reveal-child">
              "From our family to yours, we hope our pots bring as much warmth, laughter, and delicious food to your home as they have to ours."
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;
