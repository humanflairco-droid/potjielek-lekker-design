import PageWrapper from "@/components/PageWrapper";
import SectionDivider from "@/components/SectionDivider";
import productImage from "@/assets/product-stand-detail.jpg";
import heroProductImage from "@/assets/potjielek-shop-card.png";
import shopPotOnly from "@/assets/shop-pot-only.jpg";
import shopGelCup from "@/assets/shop-gel-cup.jpg";
import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WHATSAPP_NUMBER = "27824150386";

const setContents = [
  "1x ¼ Potjie Pot",
  "1x Steel Potjie Stand",
  "1x Gel Cup",
  "1x Gel Flame Extinguisher Paddle",
];

const individualItems = [
  {
    name: "Potjie Stand with Pot",
    desc: "Our signature mini cast iron pot — hand-selected for quality, built to last generations.",
    image: shopPotOnly,
    price: "R550",
  },
  {
    name: "Stand Only",
    desc: "Custom-designed steel stand. Hand-welded for stability and style — pairs perfectly with our pots.",
    image: productImage,
    price: "R300",
  },
  {
    name: "Gel Cup Only",
    desc: "Clean-burning gel fuel cup for safe, smokeless cooking indoors or outdoors.",
    image: shopGelCup,
  },
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const productMessages: Record<string, string> = {
  "The Potjielek-Lekker Set": "Hi Potjielek-Lekker! I'd like to order the Full Set. Please send me pricing and availability. Thank you!",
  "Potjie Stand with Pot": "Hi Potjielek-Lekker! I'd like to order a Potjie Stand with Pot. Please send me pricing and availability. Thank you!",
  "Stand Only": "Hi Potjielek-Lekker! I'd like to order a Stand. Please send me pricing and availability. Thank you!",
  "Gel Cup Only": "Hi Potjielek-Lekker! I'd like to order a Gel Cup. Please send me pricing and availability. Thank you!",
};

const handleWhatsApp = (productName: string) => {
  const message = encodeURIComponent(productMessages[productName] || "Hi, I would like to order from Potjielek-Lekker.");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
};

const Shop = () => {
  const scrollRef = useScrollReveal();

  return (
    <PageWrapper>
      <div ref={scrollRef}>
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-3xl text-center mb-16 scroll-reveal">
            <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4">Our Collection</h1>
            <p className="font-body text-foreground/70 text-lg">
              Handcrafted cast iron. Built to last generations.
            </p>
          </div>

          {/* Hero product — The Potjielek-Lekker Set */}
          <div className="container mx-auto max-w-4xl mb-20 scroll-reveal">
            <div className="bg-card border-2 border-primary/30 rounded overflow-hidden transition-all duration-500 hover:border-[#C9A84C] hover:shadow-[0_0_25px_rgba(201,168,76,0.25)] hover:scale-[1.02]">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="overflow-hidden h-72 md:h-auto relative">
                  <img
                    src={heroProductImage}
                    alt="The Potjielek-Lekker Set"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <h2 className="font-heading text-2xl md:text-3xl text-primary mb-2">
                    The Potjielek-Lekker Set
                  </h2>
                  <p className="font-body text-foreground/60 italic mb-6">
                    Everything you need. Nothing you don't.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {setContents.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-body text-foreground/80 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleWhatsApp("The Potjielek-Lekker Set")}
                    className="w-full px-6 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_30px_hsl(43,52%,54%,0.4)] hover:scale-[1.02] flex items-center justify-center gap-3"
                  >
                    <WhatsAppIcon />
                    WhatsApp Us to Order
                  </button>
                </div>
              </div>
            </div>
          </div>

          <SectionDivider text="Individual Items" />

          {/* Individual item cards */}
          <div className="container mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 scroll-reveal">
            {individualItems.map((item) => (
              <div
                key={item.name}
                className="bg-card border border-primary/20 rounded overflow-hidden flex flex-col transition-all duration-500 hover:border-[#C9A84C] hover:shadow-[0_0_25px_rgba(201,168,76,0.25)] hover:scale-[1.03]"
              >
                <div className="overflow-hidden h-52">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={800}
                    height={800}
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-xl text-primary mb-2">{item.name}</h3>
                  <p className="font-body text-foreground/60 text-sm mb-4 flex-1 leading-relaxed">
                    {item.desc}
                  </p>
                  {item.price && (
                    <p className="font-heading text-2xl text-[#C9A84C] mb-4">{item.price}</p>
                  )}
                  <button
                    onClick={() => handleWhatsApp(item.name)}
                    className="w-full px-6 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_30px_hsl(43,52%,54%,0.4)] hover:scale-[1.02] flex items-center justify-center gap-3"
                  >
                    <WhatsAppIcon />
                    WhatsApp Us to Order
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="container mx-auto max-w-3xl text-center mt-16 scroll-reveal space-y-2">
            <p className="font-body text-[#F5EFE6] text-sm italic">
              Nationwide delivery available via Pudo/courier at additional cost.
            </p>
            <p className="font-body text-[#F5EFE6] text-sm italic">
              Custom orders welcome —{" "}
              <a
                href="https://wa.me/27824150386?text=Hi%20Potjielek-Lekker!%20I%27d%20like%20to%20enquire%20about%20a%20custom%20order."
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#C9A84C] transition-colors"
              >
                WhatsApp us
              </a>{" "}
              to discuss.
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Shop;
