"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What areas does Defcon4 Alliance cover?",
    a: "We operate from the capital city Abuja, and our service coverage extends across the city and nearby regions, catering to both private residences and large organizations.",
  },
  {
    q: "What equipment do your security personnel carry?",
    a: "Our personnel are equipped with essential security tools such as walkie-talkies, pepper sprays, and tasers to provide swift responses and maintain order in all scenarios.",
  },
  {
    q: "Do you provide both armed and unarmed guards?",
    a: "Yes, we offer both armed and unarmed security officers. Our armed personnel are certified and trained to use their weapons responsibly, while unarmed officers ensure protection through vigilance and preventive measures.",
  },
  {
    q: "How can I get a security risk assessment?",
    a: "Simply call us at 09048145684 or 09036136422 to schedule a security risk assessment of your property, organisation, or business. Our team will conduct a thorough evaluation and recommend tailored solutions.",
  },
  {
    q: "What is the billing structure for security guards?",
    a: "Our pricing varies by guard level: Security Guard Supervisors at ₦155,000/month, Security Guard Alpha at ₦120,000/month, and Security Guard Junior at ₦85,600/month. Contact us for a customized quote.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-dark section-padding">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">FAQ</span>
          <h2 className="heading-section text-dark-foreground">
            Frequently Asked <span className="text-primary">Questions.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-dark-border"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading text-lg font-semibold uppercase tracking-wide text-dark-foreground pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 text-dark-foreground/60 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
