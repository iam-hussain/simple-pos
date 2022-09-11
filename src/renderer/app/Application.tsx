import React, { useEffect, useState } from 'react';
import './Application.scss';

const Application: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const [darkTheme, setDarkTheme] = useState(true);
  const [versions, setVersions] = useState<Record<string, string>>({});

  /**
   * On component mount
   */
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

  /**
   * On Dark theme change
   */
  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  /**
   * Toggle Theme
   */
  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div id="erwt">
      <div className="header">
        <div className="main-heading">
          <h1 className="themed">ERWT - Electron Boilerplate</h1>
        </div>
        <div className="main-teaser">
          <div>
            Robust boilerplate for Desktop Applications with Electron and
            ReactJS.
            <br />
            Hot Reloading is used in this project for fast development
            experience.
            <br />
            If you think the project is useful enough, just spread the word
            around!
          </div>
        </div>
        <div className="versions">
          <div className="item">
            <div>
              {/* <img className='item-icon' src={icons.electron} /> Electron */}
            </div>
            <span>{versions?.electron}</span>
          </div>
          <div className="item">
            <div>
              {/* <img className='item-icon' src={icons.erwt} /> ERWT */}
            </div>
            <span>{versions?.erwt}</span>
          </div>
          <div className="item">
            <div>
              {/* <img className='item-icon' src={icons.typescript} /> Typescript */}
            </div>
            <span>{versions?.typescript}</span>
          </div>
          <div className="item">
            <div>
              {/* <img className='item-icon' src={icons.nodejs} /> Nodejs */}
            </div>
            <span>{versions?.node}</span>
          </div>
          <div className="item">
            <div>
              {/* <img className='item-icon' src={icons.react} /> React */}
            </div>
            <span>{versions?.react}</span>
          </div>
          <div className="item">
            <div>
              {/* <img className='item-icon' src={icons.webpack} /> Webpack */}
            </div>
            <span>{versions?.webpack}</span>
          </div>
          <div className="item">
            <div>
              {/* <img className='item-icon' src={icons.chrome} /> Chrome */}
            </div>
            <span>{versions?.chrome}</span>
          </div>
          <div className="item">
            <div>
              {/* <img className='item-icon' src={icons.license} /> License */}
            </div>
            <span>{versions?.license}</span>
          </div>
        </div>
      </div>
      <button type="button" onClick={toggleTheme}>
        {darkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
    </div>
  );
};

export default Application;
