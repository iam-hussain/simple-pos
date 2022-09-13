import React, { useEffect, useState } from 'react';
import useTheme from '../utils/useTheme';

const Home: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <h1>Hello</h1>
      <button type="button" onClick={toggleTheme}>
        {isDarkMode ? 'Light Theme' : 'Dark Theme'}
      </button>
    </>
  );
};

export default Home;
