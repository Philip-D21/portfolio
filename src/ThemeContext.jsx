import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Otherwise, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Save theme preference to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Update document class for global styles
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    colors: {
      // Background colors
      bg: isDarkMode ? 'bg-gray-900' : 'bg-white',
      bgSecondary: isDarkMode ? 'bg-gray-800' : 'bg-gray-50',
      
      // Text colors
      text: isDarkMode ? 'text-white' : 'text-black',
      textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
      textMuted: isDarkMode ? 'text-gray-400' : 'text-gray-500',
      
      // Border colors
      border: isDarkMode ? 'border-gray-700' : 'border-gray-200',
      borderLight: isDarkMode ? 'border-gray-600' : 'border-gray-300',
      
      // Accent colors
      accent: isDarkMode ? 'text-blue-400' : 'text-blue-600',
      accentHover: isDarkMode ? 'text-blue-300' : 'text-blue-800',
      
      // Button colors
      button: isDarkMode ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700' : 'bg-white border-gray-400 text-black hover:bg-gray-100',
      
      // Social links
      social: isDarkMode ? 'text-gray-300 hover:text-white' : 'text-black hover:opacity-70'
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
