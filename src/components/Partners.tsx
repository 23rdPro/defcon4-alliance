"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "BYD",
    desc: "Comprehensive security guard services for BYD operations, safeguarding electric car assets and facilities.",
  },
  {
    name: "Cleverwalls",
    desc: "Providing property solutions that blend style, function, and purpose with smart design and eco-friendly materials.",
  },
  {
    name: "Statewide Realty",
    desc: "Professional security solutions to protect diverse portfolio of apartments and developed buildings.",
  },
  {
    name: "Klimatt Living",
    desc: "Safeguarding luxury homes and facilities with top-notch security personnel for residents and visitors.",
  },
  {
    name: "AMS",
    desc: "Association of Maritime Security Professionals partnership for comprehensive security.",
  },
  {
    name: "ICoCA",
    desc: "International compliance and security standards partnership.",
  },
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-light section-padding border-t border-border">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">Our Partners & Clients</span>
          <h2 className="heading-section">
            Trusted by Leading{" "}
            <span className="text-primary">Organizations.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 p-6 border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-primary/10 flex items-center justify-center font-heading text-xl font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {partner.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-heading font-bold uppercase tracking-wide text-lg mb-1">
                  {partner.name}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {partner.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
