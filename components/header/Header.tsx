"use client";
import { useEffect, useState } from "react";
import "./header.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header_container w-svw z-100 rounded-b-xl
      ${scrolled ? "header_scrolled fixed top-0 left-0 right-0" : "header_transparent "}`}
    >
      <span className="logo_txt text-xl font-semibold antialiased text-white">
        MM
      </span>

      <ul className="menu_list gap-4 flex-row text-sm underline-offset-4 hidden lg:flex">
        <li className="menu_items cursor-pointer underline">HOME</li>
        <li className="menu_items cursor-pointer hover:underline">PROJECTS</li>
        <li className="menu_items cursor-pointer hover:underline">BLOGS</li>
        <li className="menu_items cursor-pointer hover:underline">ABOUT</li>
        <li className="menu_items cursor-pointer hover:underline">CONTACT</li>
      </ul>

      <button className="px-3 py-1.5 bg-white text-black rounded-md text-md font-medium hover:bg-gray-800 hover:text-white border-2 border-white transition-all duration-300">
        Request Demo
      </button>
    </header>
  );
};
