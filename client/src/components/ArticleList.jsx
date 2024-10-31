import React from "react";

const articles = [
  {
    image:
      "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/blogImage%2Fe510f078-23c5-4741-9f7b-bf54767b403f?alt=media&token=e9fbb902-8b2e-4f31-8502-b258ee5e8ff6",
    title: "Gaya Hidup Dan Rahasia Sehat Masyarakat Eropa",
    date: "12 Jun 2023",
  },
  {
    image:
      "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17213001441.png?alt=media&token=a493eeab-0b0d-4c51-86a6-5a968dea9fab",
    title: "Menjelajahi Keindahan Appenzell dan Seealpsee",
    date: "18 Jul 2024",
  },
  {
    image:
      "https://ik.imagekit.io/getgoing/tr:w-1000,h-1000/v0/b/getgoing-prod.appspot.com/o/tripPlanner%2F17290788771.png?alt=media&token=33c05366-c9a0-42e9-a069-16f8c423448a",
    title: "Resor Ski Hemat Terbaik di Eropa untuk Musim Dingin 2024",
    date: "16 Okt 2024",
  },
];

export default function ArticleList() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Baca juga</h2>
        <button className="text-red-600 font-semibold hover:bg-red-600 hover:text-white border border-red-600 py-2 px-4 rounded-full transition">
          LIHAT SEMUA ARTIKEL »
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-200"
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{article.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <a href="#" className="text-red-600 font-semibold">
                LANJUTKAN MEMBACA →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
