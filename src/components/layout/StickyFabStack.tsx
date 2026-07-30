"use client";

import { useEffect, useState } from "react";
import { BackToTopButton } from "@/components/layout/BackToTopButton";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";

const BACK_TO_TOP_SCROLL_THRESHOLD = 320;

export function StickyFabStack() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > BACK_TO_TOP_SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky-fab-stack${showBackToTop ? " sticky-fab-stack--back-to-top-visible" : ""}`}
    >
      <WhatsAppFab />
      <BackToTopButton visible={showBackToTop} />
    </div>
  );
}
