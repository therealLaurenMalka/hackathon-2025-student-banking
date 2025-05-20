import { FaRobot } from "react-icons/fa";

export default function AIAdvisorCTA() {
  return (
    <div className="w-full max-w-xl mx-auto mt-6 px-4 py-4 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center gap-4" dir="rtl">
      {/* Icon */}
      <div className="text-violet-600 text-xl bg-violet-100 p-2 rounded-full shadow-sm">
        <FaRobot />
      </div>

      {/* Text + CTA */}
      <div className="flex flex-col text-right text-sm">
        <h1 className="text-gray-800 font-medium"> רוצה להבין במהירות בכלכלה? </h1>
        <span className="text-gray-800 font-medium">התייעץ עם היועץ הדיגיטלי החכם</span>
        <a
          href="https://www.bankhapoalim.co.il/he/capital-market/my-advisor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-xs mt-0.5"
        >
          מעבר ליועץ
        </a>
      </div>
    </div>
  );
}
