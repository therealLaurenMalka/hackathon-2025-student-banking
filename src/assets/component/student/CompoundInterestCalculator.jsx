import { useState } from "react";
import CompoundGraph from "./CompoundGraph";

const frequencyOptions = {
  "שנתי": 1,
  "חצי שנתי": 2,
  "רבעוני": 4,
  "חודשי": 12,
  "שבועי": 52,
  "יומי": 365,
};

function generateDataset(P, r, n, t) {
  const data = [];
  for (let year = 0; year <= t; year++) {
    const amount = P * Math.pow(1 + r / n, n * year);
    data.push({ year, amount: parseFloat(amount.toFixed(2)) });
  }
  return data;
}

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(1000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(1);
  const [frequency, setFrequency] = useState("שנתי");

  const n = frequencyOptions[frequency];
  const r = rate / 100;
  const A = principal * Math.pow(1 + r / n, n * time);
  const interest = A - principal;

  const dataset = generateDataset(principal, r, n, time);

  return (
    <>
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10" dir="rtl">
      <h2 className="text-2xl font-bold mb-6 text-violet-700">📈 מחשבון ריבית דריבית</h2>

      <div className="grid grid-cols-1 gap-4">
        <label>
          <span className="text-gray-700">💰 סכום ראשוני (₪)</span>
          <input
            type="number"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-violet-500 focus:border-violet-500"
          />
        </label>

        <label>
          <span className="text-gray-700">📊 ריבית שנתית (%)</span>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-violet-500 focus:border-violet-500"
          />
        </label>

        <label>
          <span className="text-gray-700">🕒 תקופה (בשנים)</span>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(Number(e.target.value))}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-violet-500 focus:border-violet-500"
          />
        </label>

        <label>
          <span className="text-gray-700">⏱️ תדירות חישוב ריבית</span>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-violet-500 focus:border-violet-500"
          >
            {Object.keys(frequencyOptions).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-lg">
        <p className="text-lg font-semibold text-gray-800">
          🔢 סכום סופי: <span className="text-violet-700">₪{A.toFixed(2)}</span>
        </p>
        <p className="text-lg font-semibold text-gray-800">
          💸 תשואה שנתית: <span className="text-fuchsia-600">₪{interest.toFixed(2)}</span>
        </p>
      </div>

      
    </div>
    <CompoundGraph dataset={dataset} />
    </>
  );
}
