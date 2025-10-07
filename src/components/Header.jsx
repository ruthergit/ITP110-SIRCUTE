import React from "react";
import { Bell } from "lucide-react";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between px-4 md:px-10 bg-green-900 py-4 text-white shadow-md">
      <h1 className="text-lg md:text-xl font-bold">Pamantasan ng Cabuyao</h1>
      <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium">
        <a
          href="#home"
          className="pb-1 border-b-2 border-yellow-300 text-yellow-300 transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="pb-1 border-b-2 border-transparent hover:border-yellow-300 hover:text-yellow-300 transition-colors"
        >
          About
        </a>
        <a
          href="#mission-vision"
          className="pb-1 border-b-2 border-transparent hover:border-yellow-300 hover:text-yellow-300 transition-colors"
        >
          Mission & Vision
        </a>
        <a
          href="#gallery"
          className="pb-1 border-b-2 border-transparent hover:border-yellow-300 hover:text-yellow-300 transition-colors"
        >
          Gallery
        </a>
        <a
          href="#contact"
          className="pb-1 border-b-2 border-transparent hover:border-yellow-300 hover:text-yellow-300 transition-colors"
        >
          Contacts
        </a>
      </nav>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <Bell className="w-6 h-6" />
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Profile.png"
          alt="Profile"
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>
    </header>
  );
}

export default Header;
