import { FaMoneyCheckAlt } from "react-icons/fa";

export default function RemainingBudget({ remainingBudget = 1880, currency = "₪", onContactClick }) {
  const formattedAmount = typeof remainingBudget === 'number'
    ? remainingBudget.toLocaleString()
    : '0';

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-2xl shadow-lg px-8 py-6 flex flex-col items-center text-center space-y-6">
      
      {/* Amount Display */}
      <div className="text-3xl sm:text-4xl font-bold text-green-700 tracking-tight leading-snug">
        יש לך <span className="text-green-800">{currency}{formattedAmount}</span> פנויים החודש
      </div>

      {/* Subtext */}
      <p className="text-sm sm:text-base text-gray-600 max-w-md">
        בוא נעשה עם זה משהו חכם 💡 קבל ייעוץ פיננסי מותאם להשקעות ולתכנון נכון של התקציב.
      </p>

      {/* CTA Button */}
      <button
        onClick={onContactClick || (() => {})}
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow transition duration-200 flex items-center gap-2"
      >
        <FaMoneyCheckAlt className="text-lg" /> 📈 דבר עם יועץ
      </button>
    </div>
  );
}
