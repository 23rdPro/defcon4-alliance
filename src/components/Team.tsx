"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const team = [
  {
    name: "Faiza Ufedo Okai",
    role: "C.E.O",
    desc: "Leads the organization with a vision for comprehensive security solutions across Nigeria.",
  },
  {
    name: "Mohammed Daibu",
    role: "Director Legal",
    desc: "Handles legal matters, including compliance with regulations, contracts, and dispute resolution.",
  },
  {
    name: "Umar Sa'eed",
    role: "C.F.M.D",
    desc: "Manages financial planning, budgeting and marketing. Ensures compliance with financial regulations.",
  },
  {
    name: "Francis Ayegba",
    role: "C.T.O",
    desc: "Responsible for integrating technology into security solutions, managing surveillance and cybersecurity.",
  },
  {
    name: "Zubairu M. Nasiru",
    role: "C.S.O",
    desc: "Oversees daily operations, ensuring efficiency and smooth execution of services.",
  },
  {
    name: "Sunday Anthony O.",
    role: "C.S.O 2",
    desc: "Directs overall security strategy, including risk management and technology integration.",
  },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="section-light section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">Our Team</span>
          <h2 className="heading-section">
            Meet Our <span className="text-primary">Leadership.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 bg-muted flex items-center justify-center border-2 border-border group-hover:border-primary transition-colors hex-border">
                <span className="font-heading text-3xl font-bold text-primary">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-1">
                {member.name}
              </h3>
              <span className="text-primary font-heading text-sm font-semibold uppercase tracking-wider block mb-3">
                {member.role}
              </span>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
