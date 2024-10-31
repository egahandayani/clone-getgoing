import { FiCalendar } from "react-icons/fi";

export default function ArticleCard({ image, title, date }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[280px] h-auto transition-transform duration-300 hover:scale-105">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute bottom-4 left-4 text-white font-semibold text-lg bg-opacity-75">
          {title}
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-500 text-sm mb-2 flex items-center">
          <FiCalendar className="mr-2" /> {date}
        </p>
        <p className="font-semibold text-gray-900 mb-4">{title}</p>
        <a
          href="#"
          className="text-red-600 font-semibold hover:underline hover:text-red-800 transition-colors duration-200"
        >
          LANJUTKAN MEMBACA →
        </a>
      </div>
    </div>
  );
}
