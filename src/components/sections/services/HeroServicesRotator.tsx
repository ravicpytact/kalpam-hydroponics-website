"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  id: string;
  src: string;
  alt: string;
};

type Props = {
  slides: readonly Slide[];
  intervalMs: number;
  fadeMs: number;
};

export function HeroServicesRotator({ slides, intervalMs, fadeMs }: Props) {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion || slides.length <= 1) {
      return;
    }
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [reduceMotion, slides.length, intervalMs]);

  const visibleIndex = reduceMotion ? 0 : active;

  return (
    <div
      className="home-hero__media services-hero__media"
      style={{ "--services-hero-fade-ms": `${fadeMs}ms` } as CSSProperties}
    >
      {slides.map((slide, index) => {
        const isActive = index === visibleIndex;
        return (
          <Image
            key={slide.id}
            src={slide.src}
            alt={isActive ? slide.alt : ""}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`home-hero__img services-hero__slide${isActive ? " is-active" : ""}`}
          />
        );
      })}
    </div>
  );
}
