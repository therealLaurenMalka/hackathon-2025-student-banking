export default function Current() {
    const totalBudget = 5000;
    const spentThisMonth = 3120;
  
    const percentUsed = (spentThisMonth / totalBudget) * 100;
    const remaining = totalBudget - spentThisMonth;
  
    return (
      <div className="mt-10 w-full max-w-2xl px-4 sm:px-6">
        <div className="bg-rose-100 shadow-lg rounded-2xl p-5 sm:p-6 border border-transparent">
          
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            💼 מצב החשבון שלך
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="bg-white rounded-xl p-4 shadow transition hover:scale-105 hover:shadow-md duration-300">
              <p className="text-sm text-gray-500 mb-1">💸 הוצאות החודש</p>
              <p className="text-2xl font-bold text-rose-500">
                ₪{spentThisMonth.toLocaleString()}
              </p>
            </div>
  
            <div className="bg-white rounded-xl p-4 shadow transition hover:scale-105 hover:shadow-md duration-300">
              <p className="text-sm text-gray-500 mb-1">🎯 תקציב חודשי</p>
              <p className="text-2xl font-bold text-emerald-500">
                ₪{totalBudget.toLocaleString()}
              </p>
            </div>
  
            <div className="bg-white rounded-xl p-4 shadow transition hover:scale-105 hover:shadow-md duration-300">
              <p className="text-sm text-gray-500 mb-1">📦 נותר לך</p>
              <p className="text-2xl font-bold text-blue-500">
                ₪{remaining.toLocaleString()}
              </p>
            </div>
          </div>
  
          {/* Progress Bar */}
          <div className="mt-8">
            <div className="h-3 w-full bg-white rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-rose-400 to-rose-600 transition-all duration-700"
                style={{ width: `${percentUsed}%` }}
              />
            </div>
            <p className="text-xs text-right text-gray-600 mt-2">
              ⚡️ {percentUsed.toFixed(1)}% מהתקציב נוצל
            </p>
          </div>
        </div>
      </div>
    );
  }
  