"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PolicymakerCard = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

const GAP_PX = 24;

export default function PolicymakerRail({
  items,
}: {
  items: PolicymakerCard[];
}) {
  const [perView, setPerView] = useState(2);
  const [index, setIndex] = useState(0);
  const [stepPx, setStepPx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    moved: boolean;
  } | null>(null);

  const maxIndex = Math.max(0, items.length - perView);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      setPerView(media.matches ? 2 : 1);
      setIndex(0);
      setDragOffset(0);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const width = viewport.offsetWidth;
      const cardWidth = (width - GAP_PX * (perView - 1)) / perView;
      setStepPx(cardWidth + GAP_PX);
      setIndex((current) =>
        Math.min(current, Math.max(0, items.length - perView)),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [perView, items.length]);

  useEffect(() => {
    if (maxIndex <= 0 || paused || isDragging) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 5200);

    return () => window.clearInterval(timer);
  }, [maxIndex, paused, isDragging]);

  const goTo = (next: number) => {
    setIndex(Math.max(0, Math.min(maxIndex, next)));
  };

  const finishDrag = (clientX: number) => {
    const drag = dragRef.current;
    if (!drag) return;

    const delta = clientX - drag.startX;
    const threshold = Math.max(48, stepPx * 0.18);
    let nextIndex = index;

    if (Math.abs(delta) > threshold) {
      nextIndex = delta < 0 ? index + 1 : index - 1;
    }

    dragRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
    goTo(nextIndex);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (maxIndex <= 0 || event.button !== 0) return;

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      moved: false,
    };
    setIsDragging(true);
    setPaused(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 6) drag.moved = true;

    const atStart = index === 0 && delta > 0;
    const atEnd = index === maxIndex && delta < 0;
    const resistance = atStart || atEnd ? 0.35 : 1;
    setDragOffset(delta * resistance);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    finishDrag(event.clientX);
  };

  const onPointerCancel = () => {
    dragRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const trackStyle = {
    gap: `${GAP_PX}px`,
    transform: `translate3d(${-index * stepPx + dragOffset}px, 0, 0)`,
    transition: isDragging
      ? "none"
      : "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  const cardStyle = {
    flex: `0 0 calc((100% - ${GAP_PX * (perView - 1)}px) / ${perView})`,
  };

  return (
    <div
      className="policymaker-rail s-after-header"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        if (!isDragging) setPaused(false);
      }}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div
        ref={viewportRef}
        className={`policymaker-rail-viewport${isDragging ? " is-dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div className="policymaker-rail-track" style={trackStyle}>
          {items.map((item) => (
            <article
              key={item.title}
              className="policymaker-rail-card"
              style={cardStyle}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[color-mix(in_srgb,#121022_4%,#F8F7F9)]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  draggable={false}
                  sizes="(max-width: 767px) 86vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="t-card-title s-after-media">{item.title}</p>
              <p className="t-meta s-after-label">{item.caption}</p>
            </article>
          ))}
        </div>
      </div>

      {maxIndex > 0 ? (
        <div
          className="event-video-controls"
          aria-label="Policymaker navigation"
        >
          <button
            type="button"
            className="event-video-arrow"
            aria-label="Previous policymakers"
            disabled={index === 0}
            onClick={() => goTo(index - 1)}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="event-video-arrow-icon"
            >
              <path
                d="M15 6 9 12l6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="event-video-arrow"
            aria-label="Next policymakers"
            disabled={index === maxIndex}
            onClick={() => goTo(index + 1)}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="event-video-arrow-icon"
            >
              <path
                d="m9 6 6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}
