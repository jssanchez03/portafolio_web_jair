import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save to localStorage
    localStorage.setItem('theme', theme);
    // Notify other hook instances within the same tab
    window.dispatchEvent(new CustomEvent<Theme>('theme-change', { detail: theme }));
  }, [theme]);

  // Keep all hook instances in sync across the app and even across tabs
  useEffect(() => {
    const handleThemeChange = (e: Event) => {
      const detail = (e as CustomEvent<Theme>).detail;
      if (detail && detail !== theme) {
        setTheme(detail);
      }
    };

    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        const newTheme = e.newValue as Theme;
        if (newTheme !== theme) setTheme(newTheme);
      }
    };

    window.addEventListener('theme-change', handleThemeChange as EventListener);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('theme-change', handleThemeChange as EventListener);
      window.removeEventListener('storage', handleStorage);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
};