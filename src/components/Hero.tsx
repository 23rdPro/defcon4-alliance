"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    image: "/assets/hero.png",
    subtitle: "Welcome to Defcon4 Alliance",
    title: "Your Security,",
    titleAccent: "Our Priority.",
  },
  {
    image: "/assets/surveillance.jpg",
    subtitle: "Professional Protection",
    title: "24/7 Control of Your",
    titleAccent: "Safety.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt="Security"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Geometric accents */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-primary/20 rotate-45 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary/30 rotate-45 hidden lg:block" />
      <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-primary rotate-45 hidden lg:block" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-label">{slides[current].subtitle}</span>
              </div>

              <h1 className="heading-display text-dark-foreground mb-8">
                {slides[current].title}
                <br />
                <span className="text-primary">
                  {slides[current].titleAccent}
                </span>
              </h1>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-heading font-bold uppercase text-sm tracking-wider hover:bg-primary/90 transition-colors group"
                >
                  Our Services
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center bg-transparent border-2 border-primary text-primary px-8 py-4 font-heading font-bold uppercase text-sm tracking-wider hover:border-primary hover:text-primary transition-colors"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-12 h-1 transition-all duration-500 ${
                  i === current ? "bg-primary" : "bg-dark-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
