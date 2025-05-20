import { useState } from "react";
import { FaGlobe, FaSearch, FaUser } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/פםשךןצ.png"
            alt="Poalim Logo"
            className="w-6 h-6 object-contain"
          />
          <span className="text-xl font-bold text-red-600">בנק הפועלים</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-4 text-sm text-gray-700">
          <a href="#" className="hover:text-red-500">
            לקוח פרטי
          </a>
          <a href="#" className="hover:text-red-500">
            לקוח עסקי
          </a>
          <a href="#" className="hover:text-red-500">
            Poalim Wonder
          </a>
          <a href="#" className="hover:text-red-500">
            השקעות
          </a>
        </div>

        {/* Right: Icons + Lang + Login */}
        <div className="flex items-center gap-3">
          <button className="text-gray-700 hover:text-red-500">
            <FaSearch />
          </button>
          <button className="text-sm text-gray-700 hover:text-red-500 flex items-center gap-1">
            <FaGlobe />
            <span className="hidden sm:inline">International</span>
          </button>
          <button className="bg-gradient-to-r from-red-600 to-pink-500 text-white px-3 py-1.5 rounded-md text-sm hover:opacity-90 whitespace-nowrap">
            כניסה לחשבון
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 ml-2"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700 text-sm">
          <a href="#" className="block hover:text-red-500">
            לקוח פרטי
          </a>
          <a href="#" className="block hover:text-red-500">
            לקוח עסקי
          </a>
          <a href="#" className="block hover:text-red-500">
            Poalim Wonder
          </a>
          <a href="#" className="block hover:text-red-500">
            השקעות
          </a>
        </div>
      )}
    </header>
  );
}
