"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Defcon4 Alliance has been outstanding in protecting our facilities. Their professionalism and rapid response times give us complete peace of mind.",
    name: "Ibrahim Musa",
    role: "Property Manager",
  },
  {
    text: "We've trusted Defcon4 with our event security for over two years. Their crowd management expertise is unmatched in Abuja.",
    name: "Amina Bello",
    role: "Events Director",
  },
  {
    text: "The level of training and discipline their guards demonstrate is exceptional. Defcon4 truly sets the standard for security in Nigeria.",
    name: "Chukwu Okonkwo",
    role: "Business Owner",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-light section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 block">Testimonials</span>
          <h2 className="heading-section">
            What Our Clients <span className="text-primary">Say.</span>
          </h2>
        </motion.div>

        <div className="relative text-center">
          <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />

          <div className="min-h-[200px] flex items-center justify-center">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 italic max-w-2xl mx-auto">
                "{testimonials[current].text}"
              </p>
              <h4 className="font-heading text-xl font-bold uppercase tracking-wide">
                {testimonials[current].name}
              </h4>
              <span className="text-primary font-heading text-sm uppercase tracking-wider">
                {testimonials[current].role}
              </span>
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rotate-45 transition-all duration-300 ${
                  i === current ? "bg-primary scale-125" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
