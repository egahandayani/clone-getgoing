import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveLink = (path) => location.pathname === path;

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 ${
        isSticky ? "bg-white/30 backdrop-blur-lg shadow-md" : "bg-transparent"
      } transition-all duration-500 ease-in-out`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <img
          src="https://getgoing.co.id/_next/static/images/LogoGetGoing-1b06f75eefdc319bb98ba925a24ee023.png"
          alt="GetGoing"
        />
        <form className="hidden md:flex items-center bg-white rounded-full shadow-[0px_0px_20px_rgba(255,0,0,0.5)] overflow-hidden ml-10">
          <input
            type="text"
            placeholder="Cari negara, kota atau guide"
            className="px-6 py-3 w-[400px] outline-none text-gray-800 bg-white pr-10"
          />
          <button
            type="submit"
            className="bg-red-500 p-3 flex items-center justify-center text-white rounded-full -ml-4"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
        </form>
        <ul className="hidden md:flex space-x-4 ml-auto font-medium">
          <li>
            <a
              href="/"
              className={`${
                isActiveLink("/") ? "font-bold text-red-500" : "text-red-500"
              } hover:text-red-700 transition`}
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="/services"
              className={`${
                isActiveLink("/services")
                  ? "font-bold text-red-500"
                  : "text-red-500"
              } hover:text-red-700 transition`}
            >
              Servis Kami
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className={`${
                isActiveLink("/blog")
                  ? "font-bold text-red-500"
                  : "text-red-500"
              } hover:text-red-700 transition`}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/login"
              className={`${
                isActiveLink("/login")
                  ? "font-bold text-black tracking-[.2em] text-[13px]"
                  : "text-black"
              } hover:text-gray-800 transition tracking-[.2em] text-[13px] font-bold`}
            >
              LOGIN
            </a>
          </li>
        </ul>
        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Dropdown menu on mobile*/}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/50 backdrop-blur-3xl shadow-lg rounded-lg p-4">
            <div className="absolute inset-0 bg-white/60 rounded-lg pointer-events-none"></div>
            <form className="relative flex items-center bg-white rounded-full shadow-[0px_0px_20px_rgba(255,0,0,0.5)] overflow-hidden mb-4 p-2 z-10">
              <input
                type="text"
                placeholder="Cari negara, kota atau guide"
                className="px-4 py-2 w-full outline-none text-gray-800 bg-white"
              />
              <button
                type="submit"
                className="bg-red-500 p-2 flex items-center justify-center text-white rounded-full"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </form>
            <ul className="relative flex flex-col space-y-4 z-10">
              <li>
                <a
                  href="/"
                  className={`${
                    isActiveLink("/")
                      ? "font-bold text-red-500"
                      : "text-red-500"
                  } hover:text-red-700 transition`}
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className={`${
                    isActiveLink("/services")
                      ? "font-bold text-red-500"
                      : "text-red-500"
                  } hover:text-red-700 transition`}
                >
                  Servis Kami
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className={`${
                    isActiveLink("/blog")
                      ? "font-bold text-red-500"
                      : "text-red-500"
                  } hover:text-red-700 transition`}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className={`${
                    isActiveLink("/login")
                      ? "font-bold text-black"
                      : "text-black"
                  } hover:text-gray-800 transition`}
                >
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
