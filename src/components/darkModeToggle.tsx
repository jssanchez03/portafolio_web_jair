import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative inline-flex items-center justify-center px-3 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 overflow-hidden backdrop-blur-sm bg-white/10 border border-white/20 text-[var(--fg)] whitespace-nowrap hover:bg-white/20"
      aria-label="Toggle dark mode"
      style={{
        // Purple-tinted frosted background without losing transparency
        background: 'color-mix(in srgb, var(--primary) 18%, transparent)',
        borderColor: 'color-mix(in srgb, var(--primary) 35%, transparent)',
        color: 'var(--fg)'
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = 'color-mix(in srgb, var(--primary) 28%, transparent)';
        el.style.borderColor = 'color-mix(in srgb, var(--primary) 45%, transparent)';
        el.style.color = 'var(--fg)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = 'color-mix(in srgb, var(--primary) 18%, transparent)';
        el.style.borderColor = 'color-mix(in srgb, var(--primary) 35%, transparent)';
        el.style.color = 'var(--fg)';
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
        className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-10' : 'opacity-0'
        } group-hover:opacity-20`}
        style={{ background: 'linear-gradient(45deg, #64748b, #94a3b8)' }}
      />
    </button>
  );
};