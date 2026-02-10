import React from 'react';

interface FooterProps {
  isDark: boolean;
  scrollToSection: (section: string) => void;
  setSelectedCategory: (category: string) => void;
}

const Footer: React.FC<FooterProps> = ({ isDark, scrollToSection, setSelectedCategory }) => {
  const navItems = ['Articles', 'About', 'Projects', 'Contact'];
  const categories = ['Design', 'Development', 'Technology', 'Personal'];

  const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/nikgitofficial' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/nikko-mp-458682298' },
  { name: 'Email', url: 'mailto:nickforjobacc@gmail.com' },
];


  return (
    <footer
      className={`${
        isDark ? 'bg-zinc-950' : 'bg-white'
      } py-12 px-6 border-t ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
              NickPacs
            </h4>
            <p className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'} text-sm`}>
              Designer × Developer × Creative Thinker
            </p>
            <p className={`${isDark ? 'text-zinc-500' : 'text-zinc-500'} text-sm mt-2`}>
              Building beautiful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-bold mb-4">Navigate</h5>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`${
                      isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                    } transition-colors bg-transparent border-none cursor-pointer`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h5 className="font-bold mb-4">Categories</h5>
            <ul className="space-y-2 text-sm">
              {categories.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      setSelectedCategory(item);
                      scrollToSection('articles');
                    }}
                    className={`${
                      isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                    } transition-colors bg-transparent border-none cursor-pointer`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h5 className="font-bold mb-4">Connect</h5>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target={item.name !== 'Email' ? '_blank' : undefined}
                    rel={item.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className={`${
                      isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-900'
                    } transition-colors`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`pt-8 border-t text-center text-sm ${
            isDark ? 'border-zinc-800 text-zinc-500' : 'border-zinc-200 text-zinc-600'
          }`}
        >
          <p>© {new Date().getFullYear()} NickPacs. Crafted with ❤️ and ☕</p>
          <p className="mt-2 text-xs">Built with React, Next.js, Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
