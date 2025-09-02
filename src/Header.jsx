import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const { colors, isDarkMode, toggleTheme } = useTheme();
  
  return (
    <header className="pt-4 px-4 sm:pt-6 sm:px-6 w-full relative z-20">
      {/* Main header row with logo and right-aligned nav + controls */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className={`font-bold text-lg sm:text-xl ${colors.text}`}>Philip Daudu</div>
        </div>
        
        {/* Right side: Desktop Navigation + Theme toggle + Mobile menu */}
        <div className="flex items-center gap-6">
          {/* Desktop Navigation - Far Right */}
          <nav className="hidden sm:flex items-center gap-6 text-lg">
            <Link 
              to="/" 
              className={`${colors.accent} hover:${colors.accentHover} transition-colors duration-200 border-b-2 ${isDarkMode ? 'border-blue-400' : 'border-blue-600'}`}
            >
              me
            </Link>
            <Link 
              to="/experience" 
              className={`${colors.accent} hover:${colors.accentHover} transition-colors duration-200`}
            >
              experience
            </Link>
            <Link 
              to="/blog" 
              className={`${colors.accent} hover:${colors.accentHover} transition-colors duration-200`}
            >
              blog
            </Link>
          </nav>
          
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-200 ${colors.button} hover:scale-105`}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="text-xl">
              {isDarkMode ? '☀️' : '🌙'}
            </span>
          </button>
          
          {/* Mobile hamburger */}
          <button
            className={`sm:hidden p-2 rounded-lg transition-all duration-200 hover:${colors.bgSecondary} ${colors.text}`}
            aria-label={navOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="text-xl">{navOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {navOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-60 z-30" onClick={() => setNavOpen(false)}></div>
          <nav className={`fixed top-0 left-0 w-3/4 max-w-xs h-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-xl z-40 flex flex-col gap-6 p-8 text-lg animate-slide-in`}>
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button 
                className={`p-2 rounded-lg transition-colors duration-200 hover:${colors.bgSecondary} ${colors.text}`} 
                onClick={() => setNavOpen(false)} 
                aria-label="Close navigation"
              >
                <span className="text-xl">✕</span>
              </button>
            </div>
            
            {/* Mobile nav links */}
            <div className="flex flex-col gap-6">
              <Link 
                to="/" 
                className={`${colors.accent} hover:${colors.accentHover} transition-colors duration-200 text-xl py-2 border-b ${colors.border}`} 
                onClick={() => setNavOpen(false)}
              >
                me
              </Link>
              <Link 
                to="/experience" 
                className={`${colors.accent} hover:${colors.accentHover} transition-colors duration-200 text-xl py-2 border-b ${colors.border}`} 
                onClick={() => setNavOpen(false)}
              >
                experience
              </Link>
              <Link 
                to="/blog" 
                className={`${colors.accent} hover:${colors.accentHover} transition-colors duration-200 text-xl py-2 border-b ${colors.border}`} 
                onClick={() => setNavOpen(false)}
              >
                blog
              </Link>
            </div>
            
            {/* Theme toggle in mobile menu */}
            <div className="mt-8 pt-6 border-t ${colors.border}">
              <button
                onClick={() => {
                  toggleTheme();
                  setNavOpen(false);
                }}
                className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-200 ${colors.button} hover:${colors.bgSecondary}`}
              >
                <span className="text-xl">
                  {isDarkMode ? '☀️' : '🌙'}
                </span>
                <span className="text-base font-medium">
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}

export default Header; 