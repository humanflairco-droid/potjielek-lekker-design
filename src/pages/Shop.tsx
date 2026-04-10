import PageWrapper from "@/components/PageWrapper";
import SectionDivider from "@/components/SectionDivider";
import productImage from "@/assets/potjie-product.jpg";

const products = [
  { name: "Classic Potjie No. 3", desc: "Perfect for family meals — feeds 6–8 people.", price: "R1,250" },
  { name: "Classic Potjie No. 2", desc: "Ideal for smaller gatherings — feeds 4–6 people.", price: "R950" },
  { name: "Classic Potjie No. 4", desc: "For the big occasions — feeds 10–14 people.", price: "R1,650" },
  { name: "Custom Wrought Iron Stand", desc: "Hand-welded for stability and style. Fits No. 2–4.", price: "R850" },
  { name: "Potjie Starter Bundle", desc: "No. 3 pot + custom stand + wooden spoon set.", price: "R1,950" },
  { name: "Cast Iron Lid Lifter", desc: "Safely remove hot lids. Essential potjie gear.", price: "R180" },
];

const Shop = () => (
  <PageWrapper>
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-5xl text-center mb-16">
        <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4">Our Collection</h1>
        <p className="font-body text-foreground/70 text-lg">Handcrafted cast iron. Built to last generations.</p>
      </div>

      <SectionDivider text="Products" />

      <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {products.map((product, i) => (
          <div
            key={i}
            className="bg-card border border-primary/15 rounded overflow-hidden group hover:border-primary/40 transition-all duration-300"
          >
            <div className="overflow-hidden h-64">
              <img
                src={productImage}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={800}
              />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-xl text-primary mb-2">{product.name}</h3>
              <p className="font-body text-foreground/60 text-sm mb-4">{product.desc}</p>
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg text-primary">{product.price}</span>
                <button className="px-4 py-2 border border-primary text-primary font-heading text-xs uppercase tracking-widest rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  Enquire
                </button>
              </div>
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

export default Shop;
