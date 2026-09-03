"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type EventVideo = {
  id: string;
  title: string;
};

export default function EventVideoRail({ videos }: { videos: EventVideo[] }) {
  const [activeVideo, setActiveVideo] = useState<EventVideo | null>(null);

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

  return (
    <>
      <div className="s-container pb-16 lg:pb-20">
        <div className="event-video-grid">
          {videos.map((video) => (
            <article key={video.id} className="event-video-card">
              <button
                type="button"
                className="event-video-link"
                onClick={() => setActiveVideo(video)}
                aria-label={`Play ${video.title}`}
              >
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`}
                  alt=""
                  fill
                  sizes="(max-width: 767px) 78vw, 25vw"
                  className="object-cover"
                />
                <span className="event-video-play" aria-hidden="true" />
              </button>
            </article>
          ))}
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
