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
      className="flex items-center gap-2 p-2 rounded-lg transition-all duration-300 hover:scale-110"
      style={{ 
        background: 'var(--card-bg)', 
        color: 'var(--fg)',
        border: '1px solid var(--border)'
      }}
      data-aos="zoom-in"
      aria-label="Toggle language"
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        target.style.background = 'var(--accent)';
        target.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        target.style.background = 'var(--card-bg)';
        target.style.color = 'var(--fg)';
      }}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium uppercase">
        {i18n.language}
      </span>
    </button>
  );
};