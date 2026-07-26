"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

/** Reset window scroll when the route path changes (client navigation). */
export function ScrollToTopOnNavigate() {
  const pathname = usePathname();
  const isInitialRender = useRef(true);

  useLayoutEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
