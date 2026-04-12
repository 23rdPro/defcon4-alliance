"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Home,
  Building2,
  Calendar,
  ShieldCheck,
  Siren,
  Eye,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Security",
    description:
      "Round-the-clock security for homes and residential estates. Our trained officers monitor premises, control access, and respond to emergencies.",
  },
  {
    icon: Building2,
    title: "Corporate Security",
    description:
      "Security solutions for businesses including patrols, access control, and surveillance for offices, retail outlets, and warehouses.",
  },
  {
    icon: Calendar,
    title: "Event Security",
    description:
      "Customized security for conferences, concerts, and corporate functions. Trained in crowd control, access management, and emergency response.",
  },
  {
    icon: ShieldCheck,
    title: "Armed & Unarmed Personnel",
    description:
      "Both armed and unarmed security officers to meet specific needs. Armed personnel are certified and trained to use weapons responsibly.",
  },
  {
    icon: Siren,
    title: "Emergency Response",
    description:
      "Rapid response units to handle emergencies and threats swiftly. Our teams are on standby to address potential security breaches.",
  },
  {
    icon: Eye,
    title: "Surveillance & Monitoring",
    description:
      "Advanced surveillance systems with 24/7 monitoring. Cutting-edge technology integrated with trained personnel for maximum protection.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="section-dark section-padding relative overflow-hidden"
    >
      {/* Geometric background accents */}
      <div className="absolute top-10 left-10 w-64 h-64 border border-dark-border/30 rotate-45 -translate-x-1/2" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary/10 rotate-45 translate-x-1/2" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">Our Services</span>
          <h2 className="heading-section text-dark-foreground">
            Professional Security{" "}
            <span className="text-primary">Services.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-dark-muted/50 border border-dark-border p-8 hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-16 h-16 flex items-center justify-center bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="heading-sub text-dark-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-dark-foreground/60 leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mt-6">
                <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider cursor-pointer hover:underline">
                  Read More →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
