import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme') as Theme;
    console.log('🔍 Theme inicial:', { savedTheme, systemPrefersDark: window.matchMedia('(prefers-color-scheme: dark)').matches });
    
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
    
    console.log('🎨 Aplicando tema:', theme);
    console.log('📋 Clases antes:', root.classList.toString());
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    console.log('📋 Clases después:', root.classList.toString());
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
    console.log('💾 Guardado en localStorage:', theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log('🔄 Toggle theme llamado. Tema actual:', theme);
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log('🔄 Cambiando de', prevTheme, 'a', newTheme);
      return newTheme;
    });
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  };
};