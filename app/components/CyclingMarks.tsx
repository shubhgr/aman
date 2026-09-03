type Mark = {
  src: string;
  alt: string;
};

export default function CyclingMarks({
  marks,
  className = "h-7 w-7 object-contain",
}: {
  marks: Mark[];
  className?: string;
}) {
  if (!marks.length) return null;

  const loop = [...marks, ...marks];

  return (
    <div
      className="mark-marquee relative h-8 w-8 shrink-0 overflow-hidden"
      aria-label={marks.map((item) => item.alt).join(", ")}
    >
      <div className="mark-marquee-track">
        {loop.map((mark, index) => (
          <div key={`${mark.alt}-${index}`} className="mark-marquee-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mark.src}
              alt={index < marks.length ? mark.alt : ""}
              aria-hidden={index >= marks.length}
              className={className}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
