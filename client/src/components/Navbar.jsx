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
      className={`w-full ${
        isSticky
          ? "fixed top-4 left-0 right-0 mx-auto max-w-7xl rounded-full backdrop-blur-md bg-white/20 shadow-2xl z-50"
          : "relative bg-white shadow-none"
      } transition-all duration-500 ease-in-out`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="logo text-2xl font-bold">GetGoing</div>

        {/* Search Bar - Updated Design */}
        <form className="hidden md:flex items-center bg-white rounded-full shadow-[0px_0px_20px_rgba(255,0,0,0.5)] overflow-hidden ml-10">
          <input
            type="text"
            placeholder="Cari negara, kota atau guide"
            className="px-6 py-3 w-[400px] outline-none text-gray-500 bg-white pr-10" // Added pr-10 for extra padding-right
          />
          <button
            type="submit"
            className="bg-red-500 p-3 flex items-center justify-center text-white rounded-full -ml-4" // Adjusted margin-left for more spacing
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

        {/* Desktop Menu */}
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
                  ? "font-bold text-black"
                  : "text-black"
              } hover:text-gray-800 transition`}
            >
              LOGIN
            </a>
          </li>
        </ul>

        {/* Hamburger Icon - visible only on smaller screens */}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg rounded-lg p-4 md:hidden">
            <ul className="flex flex-col space-y-4">
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
