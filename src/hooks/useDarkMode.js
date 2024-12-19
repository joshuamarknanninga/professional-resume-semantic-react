// src/hooks/useDarkMode.js
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const useDarkMode = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
};

export default useDarkMode;
