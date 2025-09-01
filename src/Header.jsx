import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const { colors, isDarkMode, toggleTheme } = useTheme();
  
  return (
    <header className="pt-4 px-4 sm:pt-6 sm:px-6 w-full relative z-20">
      <div className="mb-6 sm:mb-8 flex items-center justify-between">
        <div>
          <div className={`font-bold text-lg sm:text-xl ${colors.text}`}>Philip Daudu</div>
          {/* <div className={`text-xs ${colors.textMuted}`}>Code with clarity. Grow with purpose.</div> */}
        </div>
        
        {/* Theme toggle and hamburger container */}
        <div className="flex items-center gap-4">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors duration-200 ${colors.button}`}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="text-xl">
              {isDarkMode ? '☀️' : '🌙'}
            </span>
          </button>
          
          {/* Hamburger for mobile */}
          <button
            className={`sm:hidden p-2 focus:outline-none ${colors.text}`}
            aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="text-2xl">{navOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>
      {/* Overlay and Nav links for mobile */}
      {navOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-60 z-30" onClick={() => setNavOpen(false)}></div>
          <nav className={`fixed top-0 left-0 w-3/4 max-w-xs h-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg z-40 flex flex-col gap-6 p-8 text-lg animate-slide-in`}>
            <button className={`self-end mb-4 ${colors.text}`} onClick={() => setNavOpen(false)} aria-label="Close navigation">
              <span className="text-2xl">✕</span>
            </button>
            <Link to="/" className={`${colors.accent} hover:${colors.accentHover}`} onClick={() => setNavOpen(false)}>me</Link>
            <Link to="/experience" className={`${colors.accent} hover:${colors.accentHover}`} onClick={() => setNavOpen(false)}>experience</Link>
            <Link to="/blog" className={`${colors.accent} hover:${colors.accentHover}`} onClick={() => setNavOpen(false)}>blog</Link>
            {/* <Link to="/work" className={`${colors.accent} hover:${colors.accentHover}`} onClick={() => setNavOpen(false)}>work</Link>
            <Link to="/archive" className={`${colors.accent} hover:${colors.accentHover}`} onClick={() => setNavOpen(false)}>archive</Link> */}
            {/* <Link to="/playground" className={`${colors.accent} hover:${colors.accentHover}`} onClick={() => setNavOpen(false)}>playground</Link> */}
          </nav>
        </>
      )}
      {/* Nav links for desktop */}
      <nav className="hidden sm:flex flex-row justify-end gap-6 text-lg mb-8">
        <Link to="/" className={`${colors.accent} hover:${colors.accentHover} border-b-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'}`}>me</Link>
        <Link to="/experience" className={`${colors.accent} hover:${colors.accentHover}`}>experience</Link>
        <Link to="/blog" className={`${colors.accent} hover:${colors.accentHover}`}>blog</Link>
        {/* <Link to="/work" className={`${colors.accent} hover:${colors.accentHover}`}>work</Link>
        <Link to="/archive" className={`${colors.accent} hover:${colors.accentHover}`}>archive</Link> */}
        {/* <Link to="/playground" className={`${colors.accent} hover:${colors.accentHover}`}>playground</Link> */}
      </nav>
    </header>
  );
}

export default Header; 