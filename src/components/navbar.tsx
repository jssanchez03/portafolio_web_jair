import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import { Download } from 'lucide-react';
import { DarkModeToggle } from './darkModeToggle';
import { LanguageSwitcher } from './languageSwitcher';
import { useTheme } from '../hooks/useTheme';
import StaggeredMenu from './StaggeredMenu';

export const Navbar = () => {
  const { t } = useTranslation();
  const { isDark } = useTheme();
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

  // Preparar elementos para StaggeredMenu con navegación suave
  const staggeredMenuItems = navItems.map(item => ({
    label: item.name,
    ariaLabel: item.name,
    link: item.to // Solo el ID, sin #
  }));

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
        <div className="flex items-center space-x-0.5 flex-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              className="px-3 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer hover:bg-white/20 hover:scale-105 whitespace-nowrap"
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
            className="inline-flex items-center gap-1 px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-full transition-all duration-200 hover:scale-105 text-xs ml-1 whitespace-nowrap"
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

      {/* Mobile Navigation with StaggeredMenu */}
      <div className="md:hidden">
        {/* StaggeredMenu with integrated controls */}
        <StaggeredMenu
          position="right"
          items={staggeredMenuItems}
          className="md:hidden"
          menuButtonColor="var(--fg)"
          openMenuButtonColor="var(--fg)"
          changeMenuColorOnOpen={true}
          showControls={true}
        />
      </div>
    </>
  );
};