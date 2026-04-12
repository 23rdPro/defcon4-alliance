"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import MissionSection from "@/components/Mission";
import ClientNavbar from "@/components/ClientNavbar";
import PartnersSection from "@/components/Partners";
import ServicesSection from "@/components/Services";
import TeamSection from "@/components/Team";
import TestimonialsSection from "@/components/Testimonials";
import { useScrollToHash } from "@/hooks/useScrollToHash";

export default function Home() {
  const router = useRouter();
  useScrollToHash();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      router.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <ClientNavbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MissionSection />
      <TeamSection />
      <PartnersSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
