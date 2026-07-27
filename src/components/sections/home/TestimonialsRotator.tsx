"use client";

import { useEffect, useRef, useState } from "react";
import type { GoogleReview } from "@/lib/google-reviews";

type ReviewWithQuote = GoogleReview & { quote: string };

type Props = {
  reviews: readonly ReviewWithQuote[];
  /** Seconds for one full pass through all reviews — higher = slower. */
  secondsPerReview?: number;
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="home-testimonials__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={
            index < rating ? "home-testimonials__star is-filled" : "home-testimonials__star"
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </span>
  );
}

function ReviewCard({ review }: { review: ReviewWithQuote }) {
  return (
    <li className="home-testimonials__item">
      <blockquote>
        <StarRating rating={review.rating} />
        <p>&ldquo;{review.quote}&rdquo;</p>
        <footer>
          <cite>{review.author}</cite>
          <span>
            Google review
            {review.postedAgo ? ` · ${review.postedAgo}` : ""}
          </span>
        </footer>
      </blockquote>
    </li>
  );
}

function ReviewGroup({
  reviews,
  ariaHidden,
  keySuffix = "",
}: {
  reviews: readonly ReviewWithQuote[];
  ariaHidden?: boolean;
  keySuffix?: string;
}) {
  return (
    <ul
      className="home-testimonials__marquee-group"
      aria-hidden={ariaHidden}
      aria-label={ariaHidden ? undefined : "Google client reviews"}
    >
      {reviews.map((review) => (
        <ReviewCard key={`${review.id}${keySuffix}`} review={review} />
      ))}
    </ul>
  );
}

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

export function TestimonialsRotator({ reviews, secondsPerReview = 6 }: Props) {
  const marqueeRef = useRef<HTMLDivElement>(null);
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
    if (!track || reviews.length === 0) {
      return;
    }

    const measureLoopWidth = () => {
      loopWidthRef.current = track.scrollWidth / 2;
      offsetRef.current = normalizeOffset(offsetRef.current, loopWidthRef.current);
    };

    measureLoopWidth();
    const resizeObserver = new ResizeObserver(measureLoopWidth);
    resizeObserver.observe(track);

    const durationSeconds = reviews.length * secondsPerReview;

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
  }, [reviews.length, secondsPerReview, reduceMotion]);

  if (reviews.length === 0) {
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
      ref={marqueeRef}
      className={`home-testimonials__marquee${isDragging ? " is-dragging" : ""}${reduceMotion ? " is-static" : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div ref={trackRef} className="home-testimonials__marquee-track">
        <ReviewGroup reviews={reviews} />
        <ReviewGroup reviews={reviews} ariaHidden keySuffix="-dup" />
      </div>
    </div>
  );
}
