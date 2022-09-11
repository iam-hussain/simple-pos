import React, { useEffect, useState } from 'react';
import useTheme from '../../utils/useTheme';
import './style.scss';

const Home: React.FC = () => {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <>
      <h1>Hello</h1>
      <button type="button" onClick={toggleTheme}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
    </>
  );
};

export default Home;
