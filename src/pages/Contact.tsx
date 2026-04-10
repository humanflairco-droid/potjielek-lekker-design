import { useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import SectionDivider from "@/components/SectionDivider";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl text-primary mb-4">Get in Touch</h1>
          <p className="font-body text-foreground/70 text-lg">
            Questions, custom orders, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <SectionDivider text="Details" />
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-sm text-primary uppercase tracking-widest mb-1">Email</h3>
                  <p className="font-body text-foreground/70">info@potjielek-lekker.co.za</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-sm text-primary uppercase tracking-widest mb-1">Phone</h3>
                  <p className="font-body text-foreground/70">+27 (0) 12 345 6789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-sm text-primary uppercase tracking-widest mb-1">Location</h3>
                  <p className="font-body text-foreground/70">South Africa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <SectionDivider text="Send a Message" />
            {submitted ? (
              <div className="text-center py-12">
                <p className="font-heading text-2xl text-primary mb-2">Thank you!</p>
                <p className="font-body text-foreground/70">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div>
                  <label className="font-heading text-xs text-primary uppercase tracking-widest block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-card border border-primary/20 rounded px-4 py-3 font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-heading text-xs text-primary uppercase tracking-widest block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-card border border-primary/20 rounded px-4 py-3 font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="font-heading text-xs text-primary uppercase tracking-widest block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full bg-card border border-primary/20 rounded px-4 py-3 font-body text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_30px_hsl(43,52%,54%,0.4)]"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
