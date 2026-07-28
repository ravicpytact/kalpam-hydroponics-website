"use client";

import { useEffect, useRef, useState } from "react";
import type { HOME_CREDIBILITY } from "@/lib/home-content";

type LogoItem = (typeof HOME_CREDIBILITY.logos.items)[number];

type Props = {
  items: readonly LogoItem[];
  label: string;
  /** Seconds per item for one full loop — higher = slower. */
  secondsPerItem?: number;
  variant?: "credibility" | "footer";
};

function normalizeOffset(offset: number, loopWidth: number) {
  if (loopWidth <= 0) {
    return offset;
  }
  let next = offset;
  while (next <= -loopWidth) {
    next += loopWidth;
  }
  while (next > 0) {
    next -= loopWidth;
  }
  return next;
}

function ClientLogoWordmark({
  item,
  variant,
}: {
  item: LogoItem;
  variant: "credibility" | "footer";
}) {
  const subtitle = "subtitle" in item ? item.subtitle : undefined;

  return (
    <li
      className={`client-logo-wordmark client-logo-wordmark--${variant}`}
      aria-label={subtitle ? `${item.title}, ${subtitle}` : item.title}
    >
      <span className="client-logo-wordmark__title">{item.title}</span>
      <span
        className="client-logo-wordmark__subtitle"
        aria-hidden={subtitle ? undefined : true}
      >
        {subtitle ?? "\u00a0"}
      </span>
    </li>
  );
}

function LogoGroup({
  items,
  variant,
  ariaHidden,
  keySuffix = "",
}: {
  items: readonly LogoItem[];
  variant: "credibility" | "footer";
  ariaHidden?: boolean;
  keySuffix?: string;
}) {
  return (
    <ul
      className="client-logos-marquee__group"
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : undefined}
    >
      {items.map((item) => (
        <ClientLogoWordmark key={`${item.id}${keySuffix}`} item={item} variant={variant} />
      ))}
    </ul>
  );
}

export function ClientLogosMarquee({
  items,
  label,
  secondsPerItem = 8,
  variant = "credibility",
}: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const loopWidthRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const rafRef = useRef(0);
  const lastTimeRef = useRef(0);
  const [reduceMotion, setReduceMotion] = useState(true);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) {
      return;
    }

    const measureLoopWidth = () => {
      loopWidthRef.current = track.scrollWidth / 2;
      offsetRef.current = normalizeOffset(offsetRef.current, loopWidthRef.current);
    };

    measureLoopWidth();
    const resizeObserver = new ResizeObserver(measureLoopWidth);
    resizeObserver.observe(track);

    const durationSeconds = items.length * secondsPerItem;

    const tick = (time: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      const deltaSeconds = Math.min((time - lastTimeRef.current) / 1000, 0.05);
      lastTimeRef.current = time;

      const loopWidth = loopWidthRef.current;
      const autoActive = !reduceMotion && !isDraggingRef.current && loopWidth > 0;

      if (autoActive) {
        const speed = loopWidth / durationSeconds;
        offsetRef.current = normalizeOffset(offsetRef.current - speed * deltaSeconds, loopWidth);
      }

      track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      lastTimeRef.current = 0;
    };
  }, [items.length, secondsPerItem, reduceMotion]);

  if (items.length === 0) {
    return null;
  }

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) {
      return;
    }

    isDraggingRef.current = true;
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }

    event.preventDefault();
    const delta = event.clientX - dragStartXRef.current;
    offsetRef.current = dragStartOffsetRef.current + delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) {
      return;
    }

    isDraggingRef.current = false;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    offsetRef.current = normalizeOffset(offsetRef.current, loopWidthRef.current);
  };

  return (
    <div
      className={`client-logos-marquee client-logos-marquee--${variant}${isDragging ? " is-dragging" : ""}${reduceMotion ? " is-static" : ""}`}
      aria-label={label}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div ref={trackRef} className="client-logos-marquee__track">
        <LogoGroup items={items} variant={variant} />
        <LogoGroup items={items} variant={variant} ariaHidden keySuffix="-dup" />
      </div>
    </div>
  );
}
