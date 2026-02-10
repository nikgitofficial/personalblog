"use client";

import React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

// Define the props type
type NavbarProps = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
};

export default function Navbar({
  isDark,
  setIsDark,
  isMenuOpen,
  setIsMenuOpen,
  scrollY,
  scrollToSection,
}: NavbarProps) {
  const navItems = ["Articles", "About", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? (isDark ? "bg-zinc-950/90" : "bg-stone-50/90") + " backdrop-blur-xl shadow-lg"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <h1
            className="font-serif text-2xl font-bold tracking-tight"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            NickPacs
          </h1>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative group text-sm font-medium tracking-wide hover:text-violet-500 transition-colors bg-transparent border-none cursor-pointer"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark
                ? "bg-zinc-800 text-yellow-400 hover:bg-zinc-700"
                : "bg-zinc-200 text-zinc-700 hover:bg-zinc-300"
            }`}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-current"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 ${
          isDark ? "bg-zinc-950/95" : "bg-stone-50/95"
        } backdrop-blur-xl border-t border-zinc-800/50 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setIsMenuOpen(false);
              }}
              className={`text-lg font-medium py-2 hover:text-violet-500 transition-colors text-left bg-transparent border-none cursor-pointer ${
                isDark ? "text-zinc-200" : "text-zinc-900"
              }`}
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}