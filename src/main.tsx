import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './i18n/i18n'
import App from './App.tsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS once for the entire application with optimized settings
AOS.init({
  duration: 600,
  once: false, // Allow animations to repeat every time
  offset: 50,
  easing: 'ease-out-quart',
  delay: 0,
  disable: 'mobile' // Disable on mobile for better performance
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
