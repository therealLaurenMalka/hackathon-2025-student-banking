import {
    FaBitcoin,
    FaChartLine,
    FaPiggyBank,
    FaPercent,
    FaWallet,
  } from "react-icons/fa";
  
  const topics = [
    {
      label: "קריפטו",
      icon: FaBitcoin,
      url: "https://www.bankhapoalim.co.il/he/capital-market/my-advisor",
      color: "from-yellow-400 via-pink-500 to-purple-600",
    },
    {
      label: "מניות",
      icon: FaChartLine,
      url: "https://www.bankhapoalim.co.il/he/capital-market/my-advisor",
      color: "from-blue-400 via-cyan-500 to-indigo-600",
    },
    {
      label: "חיסכון",
      icon: FaPiggyBank,
      url: "https://www.bankhapoalim.co.il/he/capital-market/my-advisor",
      color: "from-green-400 via-teal-500 to-lime-500",
    },
    {
      label: "ריביות",
      icon: FaPercent,
      url: "https://www.bankhapoalim.co.il/he/capital-market/my-advisor",
      color: "from-rose-400 via-red-500 to-pink-500",
    },
    {
      label: "תקציב",
      icon: FaWallet,
      url: "https://www.bankhapoalim.co.il/he/capital-market/my-advisor",
      color: "from-orange-400 via-amber-500 to-yellow-500",
    },
  ];
  
  export default function LearnCompoundInterest() {
    return (
      <section
        className="w-full px-4 sm:px-6 py-12 bg-white text-center min-h-[420px]"
        dir="rtl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-10 leading-snug">
          למד עוד על כלכלה נכונה בזמן<br />התקופה הסטודנטיאלית
        </h2>
  
        <div className="grid grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto min-w-0">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <a
                key={idx}
                href={topic.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`bg-gradient-to-tr ${topic.color} p-[2px] sm:p-[3px] rounded-full shadow-md sm:shadow-lg`}
                >
                  <div className="bg-white rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <Icon className="text-2xl sm:text-3xl text-gray-700" />
                  </div>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                  {topic.label}
                </p>
                <span className="text-[10px] sm:text-xs text-blue-500 underline mt-1 leading-tight">
                  ללמוד עוד
                </span>
              </a>
            );
          })}
        </div>
      </section>
    );
  }
  