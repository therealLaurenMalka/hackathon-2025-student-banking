import NewsCarousel from "./NewsCarousel";

const newsData = {
  ai: [
    {
      title: "צ'אט-GPT חוצה את רף 100 מיליון המשתמשים היומיים",
      summary: "הצ'אטבוט של OpenAI משנה את הדרך בה עובדים ולומדים בכל העולם.",
      url: "https://nytimes.com/openai",
      image : "/ai.jpeg",
    },
    {
      title: "גוגל משיקה את ג'מיני 2",
      summary: "המודל החדש מתמודד ישירות עם GPT-4 ביכולות מתקדמות.",
      url: "https://techcrunch.com/google-gemini",
      image : "/aiiii.jpeg",

    },
  ],
  finance: [
    {
      title: "הריביות שוב מטפסות בשווקים הגלובליים",
      summary: "הבנקים המרכזיים נערכים לאתגרים אינפלציוניים לקראת 2026.",
      url: "https://reuters.com/finance",
      image : "/finance.jpeg",

    },
    {
      title: "ביטקוין עובר שוב את 70 אלף דולר",
      summary: "השווקים מגיבים באופטימיות להצהרות ה-SEC לגבי אישור ETF.",
      url: "https://coindesk.com/bitcoin-70k",
      image : "/fin.jpeg",

    },
  ],
  companies: [
    {
      title: "טסלה חושפת טכנולוגיית סוללה חדשה",
      summary: "החברה מבטיחה טווח נסיעה גבוה יותר ב-40% ללא עלייה במשקל.",
      url: "https://techcrunch.com/tesla",
      image : "/buis.jpeg",

    },
    {
      title: "אמזון מרחיבה את תוכנית המשלוחים ברחפנים",
      summary: "ערים נוספות יקבלו משלוחים תוך 30 דקות באוויר.",
      url: "https://verge.com/amazon-drones",
      image : "/ecooo.jpeg",

    },
  ],
  art: [
    {
      title: "הציור החדש של בנקסי מהמם את לונדון",
      summary: "יצירת אמנות חברתית הופיעה באישון לילה במזרח העיר.",
      url: "https://bbc.com/banksy",
      image : "/slash.jpeg",

    },
    {
      title: "אמנות שנוצרה בידי AI נמכרת בסכום שיא",
      summary: "יצירה דיגיטלית נמכרה במכירה פומבית של סות'ביס ביותר מ-2 מיליון דולר.",
      url: "https://artnews.com/ai-art-sale",
      image : "/art.jpeg",

    },
  ],
};

export default function NewsSection() {
  return (
    <section className="w-full px-4 sm:px-6 py-8 sm:py-12" dir="rtl">
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          כותרות היום
        </h2>
        <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base">
          חדשות טריות בטכנולוגיה, כלכלה, עסקים ואמנות – מתעדכן מדי יום
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        <NewsCarousel emoji="🤖" label="בינה מלאכותית" items={newsData.ai} />
        <NewsCarousel emoji="💰" label="כלכלה" items={newsData.finance} />
        <NewsCarousel emoji="🏢" label="חברות ועסקים" items={newsData.companies} />
        <NewsCarousel emoji="🎨" label="תרבות ואמנות" items={newsData.art} />
      </div>
    </section>
  );
}
