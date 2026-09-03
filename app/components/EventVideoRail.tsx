"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type EventVideo = {
  id: string;
  title: string;
};

function chunkVideos(videos: EventVideo[], size: number) {
  const pages: EventVideo[][] = [];
  for (let i = 0; i < videos.length; i += size) {
    pages.push(videos.slice(i, i + size));
  }
  return pages;
}

export default function EventVideoRail({ videos }: { videos: EventVideo[] }) {
  const [activeVideo, setActiveVideo] = useState<EventVideo | null>(null);
  const [perView, setPerView] = useState(2);
  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const viewportRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    width: number;
    moved: boolean;
  } | null>(null);
  const suppressClickRef = useRef(false);

  const pages = chunkVideos(videos, perView);
  const pageCount = pages.length;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const sync = () => {
      setPerView(media.matches ? 2 : 1);
      setPage(0);
      setDragOffset(0);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (pageCount <= 1 || paused || activeVideo || isDragging) return;

    const timer = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [pageCount, paused, activeVideo, isDragging]);

  useEffect(() => {
    if (!activeVideo) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeVideo]);

  const finishDrag = (clientX: number) => {
    const drag = dragRef.current;
    if (!drag) return;

    const delta = clientX - drag.startX;
    const threshold = Math.max(48, drag.width * 0.18);
    let nextPage = page;

    if (Math.abs(delta) > threshold) {
      nextPage = delta < 0 ? page + 1 : page - 1;
      nextPage = Math.max(0, Math.min(pageCount - 1, nextPage));
    }

    if (drag.moved) {
      suppressClickRef.current = true;
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }

    dragRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
    setPage(nextPage);
  };

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pageCount <= 1 || event.button !== 0) return;

    const width = viewportRef.current?.offsetWidth ?? 1;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      width,
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
    transform: `translate3d(calc(-${page * 100}% + ${dragOffset}px), 0, 0)`,
    transition: isDragging
      ? "none"
      : "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <>
      <div className="s-container pb-16 lg:pb-20">
        <div
          className="event-video-carousel"
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
            className={`event-video-viewport${isDragging ? " is-dragging" : ""}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
          >
            <div className="event-video-track" style={trackStyle}>
              {pages.map((group, pageIndex) => (
                <div key={pageIndex} className="event-video-page">
                  {group.map((video) => (
                    <article key={video.id} className="event-video-card">
                      <button
                        type="button"
                        className="event-video-link"
                        onClick={() => {
                          if (suppressClickRef.current) return;
                          setActiveVideo(video);
                        }}
                        aria-label={`Play ${video.title}`}
                      >
                        <Image
                          src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                          alt=""
                          fill
                          sizes="(max-width: 767px) 86vw, 50vw"
                          draggable={false}
                          className="object-cover"
                        />
                        <span className="event-video-play" aria-hidden="true" />
                      </button>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {pageCount > 1 ? (
            <div className="event-video-controls">
              <div
                className="event-video-dots"
                role="tablist"
                aria-label="Event videos"
              >
                {pages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    role="tab"
                    aria-selected={index === page}
                    aria-label={`Show videos group ${index + 1}`}
                    className={`event-video-dot${index === page ? " is-active" : ""}`}
                    onClick={() => setPage(index)}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {activeVideo ? (
        <div
          className="event-video-modal"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.title}
        >
          <button
            type="button"
            className="event-video-modal-backdrop"
            aria-label="Close video"
            onClick={() => setActiveVideo(null)}
          />
          <div className="event-video-modal-panel">
            <button
              type="button"
              className="event-video-modal-close"
              aria-label="Close video"
              onClick={() => setActiveVideo(null)}
              autoFocus
            >
              Close
            </button>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
