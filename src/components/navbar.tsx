import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Menu, X, Download } from 'lucide-react';
import { DarkModeToggle } from './darkModeToggle';
import { LanguageSwitcher } from './languageSwitcher';
import { useTheme } from '../hooks/useTheme';

export const Navbar = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 50;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), to: 'home' },
    { name: t('nav.about'), to: 'about' },
    { name: t('nav.experience'), to: 'experience' },
    { name: t('nav.projects'), to: 'projects' },
    { name: t('nav.skills'), to: 'skills' },
    { name: t('nav.certificates'), to: 'certificates' },
    { name: t('nav.contact'), to: 'contact' },
  ];

  return (
    <>
      {/* Desktop Floating Navbar */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 hidden md:block ${
          scrolled
            ? 'backdrop-blur-md bg-white/10 shadow-lg border border-white/20' 
            : 'backdrop-blur-sm bg-white/5 border border-white/10'
        } ${isDark ? '' : 'shadow-sm'}`}
        style={{ 
          borderRadius: '50px',
          padding: '8px 16px'
        }}
      >
        <div className="flex items-center space-x-0.5">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer hover:bg-white/20 hover:scale-105"
              style={{ color: 'var(--fg)' }}
            >
              {item.name}
            </Link>
          ))}
          
          {/* CV Button */}
          <a
            href="/Currículum_Vitae_CV.pdf"
            download="Jair_Sanchez_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-full transition-all duration-200 hover:scale-105 text-xs ml-1"
          >
            <Download className="w-3 h-3" />
            {t('nav.downloadCV')}
          </a>
          
          {/* Controls */}
          <div className="flex items-center space-x-1 ml-2 pl-2 border-l border-white/20">
            <LanguageSwitcher />
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 md:hidden ${
          scrolled
            ? 'shadow-md bg-[var(--bg)]' 
            : 'bg-transparent'
        }`}
        style={{ color: 'var(--fg)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Empty space for centering */}
            <div className="flex-1"></div>

            {/* Mobile menu button and controls */}
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <DarkModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 transition-colors duration-200"
                style={{ color: 'var(--fg)' }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--bg)] shadow-lg rounded-b-lg py-2 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="block px-4 py-3 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                  style={{ color: 'var(--fg)' }}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/Currículum_Vitae_CV.pdf"
                download="Jair_Sanchez_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium hover:bg-white/10 rounded-md transition-colors"
                style={{ color: 'var(--fg)' }}
                onClick={() => setIsOpen(false)}
              >
                <Download className="w-4 h-4" />
                {t('nav.downloadCV')}
              </a>
              <div className="flex justify-center space-x-4 py-3">
                <LanguageSwitcher />
                <DarkModeToggle />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};