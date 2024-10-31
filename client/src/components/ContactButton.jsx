import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaInfoCircle, FaTimes } from "react-icons/fa";

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={toggleDialog}
          className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shadow-lg focus:outline-none"
        >
          <FaInfoCircle className="text-black text-xl" />
        </button>
      )}
      {isOpen && (
        <div className="relative bg-white rounded-lg shadow-lg p-4 w-64">
          <button
            onClick={toggleDialog}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FaTimes />
          </button>
          <h3 className="text-red-600 font-semibold text-lg">Hubungi kami</h3>
          <p className="text-gray-600 text-sm">melalui IG atau WA</p>
          <div className="flex mt-3 space-x-4">
            <a
              href="https://www.instagram.com/getgoing.co.id/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-3xl text-red-500" />
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=6281119190601&text=Hallo%2C+Saya+mau+berlibur+ke+Eropa+dengan+Private+Trip.+Apakah+bisa+dibantu+%3F&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-3xl text-green-500" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
