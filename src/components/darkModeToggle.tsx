import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg transition-all duration-300 hover:scale-110 overflow-hidden"
      style={{ 
        background: 'var(--card-bg)', 
        color: 'var(--fg)',
        border: '1px solid var(--border)'
      }}
      aria-label="Toggle dark mode"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 transform ${
            theme === 'dark' 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          }`} 
        />
        {/* Moon Icon */}
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-all duration-500 transform ${
            theme === 'dark' 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          }`} 
        />
      </div>
      
      {/* Animated background glow */}
      <div 
        className={`absolute inset-0 rounded-lg transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-20' : 'opacity-0'
        }`}
        style={{ background: 'linear-gradient(45deg, #1e40af, #7c3aed)' }}
      />
    </button>
  );
};