import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white pt-6 font-poppins">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div>
          <h2 className="font-bold text-lg mb-4">INFORMASI KONTAK</h2>
          <p className="flex items-center mb-2 text-sm font-normal">
            <FaMapMarkerAlt className="mr-2" /> BSD Green Office Park 1, 6th
            Floor, BSD City, Tangerang, Banten 15345
          </p>
          <p className="flex items-center mb-2 text-sm font-normal">
            <FaClock className="mr-2" /> 24/7 - Online
          </p>
          <p className="flex items-center mb-2 text-sm font-normal">
            <FaEnvelope className="mr-2" /> lets@getgoing.co.id
          </p>
          <p className="flex items-center mb-2 text-sm font-normal">
            <FaInstagram className="mr-2" /> @getgoing.co.id
          </p>
          <p className="flex items-center text-sm font-normal">
            <FaFacebook className="mr-2" /> @getgoing.co.id
          </p>
        </div>
        <div className="flex justify-center md:justify-start items-center space-x-4">
          <img
            src="https://getgoing.co.id/content/img/MockupApp.png"
            alt="App Preview"
            className="w-25 h-auto"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="font-bold text-lg mb-4">DOWNLOAD DI</h2>
            <div className="flex flex-col space-y-2 mb-8">
              <a href="https://apps.apple.com/us/app/getgoing/id1602015694">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on App Store"
                  className="w-40"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.getgoing.app">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="w-40"
                />
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">LAINNYA</h2>
            <ul className="space-y-2 text-sm font-normal">
              <li>
                <a href="#" className="hover:underline">
                  Syarat dan Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Dokumentasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Penghargaan
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  F.A.Q
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="bg-black text-white py-6">
        <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center">
          <p className="text-sm font-light">
            © 2024 - PT. Gue Eksplorasi Terus. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <FaInstagram className="text-white hover:text-gray-400 cursor-pointer" />
            <FaFacebook className="text-white hover:text-gray-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}
