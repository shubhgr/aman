"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type PolicymakerCard = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

const GAP_PX = 24;
/** Extra fraction of a card visible so the next one peeks in. */
const PEEK = 0.18;

export default function PolicymakerRail({
  items,
}: {
  items: PolicymakerCard[];
}) {
  const count = items.length;
  const loop = count > 1;

  const [perView, setPerView] = useState(2);
  const [visualIndex, setVisualIndex] = useState(loop ? count : 0);
  const [stepPx, setStepPx] = useState(0);
  const [cardWidthPx, setCardWidthPx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [animate, setAnimate] = useState(true);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    moved: boolean;
  } | null>(null);

  const slots = perView + PEEK;
  const trackItems = loop ? [...items, ...items, ...items] : items;
  const base = loop ? count : 0;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      setPerView(media.matches ? 2 : 1);
      setAnimate(false);
      setVisualIndex(loop ? count : 0);
      setDragOffset(0);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, [count, loop]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const width = viewport.offsetWidth;
      const gaps = Math.ceil(slots) - 1;
      const cardWidth = (width - GAP_PX * gaps) / slots;
      setCardWidthPx(cardWidth);
      setStepPx(cardWidth + GAP_PX);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [slots]);

  useLayoutEffect(() => {
    if (animate) return;
    const id = window.requestAnimationFrame(() => setAnimate(true));
    return () => window.cancelAnimationFrame(id);
  }, [animate, visualIndex]);

  useEffect(() => {
    if (!loop || paused || isDragging) return;

    const timer = window.setInterval(() => {
      setAnimate(true);
      setVisualIndex((current) => current + 1);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [loop, paused, isDragging]);

  const normalizeIfNeeded = (next: number) => {
    if (!loop) return next;
    if (next >= base + count) {
      setAnimate(false);
      return next - count;
    }
    if (next < base) {
      setAnimate(false);
      return next + count;
    }
    return next;
  };

  const onTrackTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== trackRef.current || event.propertyName !== "transform") {
      return;
    }
    setVisualIndex((current) => normalizeIfNeeded(current));
  };

  const shift = (delta: number) => {
    if (!loop && count <= 1) return;
    setAnimate(true);
    setVisualIndex((current) => {
      if (!loop) {
        const max = Math.max(0, count - perView);
        return Math.max(0, Math.min(max, current + delta));
      }
      return current + delta;
    });
  };

  const finishDrag = (clientX: number) => {
    const drag = dragRef.current;
    if (!drag) return;

    const delta = clientX - drag.startX;
    const threshold = Math.max(48, stepPx * 0.18);
    let move = 0;

    if (Math.abs(delta) > threshold) {
      move = delta < 0 ? 1 : -1;
    }

    dragRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
    if (move !== 0) shift(move);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((!loop && count <= 1) || event.button !== 0) return;

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
    setDragOffset(delta);
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
    transform: `translate3d(${-visualIndex * stepPx + dragOffset}px, 0, 0)`,
    transition:
      animate && !isDragging
        ? "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)"
        : "none",
  };

  const cardStyle = {
    flex:
      cardWidthPx > 0
        ? `0 0 ${cardWidthPx}px`
        : `0 0 calc((100% - ${GAP_PX * (Math.ceil(slots) - 1)}px) / ${slots})`,
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
        <div
          ref={trackRef}
          className="policymaker-rail-track"
          style={trackStyle}
          onTransitionEnd={onTrackTransitionEnd}
        >
          {trackItems.map((item, itemIndex) => (
            <article
              key={`${item.title}-${itemIndex}`}
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

      {loop ? (
        <div
          className="event-video-controls"
          aria-label="Policymaker navigation"
        >
          <button
            type="button"
            className="event-video-arrow"
            aria-label="Previous policymakers"
            onClick={() => shift(-1)}
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
            onClick={() => shift(1)}
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
