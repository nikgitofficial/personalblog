"use client";

import React from "react";
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";

// Define the props type
type FooterProps = {
  isDark: boolean;
  scrollToSection: (sectionId: string) => void;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export default function Footer({
  isDark,
  scrollToSection,
  setSelectedCategory,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      label: "Articles",
      action: () => {
        scrollToSection("articles");
        setSelectedCategory("All");
      },
    },
    { label: "About", action: () => scrollToSection("about") },
    { label: "Projects", action: () => scrollToSection("projects") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/nikgitofficial", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/nikko-mp-undefined-458682298",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:nickforjobacc@gmail.com", label: "Email" },
  ];

  return (
    <footer
      className={`${
        isDark ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-200"
      } border-t`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
  src="/logo.png"
  alt="NikBlog Logo"
  className={`w-10 h-10 object-contain transition-all duration-300 ${
    isDark ? "filter invert brightness-125" : ""
  }`}
/>

              <h3
                className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {/*NikBlog*/}
              </h3>
            </div>
            <p
              className={`text-sm leading-relaxed mb-6 ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Crafting thoughtful content at the intersection of design,
              development, and creativity. Join me on this journey of building,
              learning, and sharing.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full ${
                    isDark
                      ? "bg-zinc-800 hover:bg-zinc-700"
                      : "bg-zinc-100 hover:bg-zinc-200"
                  } transition-all hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={link.action}
                    className={`text-sm hover:text-violet-600 transition-colors bg-transparent border-none cursor-pointer ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Categories</h4>
            <ul className="space-y-3">
              {["Design", "Development", "Technology", "Personal"].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      setSelectedCategory(cat);
                      scrollToSection("articles");
                    }}
                    className={`text-sm hover:text-violet-600 transition-colors bg-transparent border-none cursor-pointer ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`pt-8 border-t ${
            isDark ? "border-zinc-800" : "border-zinc-200"
          } flex flex-col md:flex-row justify-between items-center gap-4`}
        >
          <p
            className={`text-sm ${
              isDark ? "text-zinc-500" : "text-zinc-600"
            }`}
          >
            © {currentYear} NikBlog. All rights reserved.
          </p>
          <p
            className={`text-sm flex items-center gap-2 ${
              isDark ? "text-zinc-500" : "text-zinc-600"
            }`}
          >
            Made with{" "}
            <Heart size={16} className="text-rose-500" fill="currentColor" />{" "}
            and lots of coffee By: Nikko
          </p>
        </div>
      </div>
    </footer>
  );
}
