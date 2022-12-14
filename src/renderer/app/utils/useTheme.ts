import { useEffect, useState } from 'react';
import { themeDark, themeLight } from '../styles/theme-config';

function useTheme() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(themeLight);

  useEffect(() => {
    const useDarkTheme = parseInt(
      localStorage.getItem('dark-isDarkMode') || '',
      10
    );
    if (Number.isNaN(useDarkTheme)) {
      setDarkMode(true);
    } else if (useDarkTheme === 1) {
      setDarkMode(true);
    } else if (useDarkTheme === 0) {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('dark-isDarkMode', '1');
      setTheme(themeDark);
    } else {
      localStorage.setItem('dark-isDarkMode', '0');
      setTheme(themeLight);
    }
  }, [isDarkMode]);

  function toggleTheme() {
    setDarkMode((mode) => !mode);
  }

  return {
    isDarkMode,
    toggleTheme,
    setDarkMode,
    theme,
  };
}

export default useTheme;
