"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import QuoteModal from "@/components/QuoteModal";

export default function ClientNavbar() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <Navbar onQuoteClick={() => setIsQuoteModalOpen(true)} />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
}