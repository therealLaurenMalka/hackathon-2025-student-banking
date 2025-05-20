import { useState } from "react";
import {
  FaBitcoin,
  FaChartLine,
  FaPiggyBank,
  FaGuitar,
  FaUmbrellaBeach,
  FaCoffee,
  FaRunning,
  FaArrowRight,
} from "react-icons/fa";
import clsx from "clsx";

const allStories = [
  {
    title: "גלישה",
    icon: FaUmbrellaBeach,
    seen: false,
    video: "/WhatsApp Video 2025-05-13 at 17.42.32.mp4",
  },
  {
    title: "קפה",
    icon: FaCoffee,
    seen: true,
    video: "/WhatsApp Video 2025-05-13 at 17.37.25.mp4",
  },
  { title: "קריפטו", icon: FaBitcoin, seen: false },
  { title: "מניות", icon: FaChartLine, seen: true },
  { title: "חסכונות", icon: FaPiggyBank, seen: false },
  { title: "מוסיקה", icon: FaGuitar, seen: true },
  { title: "ריצה", icon: FaRunning, seen: false },
  { title: "עולם", icon: FaBitcoin, seen: false },
  { title: "גל לוי המלך", icon: FaGuitar, seen: true },
];

const VISIBLE_COUNT = 7;

export default function StoriesBar() {
  const [startIndex, setStartIndex] = useState(0);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % allStories.length);
  };

  const visibleStories = Array.from({ length: VISIBLE_COUNT }, (_, i) => {
    const index = (startIndex + i) % allStories.length;
    return allStories[index];
  });

  const fallbackVideo = "/WhatsApp Video 2025-05-13 at 17.37.25.mp4";

  return (
    <>
      <div className="w-full px-4 py-3 flex items-center mb-10">
        {/* Scrollable Stories Wrapper */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide w-full pr-2">
          {visibleStories.map((story, idx) => {
            const Icon = story.icon;
            return (
              <div
                key={idx}
                onClick={() => setVideoUrl(story.video || fallbackVideo)}
                className="cursor-pointer flex-shrink-0 flex flex-col items-center min-w-[60px] group transition-transform hover:scale-105 duration-200 ease-in-out"
              >
                <div
                  className={clsx(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-full p-[2px] mb-1 flex items-center justify-center text-white text-xl transition-all duration-300",
                    story.seen
                      ? "border-2 border-gray-300"
                      : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
                  )}
                >
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-gray-700">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <span className="text-xs text-gray-700 truncate w-[70px] text-center">
                  {story.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Arrow button: only on sm+ screens */}
        <button
          onClick={handleNext}
          className="ml-3 hidden sm:block text-gray-500 hover:text-gray-700 transition"
        >
          <FaArrowRight size={18} />
        </button>
      </div>

      {videoUrl && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-md p-4">
            <video
              src={videoUrl}
              controls
              autoPlay
              onEnded={() => setVideoUrl(null)} // ✅ close modal when video ends
              className="rounded-lg shadow-lg w-full"
            />
            <button
              onClick={() => setVideoUrl(null)}
              className="absolute top-2 right-2 text-white text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
