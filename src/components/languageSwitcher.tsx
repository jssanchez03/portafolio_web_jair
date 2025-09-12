import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="group relative inline-flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 overflow-hidden backdrop-blur-sm text-[var(--fg)] whitespace-nowrap"
      style={{
        background: 'color-mix(in srgb, var(--primary) 18%, transparent)',
        border: '1px solid',
        borderColor: 'color-mix(in srgb, var(--primary) 35%, transparent)'
      }}
      data-aos="zoom-in"
      aria-label="Toggle language"
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        target.style.background = 'color-mix(in srgb, var(--primary) 28%, transparent)';
        target.style.borderColor = 'color-mix(in srgb, var(--primary) 45%, transparent)';
        target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        target.style.background = 'color-mix(in srgb, var(--primary) 18%, transparent)';
        target.style.borderColor = 'color-mix(in srgb, var(--primary) 35%, transparent)';
        target.style.boxShadow = 'none';
      }}
    >
      <Globe className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
      <span className="text-sm font-medium uppercase transition-transform duration-200 group-hover:translate-x-0.5">
        {i18n.language}
      </span>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
    </button>
  );
};