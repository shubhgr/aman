"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef, useState } from "react";

type PolicymakerCard = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

const GAP_PX = 24;
/** Extra fraction of a card so the next page peeks in. */
const PEEK = 0.16;

function PolicymakerCardArticle({
  item,
  isFullyVisible,
  onReveal,
  style,
}: {
  item: PolicymakerCard;
  isFullyVisible: boolean;
  onReveal: () => void;
  style: CSSProperties;
}) {
  const [expanded, setExpanded] = useState(false);
  const [canExpand, setCanExpand] = useState(false);
  const captionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const caption = captionRef.current;
    if (!caption) return;

    const measure = () => {
      const lineHeight = Number.parseFloat(
        window.getComputedStyle(caption).lineHeight,
      );
      const clone = caption.cloneNode(true) as HTMLParagraphElement;
      clone.classList.remove("is-clamped");
      clone.style.position = "absolute";
      clone.style.visibility = "hidden";
      clone.style.pointerEvents = "none";
      clone.style.width = `${caption.clientWidth}px`;
      document.body.appendChild(clone);
      setCanExpand(clone.scrollHeight > lineHeight * 3 + 1);
      clone.remove();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(caption);
    return () => observer.disconnect();
  }, [item.caption]);

  const visibleExpanded = isFullyVisible && expanded;

  return (
    <article className="policymaker-rail-card" style={style}>
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
      <p
        ref={captionRef}
        className={`t-meta s-after-label policymaker-caption${
          visibleExpanded ? "" : " is-clamped"
        }`}
      >
        {item.caption}
      </p>
      {canExpand ? (
        <button
          type="button"
          className="policymaker-read-more"
          aria-expanded={visibleExpanded}
          onClick={() => {
            if (!isFullyVisible) {
              onReveal();
              setExpanded(true);
              return;
            }

            setExpanded((current) => !current);
          }}
        >
          {visibleExpanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </article>
  );
}

export default function PolicymakerRail({
  items,
}: {
  items: PolicymakerCard[];
}) {
  const [perView, setPerView] = useState(2);
  const [index, setIndex] = useState(0);
  const [stepPx, setStepPx] = useState(0);
  const [cardWidthPx, setCardWidthPx] = useState(0);
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
  const slots = perView + PEEK;
  const pageCount = Math.ceil(items.length / perView);
  const page =
    index >= maxIndex ? pageCount - 1 : Math.floor(index / perView);

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
      if (width <= 0) return;

      const gaps = Math.ceil(slots) - 1;
      const cardWidth = (width - GAP_PX * gaps) / slots;
      setCardWidthPx(cardWidth);
      // Move by a full page (perView cards), not one card
      setStepPx((cardWidth + GAP_PX) * perView);
      setIndex((current) => {
        const nextMax = Math.max(0, items.length - perView);
        return Math.min(current, nextMax);
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [perView, items.length, slots]);

  useEffect(() => {
    if (maxIndex <= 0 || paused || isDragging) return;

    const timer = window.setInterval(() => {
      setIndex((current) => {
        const next = current + perView;
        return next > maxIndex ? 0 : next;
      });
    }, 5200);

    return () => window.clearInterval(timer);
  }, [maxIndex, paused, isDragging, perView]);

  const goToPage = (nextPage: number) => {
    const clamped = Math.max(0, Math.min(pageCount - 1, nextPage));
    setIndex(Math.min(clamped * perView, maxIndex));
  };

  const finishDrag = (clientX: number) => {
    const drag = dragRef.current;
    if (!drag) return;

    const delta = clientX - drag.startX;
    const threshold = Math.max(48, stepPx * 0.18);
    let nextPage = page;

    if (Math.abs(delta) > threshold) {
      nextPage = delta < 0 ? page + 1 : page - 1;
    }

    dragRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
    goToPage(nextPage);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pageCount <= 1 || event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button")) return;

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

    const atStart = page === 0 && delta > 0;
    const atEnd = page === pageCount - 1 && delta < 0;
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
    transform: `translate3d(${-(index / perView) * stepPx + dragOffset}px, 0, 0)`,
    transition: isDragging
      ? "none"
      : "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
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
        <div className="policymaker-rail-track" style={trackStyle}>
          {items.map((item, itemIndex) => (
            <PolicymakerCardArticle
              key={item.title}
              item={item}
              isFullyVisible={itemIndex >= index && itemIndex < index + perView}
              onReveal={() => goToPage(Math.floor(itemIndex / perView))}
              style={cardStyle}
            />
          ))}
        </div>
      </div>

      {pageCount > 1 ? (
        <div
          className="event-video-controls"
          aria-label="Policymaker navigation"
        >
          <button
            type="button"
            className="event-video-arrow"
            aria-label="Previous policymakers"
            disabled={page === 0}
            onClick={() => goToPage(page - 1)}
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
            disabled={page === pageCount - 1}
            onClick={() => goToPage(page + 1)}
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
