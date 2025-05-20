import { useEffect, useState } from "react";
import clsx from "clsx";

export default function NewsCarousel({ emoji, label, items }) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // trigger fade-out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setFade(true); // fade-in new item
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, [items.length]);

  const current = items[index];

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-md transition flex flex-col justify-between h-full">
      <div
        className={clsx(
          "transition-opacity duration-500 ease-in-out",
          fade ? "opacity-100" : "opacity-0"
        )}
      >
        {/* Optional Image Section */}
        {current.image && (
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
        )}

        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1 text-right">
          {label}
          <span className="mr-1 text-xl">{emoji}</span>
        </h3>
        <h4 className="text-sm sm:text-md font-bold text-rose-400 text-right mb-2">
          {current.title}
        </h4>
        <p className="text-gray-600 text-right text-sm mb-4">
          {current.summary}
        </p>
        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-500 hover:underline text-right block"
        >
          לכתבה המלאה →
        </a>
      </div>
    </div>
  );
}
