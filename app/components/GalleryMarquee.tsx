"use client";

import { useEffect, useRef, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

export default function GalleryMarquee({ images }: { images: GalleryImage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isPaused = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const loop = [...images, ...images];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    let lastTime = performance.now();
    let frameId = 0;

    const speed = window.innerWidth < 768 ? 0.08 : 0.2;

    const tick = (now: number) => {
      if (!isDragging.current && !isPaused.current) {
        const delta = now - lastTime;
        el.scrollLeft += speed * delta;
        const half = el.scrollWidth / 2;
        if (half > 0 && el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }

      lastTime = now;
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el || event.button !== 0) return;

    isDragging.current = true;
    setIsGrabbing(true);
    startX.current = event.clientX;
    startScrollLeft.current = el.scrollLeft;
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el || !isDragging.current) return;

    event.preventDefault();
    const delta = event.clientX - startX.current;
    el.scrollLeft = startScrollLeft.current - delta;
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el || !isDragging.current) return;

    isDragging.current = false;
    setIsGrabbing(false);

    if (el.hasPointerCapture(event.pointerId)) {
      el.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div className="gallery-marquee pb-16 lg:pb-20">
      <div
        ref={containerRef}
        className={`gallery-marquee-scroll${isGrabbing ? " is-grabbing" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        onMouseEnter={() => {
          isPaused.current = true;
        }}
        onMouseLeave={() => {
          if (!isDragging.current) {
            isPaused.current = false;
          }
        }}
      >
        <div className="gallery-marquee-track">
          {loop.map((item, index) => (
            <div
              key={`${item.src}-${index}`}
              className="gallery-marquee-item"
              aria-hidden={index >= images.length}
              draggable={false}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
