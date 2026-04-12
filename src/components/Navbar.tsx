"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import QuoteModal from "./QuoteModal";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Articles", href: "/articles" },
  { label: "Team", href: "/#team" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

interface NavbarProps {
  onQuoteClick: () => void;
}

const Navbar = ({ onQuoteClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-dark-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <a href="/" className="flex items-center gap-3">
          {/* <div className="diamond-accent scale-150" /> */}
          <span className="font-heading text-2xl font-bold uppercase tracking-wider text-dark-foreground">
            {/* Defcon<span className="text-primary">4</span> */}
            <Image 
              width={100}
              height={50}
              alt="Defcon4 Alliance"
              src="/assets/logo.png"
            />
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-heading text-sm font-semibold uppercase tracking-wider text-dark-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onQuoteClick}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-heading font-bold uppercase text-sm tracking-wider hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Free Quote
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-dark-foreground p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-dark border-t border-dark-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-heading text-lg font-semibold uppercase tracking-wider text-dark-foreground/80 hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  onQuoteClick();
                }}
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-heading font-bold uppercase text-sm tracking-wider mt-2"
              >
                <Phone className="w-4 h-4" />
                Get Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
