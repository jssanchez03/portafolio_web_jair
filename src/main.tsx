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

// Detect mobile devices more accurately
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
         window.innerWidth <= 768 ||
         ('ontouchstart' in window);
};

// Detect if device has limited performance
const hasLimitedPerformance = () => {
  const mobile = isMobile();
  const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
  const slowConnection = (navigator as any).connection && 
    ((navigator as any).connection.effectiveType === 'slow-2g' || 
     (navigator as any).connection.effectiveType === '2g' ||
     (navigator as any).connection.effectiveType === '3g');
  
  return mobile || lowMemory || slowConnection;
};

// Initialize AOS with mobile-optimized settings
const initAOS = () => {
  const isLimitedDevice = hasLimitedPerformance();
  
  AOS.init({
    duration: isLimitedDevice ? 300 : 400,
    once: isLimitedDevice ? true : false, // On mobile, animate only once for performance
    offset: isLimitedDevice ? 20 : 50,
    easing: 'ease-out-cubic',
    delay: 0,
    disable: false, // Enable on all devices but with different settings
    debounceDelay: isLimitedDevice ? 100 : 50,
    throttleDelay: isLimitedDevice ? 150 : 99,
    mirror: !isLimitedDevice, // Disable reverse animations on limited devices
    anchorPlacement: 'top-bottom',
    startEvent: 'DOMContentLoaded'
  });
};

// Initialize with delay to ensure proper loading
setTimeout(initAOS, 100);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)