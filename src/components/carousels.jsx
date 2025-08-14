import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * InfiniteCarousel
 * - images: [{src, alt}] list (required)
 * - interval: ms between slides when autoplay is on (default 3500)
 * - autoplay: enable/disable auto sliding (default true)
 */
export default function InfiniteCarousel({
  images,
  interval = 3500,
  autoplay = true,
}) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(1); // start at 1 because of the leading clone
  const [isAnimating, setIsAnimating] = useState(true);
  const xDown = useRef(null);

  // Build slides with clones on both ends for seamless loop
  const slides = useMemo(() => {
    if (!images?.length) return [];
    const first = images[0];
    const last = images[images.length - 1];
    return [last, ...images, first];
  }, [images]);

  // Autoplay
  useEffect(() => {
    if (!autoplay || images.length <= 1) return;
    const id = setInterval(() => next(), interval);
    return () => clearInterval(id);
  }, [index, autoplay, interval, images.length]);

  // Handle transition end: jump from clone to real without animation
  const onTransitionEnd = () => {
    if (index === slides.length - 1) {
      setIsAnimating(false);
      setIndex(1); // jumped from last clone to first real
    } else if (index === 0) {
      setIsAnimating(false);
      setIndex(slides.length - 2); // jumped from first clone to last real
    }
  };

  // Re-enable animation after an index jump
  useEffect(() => {
    if (!isAnimating) {
      // Wait one frame so the no-animation jump applies, then restore animation
      const id = requestAnimationFrame(() => setIsAnimating(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isAnimating]);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Touch / swipe
  const handleTouchStart = (e) => {
    xDown.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (xDown.current === null) return;
    const xUp = e.touches[0].clientX;
    const xDiff = xDown.current - xUp;
    if (Math.abs(xDiff) > 20) {
      xDiff > 0 ? next() : prev();
      xDown.current = null;
    }
  };

  if (!images?.length) return null;

  return (
    <div className="relative w-full overflow-hidden bg-[#0f1417] py-6">
      {/* Track */}
      <div
        ref={trackRef}
        className={`flex w-full ${isAnimating ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTransitionEnd={onTransitionEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {slides.map((img, i) => (
          <div key={`${img.src}-${i}`} className="w-full flex-shrink-0 px-4">
            <figure className="mx-auto max-w-5xl overflow-hidden rounded-none shadow-none">
              <img
                src={img.src}
                alt={img.alt || ""}
                className="block h-[420px] w-full object-cover"
              />
            </figure>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/20"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-white backdrop-blur hover:bg-white/20"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {images.map((_, i) => {
          // visible slide index mapped back to [0..images.length-1]
          const visible = index === 0
            ? images.length - 1
            : index === slides.length - 1
            ? 0
            : index - 1;
          return (
            <button
              key={i}
              onClick={() => setIndex(i + 1)}
              className={`h-2 w-2 rounded-full transition ${
                visible === i ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
