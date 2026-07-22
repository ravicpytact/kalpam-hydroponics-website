"use client";

import { useCallback, useRef, useState } from "react";

const PLACEHOLDER_BEFORE = "/images/home/before-after/placeholder-before.svg";
const PLACEHOLDER_AFTER = "/images/home/before-after/placeholder-after.svg";

type BeforeAfterCompareProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

export function BeforeAfterCompare({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterCompareProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);

  const updatePosition = useCallback((clientX: number) => {
    const root = rootRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    if (rect.width <= 0) return;

    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition(Math.round((x / rect.width) * 100));
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    updatePosition(event.clientX);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((value) => Math.max(value - 2, 0));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((value) => Math.min(value + 2, 100));
    }
  };

  return (
    <div
      ref={rootRef}
      className="ba-compare"
      role="slider"
      tabIndex={0}
      aria-label={`Compare before and after: ${beforeAlt}`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={position}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onKeyDown={onKeyDown}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="ba-compare__image ba-compare__image--after"
        draggable={false}
        onError={(event) => {
          const img = event.currentTarget;
          if (!img.src.endsWith(PLACEHOLDER_AFTER)) img.src = PLACEHOLDER_AFTER;
        }}
      />
      <div
        className="ba-compare__before-layer"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeSrc}
          alt=""
          className="ba-compare__image ba-compare__image--before"
          draggable={false}
          onError={(event) => {
            const img = event.currentTarget;
            if (!img.src.endsWith(PLACEHOLDER_BEFORE)) img.src = PLACEHOLDER_BEFORE;
          }}
        />
      </div>
      <span className="ba-compare__label ba-compare__label--before">Before</span>
      <span className="ba-compare__label ba-compare__label--after">After</span>
      <div className="ba-compare__divider" style={{ left: `${position}%` }} aria-hidden="true">
        <div className="ba-compare__handle" aria-hidden="true">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 4L2 8L6 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 4L14 8L10 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
