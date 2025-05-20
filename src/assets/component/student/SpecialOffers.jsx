// SpecialOffers.jsx
import OfferCarousel from "./OfferCarosel";

const dailyOffers = {
  0: ["🛌 Sleep in Sunday", "🍳 Brunch discount"],
  1: ["☕ Free coffee after gym", "🥤 25% off protein shakes"],
  2: ["🎬 Movie night special", "🍕 1+1 pizza deal"],
  3: ["🧠 Free tutoring hour", "🎮 Gaming night entry"],
  4: ["🛍️ Campus pop-up sale", "🍺 1st drink free"],
  5: ["🎤 Open mic night", "🍣 Sushi Friday special"],
  6: ["🧘 Sunset yoga at the beach", "🥾 Group hike discount"],
};

const monthlyEvents = [
  { emoji: "https://www.standupfactory.co.il/wp-content/uploads/2018/05/-%D7%910015-%D7%A7%D7%90%D7%91%D7%A8-e1549654957122.gif", title: "סטאנד אפ!", date: "May 18" },
  { emoji: "https://media.istockphoto.com/id/1155413611/photo/modern-interior-design-of-spa-sauna-concept-of-fine-living-relaxation-3d-rendering.jpg?s=612x612&w=0&k=20&c=APkwMRa_SNmnxMYMyVINUDahJF6TXdqjFqY99Z9lJMw=", title: "ספא בחצי מחיר!", date: "May 22" },
  { emoji: "https://www.ukguide.co.il/Photos/Articles/concert.jpg", title: "מסיבה במחיר מוזל!", date: "May 25" },
  { emoji: "https://2.a7.org/files/pictures/781x439/961384.jpg", title: "סרט ב25% הנחה!", date: "May 28" },
  { emoji: "https://www.giborbeer.co.il/files/articles/item/thumbsrc/iStock_1474893276.jpg", title: "בירה שנייה עלינו!", date: "May 30" },
];

export default function SpecialOffers() {
  const today = new Date().getDay();
  const todayOffers = dailyOffers[today];
  const leftover = 35.5;

  return (
    <section className="w-full px-4 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-12">
        {/* 📅 Monthly Offer + Bank CTA */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Monthly Offer Carousel */}
          <div className="lg:col-span-2 bg-gradient-to-br from-pink-50 to-fuchsia-100 rounded-2xl shadow-md p-1 hover:shadow-lg transition duration-300">
            <div className="rounded-xl bg-white p-4">
              <OfferCarousel
                title="📅 מבצעים חמים החודש"
                offers={monthlyEvents}
                interval={5000}
                showImages={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}