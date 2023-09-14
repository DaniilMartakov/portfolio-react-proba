import React, { useEffect, useRef, useState } from 'react';

import './style.css';

import sun from './sun.svg';
import moon from './moon.svg';

export default function BtnDarkMode() {
  const [darkMode, setDarkMode] = useState('light');
  const btnRef = useRef(null);

  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark');
      btnRef.current.classList.add('dark-mode-btn--active');
    } else {
      document.body.classList.remove('dark');
      btnRef.current.classList.remove('dark-mode-btn--active');
    }
  }, [darkMode]);

  const clickHandlerDark = () => {
    setDarkMode((currentValue) => (currentValue === 'light' ? 'dark' : 'light'));
  };

  return (
    <button ref={btnRef} type="button" className="dark-mode-btn" onClick={clickHandlerDark}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}
