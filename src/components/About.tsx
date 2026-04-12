"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Users, Clock, Award } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Users, value: "100+", label: "Trained Personnel" },
  { icon: Clock, value: "24/7", label: "Active Monitoring" },
  { icon: Award, value: "5+", label: "Years Experience" },
  { icon: Shield, value: "50+", label: "Clients Protected" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-light section-padding">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/assets/about.jpg"
              alt="Defcon4 Security Team"
              className="w-full object-cover"
              loading="lazy"
              width={1280}
              height={864}
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-primary hidden lg:block" />
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rotate-45 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-label mb-4 block">About Us</span>
            <h2 className="heading-section mb-6">
              Professional Security{" "}
              <span className="text-primary">Solutions.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Defcon Alliance we pride ourselves on delivering professional
              and reliable security services. Established with a vision to
              safeguard homes and organizations, our security officers undergo
              rigorous training to ensure they are equipped to handle all
              situations effectively.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Operating from Abuja, our service coverage extends across the city
              and nearby regions, catering to both private residences and large
              organizations. With an unwavering commitment to client safety and
              satisfaction, Defcon4 Alliance is the trusted partner for
              comprehensive security solutions.
            </p>

            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-heading font-bold uppercase text-sm tracking-wider hover:bg-primary/90 transition-colors"
            >
              Read More →
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="font-heading text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-heading">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
