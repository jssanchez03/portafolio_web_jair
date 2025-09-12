import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-2 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 overflow-hidden"
      style={{ 
        background: 'var(--card-bg)', 
        color: 'var(--fg)',
        border: '1px solid var(--border)'
      }}
      aria-label="Toggle dark mode"
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        target.style.background = 'var(--primary)';
        target.style.color = 'white';
        target.style.borderColor = 'var(--primary)';
        target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLButtonElement;
        target.style.background = 'var(--card-bg)';
        target.style.color = 'var(--fg)';
        target.style.borderColor = 'var(--border)';
        target.style.boxShadow = 'none';
      }}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ease-out transform ${
            theme === 'dark' 
              ? 'rotate-180 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`} 
          style={{ willChange: 'transform, opacity' }}
        />
        {/* Moon Icon */}
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ease-out transform ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-180 scale-0 opacity-0'
          }`} 
          style={{ willChange: 'transform, opacity' }}
        />
      </div>
      
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
      
      {/* Gentle background glow */}
      <div 
        className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-10' : 'opacity-0'
        } group-hover:opacity-20`}
        style={{ background: 'linear-gradient(45deg, #64748b, #94a3b8)' }}
      />
    </button>
  );
};