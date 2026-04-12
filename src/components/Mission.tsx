"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye } from "lucide-react";

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-dark section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 border border-primary rotate-45" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 border border-primary rotate-12" />
      </div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="border border-dark-border p-10 relative"
          >
            <div className="absolute -top-5 left-8 bg-dark px-4">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h3 className="heading-sub text-dark-foreground mt-4 mb-4">
              Our Mission
            </h3>
            <p className="text-dark-foreground/70 leading-relaxed">
              To provide unparalleled security solutions that safeguard lives,
              property, and businesses. Through innovation, professionalism, and
              a commitment to excellence, we deliver peace of mind and foster a
              secure environment for our clients and community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border border-dark-border p-10 relative"
          >
            <div className="absolute -top-5 left-8 bg-dark px-4">
              <Eye className="w-10 h-10 text-primary" />
            </div>
            <h3 className="heading-sub text-dark-foreground mt-4 mb-4">
              Our Vision
            </h3>
            <p className="text-dark-foreground/70 leading-relaxed">
              To be the leading security provider in Nigeria, setting the
              standard for trust, reliability, and cutting-edge security
              services. We aspire to create a safer world where individuals and
              organizations can thrive without fear.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
