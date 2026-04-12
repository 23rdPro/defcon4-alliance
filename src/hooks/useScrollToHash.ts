import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function useScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (!hash) return;

    const el = document.querySelector(hash);
    if (!el) return;

    setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }, [pathname]);
}