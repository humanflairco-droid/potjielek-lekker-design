import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import SectionDivider from "@/components/SectionDivider";
import productImage from "@/assets/potjie-product.jpg";

const products = [
  {
    name: "The Full Potjielek Set",
    desc: "Everything you need to get started — mini cast iron pot, custom metal stand, wooden platform base, and gel fuel cup. The complete Potjielek-Lekker experience.",
    price: "R2,450",
  },
  {
    name: "Potjie Pot Only",
    desc: "Our signature mini cast iron pot — hand-selected for quality, built to last generations. Perfect heat retention for authentic slow-cooked flavour.",
    price: "R1,250",
  },
  {
    name: "Stand Only",
    desc: "Custom-designed metal stand with wooden platform base. Hand-welded for stability and style — pairs perfectly with our pots or your own.",
    price: "R950",
  },
];

const WHATSAPP_NUMBER = "27123456789";

const Shop = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const handleWhatsApp = (productName: string) => {
    const message = encodeURIComponent(`Hi! I'd like to order: ${productName}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <PageWrapper>
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4">Our Collection</h1>
          <p className="font-body text-foreground/70 text-lg">
            Handcrafted cast iron. Built to last generations.
          </p>
        </div>

        <SectionDivider text="Products" />

        <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="bg-card border border-primary/20 rounded overflow-hidden flex flex-col transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_hsl(43,52%,54%,0.1)]"
            >
              <div className="overflow-hidden h-64">
                <img
                  src={productImage}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${hoveredIdx === i ? "scale-105" : ""}`}
                  loading="lazy"
                  width={800}
                  height={800}
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl text-primary mb-2">{product.name}</h3>
                <p className="font-body text-foreground/60 text-sm mb-6 flex-1 leading-relaxed">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading text-2xl text-primary">{product.price}</span>
                </div>
                <button
                  onClick={() => handleWhatsApp(product.name)}
                  className="w-full px-6 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_30px_hsl(43,52%,54%,0.4)] hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto max-w-3xl text-center mt-16">
          <p className="font-body text-foreground/50 text-sm italic">
            All prices in South African Rand. Contact us for bulk orders or custom requests.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Shop;
