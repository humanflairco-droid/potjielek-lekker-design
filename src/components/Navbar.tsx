import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import potLogo from "@/assets/potlogo.jpeg";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Recipes", path: "/recipes" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-iron border-b border-primary/20">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center">
          <img src={potLogo} alt="Potjielek-Lekker" className="h-[45px] w-auto object-contain pl-5" />
        </Link>

        {/* Desktop nav — journal tabs */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-5 py-2 font-heading text-sm tracking-widest uppercase transition-all duration-300 border-b-2 ${
                  active
                    ? "text-primary border-primary"
                    : "text-foreground/70 border-transparent hover:text-primary hover:border-primary/40"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-iron border-t border-primary/20 page-enter">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-4 font-heading text-sm tracking-widest uppercase border-b border-primary/10 transition-colors ${
                  active ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
