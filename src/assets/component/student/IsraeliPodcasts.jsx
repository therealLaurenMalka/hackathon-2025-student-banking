// IsraeliPodcasts.jsx
import { useState } from "react";

const samplePodcasts = [
  {
    title: "כלכליסט השבוע",
    description: "חדשות כלכלה וטכנולוגיה בישראל ובעולם",
    date: "13 במאי 2025",
    image: "https://podcastim.org.il/wp-content/uploads/2019/01/%D7%9B%D7%9C%D7%9B%D7%9C%D7%99%D7%A1%D7%98-TO-GO-%D7%A4%D7%95%D7%93%D7%A7%D7%90%D7%A1%D7%98.jpg",
    url: "https://www.calcalist.co.il/podcast",
  },
  {
    title: "הצוללת של גלובס",
    description: "מאחורי הקלעים של הכלכלה הישראלית",
    date: "12 במאי 2025",
    image: "https://podcastim.org.il/wp-content/uploads/2019/05/%D7%94%D7%A6%D7%95%D7%9C%D7%9C%D7%AA-%D7%A4%D7%95%D7%93%D7%A7%D7%90%D7%A1%D7%98.jpg",
    url: "https://www.globes.co.il/news/home.aspx?fid=10065",
  },
  {
    title: "עושים טכנולוגיה",
    description: "המגמות החדשניות בעולם ההיי-טק",
    date: "11 במאי 2025",
    image: "https://static.wixstatic.com/media/463e01_d5cc079e9b11414a86fe9445d7c66015~mv2.jpg/v1/fill/w_500,h_500,al_c,q_80/Osim_Tech_Logo_500px.jpg",
    url: "https://www.osimhistoria.com/osimtech",
  },
  {
    title: "צחוק בצד",
    description: "פודקאסט הומוריסטי על החיים בישראל",
    date: "10 במאי 2025",
    image: "https://podcastim.org.il/wp-content/uploads/2019/08/Screenshot_3.jpg",
    url: "https://funnycast.co.il",
  },
];

export default function IsraeliPodcasts() {
  const [podcasts] = useState(samplePodcasts);

  return (
    <section className="w-full px-4 py-16 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-2">🎧 הפודקאסטים הכלכליים מישראל</h2>
        <p className="text-gray-600 text-center  mb-10">התעדכנו בקולות הכלכליים המובילים בארץ — פרקים חדשים בכל שבוע</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
          {podcasts.map((podcast, idx) => (
            <a
              key={idx}
              href={podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md border-2 border-gray-200 group-hover:shadow-lg transition duration-300">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-gray-800 truncate w-32">{podcast.title}</h3>
              <p className="text-xs text-gray-500 mt-1 line-clamp-2 w-32">{podcast.description}</p>
              <span className="text-[10px] text-gray-400 mt-1">📅 {podcast.date}</span>
              <span className="text-blue-600 text-xs mt-1 group-hover:underline">🎙️ להאזנה </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}