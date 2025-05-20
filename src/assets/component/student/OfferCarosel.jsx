import clsx from "clsx";
import { useEffect, useState } from "react";

export default function OfferCarousel({ title, offers, interval = 4000, className }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, interval);
    return () => clearInterval(timer);
  }, [offers.length, interval]);

  const current = offers[index];

  return (
    <div className={clsx("w-full max-w-xl rounded-2xl shadow-xl overflow-hidden relative", className)}>
      {/* Background cover image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage:
            typeof current === "object" && current.emoji?.startsWith("http")
              ? `url(${current.emoji})`
              : "none",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-0" />

      {/* Foreground content */}
      <div className="relative z-10 px-6 py-8 h-64 flex flex-col justify-between">
        <h2 className="text-white text-[1.4rem] sm:text-2xl font-semibold tracking-tight mb-4 drop-shadow-md leading-snug font-inter">
          {title}
        </h2>

        <div className="text-center px-4 py-2 bg-black/40 rounded-xl backdrop-blur-sm shadow-md inline-block max-w-xs mx-auto">
          {typeof current === "string" ? (
            <span className="text-white text-lg font-medium leading-tight font-inter">{current}</span>
          ) : (
            <>
              <p className="text-white text-xl font-semibold leading-tight font-inter">
                {current.title}
              </p>
              {current.date && (
                <p className="text-sm text-gray-300 mt-1 font-light font-inter">{current.date}</p>
              )}
            </>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {offers.map((_, i) => (
            <span
              key={i}
              className={clsx(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === index ? "bg-white scale-125" : "bg-white/40"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
