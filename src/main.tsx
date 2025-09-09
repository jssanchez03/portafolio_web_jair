// Asegurar que el tema se aplique correctamente al cargar
const ensureThemeOnLoad = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Ejecutar inmediatamente
ensureThemeOnLoad();

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './i18n/i18n'
import App from './App.tsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS once for the entire application with optimized settings
AOS.init({
  duration: 400,
  once: true,
  offset: 30,
  easing: 'ease-out-cubic',
  delay: 0,
  disable: 'mobile',
  debounceDelay: 50,
  throttleDelay: 99
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)