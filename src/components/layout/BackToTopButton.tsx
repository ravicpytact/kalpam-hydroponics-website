"use client";

type BackToTopButtonProps = {
  visible: boolean;
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function BackToTopButton({ visible }: BackToTopButtonProps) {
  return (
    <button
      type="button"
      className={`back-to-top${visible ? " is-visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg
        className="back-to-top__icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 12 10 6l6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
