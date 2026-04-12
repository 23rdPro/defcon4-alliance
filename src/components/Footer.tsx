"use client";
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-dark-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="diamond-accent" />
            <span className="font-heading text-xl font-bold uppercase tracking-wider text-dark-foreground">
              Defcon<span className="text-primary">4 Alliance</span>
            </span>
          </div>

          <div className="text-center">
            <p className="text-dark-foreground/50 text-sm">
              © {new Date().getFullYear()} Defcon4 Alliance. All Rights
              Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4 md:justify-end">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-dark-foreground/50 text-sm font-heading uppercase tracking-wider">
              To Serve & Protect
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
