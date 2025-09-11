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

// Initialize AOS with subtle parallax animations
AOS.init({
  duration: 400,
  once: false, // Allow animations to repeat when scrolling up/down
  offset: 50,
  easing: 'ease-out-cubic',
  delay: 0,
  disable: 'mobile', // Disable on mobile to prevent issues
  debounceDelay: 50,
  throttleDelay: 99,
  mirror: true, // Enable reverse animations when scrolling up
  anchorPlacement: 'top-bottom',
  startEvent: 'DOMContentLoaded' // Ensure DOM is loaded before animations
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)