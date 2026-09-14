"use client";

type MarqueeBigTextProps = {
  phrases: string[];
  highlight?: string[];
  className?: string;
};

export function MarqueeBigText({ phrases, highlight = [], className }: MarqueeBigTextProps) {
  const items = [...phrases, ...phrases];
  const highlightSet = new Set(highlight.map((word) => word.toUpperCase()));

  return (
    <div className={`track-marquee w-full ${className ?? ""}`}>
      <div className="track-marquee-inner flex items-center gap-16 whitespace-nowrap">
        {items.map((phrase, idx) => (
          <span
            key={`${phrase}-${idx}`}
            className="text-[12vw] font-black uppercase leading-[0.9] tracking-tight md:text-[10rem]"
          >
            {phrase.split(" ").map((word, wIdx) => (
              <span
                key={`${word}-${wIdx}`}
                className={highlightSet.has(word.toUpperCase()) ? "text-lime-400" : "text-zinc-100"}
              >
                {word}{" "}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
