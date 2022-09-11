import { useEffect, useState } from 'react';

function useTheme() {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode') || '', 10);
    if (Number.isNaN(useDarkTheme)) {
      setDarkTheme(true);
    } else if (useDarkTheme === 1) {
      setDarkTheme(true);
    } else if (useDarkTheme === 0) {
      setDarkTheme(false);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return {
    darkTheme,
    toggleTheme,
  };
}

export default useTheme;
