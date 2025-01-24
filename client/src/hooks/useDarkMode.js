// src/hooks/useDarkMode.js
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useDarkMode = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a ThemeProvider');
  }
  const { theme, toggleTheme } = context;
  return { theme, toggleTheme };
};

export default useDarkMode;
