import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-iron border-t border-primary/20 py-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-xl text-primary mb-4">Potjielek-Lekker</h3>
          <p className="text-foreground/60 font-body text-sm leading-relaxed">
            Handcrafted cast iron potjie pots and custom stands. Built for family.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm text-primary uppercase tracking-widest mb-4">Navigate</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Shop", path: "/shop" },
              { label: "Recipes", path: "/recipes" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <Link key={item.path} to={item.path} className="text-foreground/50 hover:text-primary transition-colors text-sm">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading text-sm text-primary uppercase tracking-widest mb-4">Get in Touch</h4>
          <p className="text-foreground/60 text-sm">info@potjielek-lekker.co.za</p>
          <p className="text-foreground/60 text-sm mt-1">South Africa</p>
        </div>
      </div>
      <div className="border-t border-primary/15 pt-6 text-center">
        <p className="text-foreground/40 text-xs">&copy; {new Date().getFullYear()} Potjielek-Lekker. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
