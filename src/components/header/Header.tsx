import React, { useEffect, useState } from 'react';
import './Header.css';
import { Logo } from '../images/Logo';

const Header: React.FC = () => {
  const [animatedText, setAnimatedText] = useState<string>('');
  const fullText = 'Stavebná Spoločnosť';

  useEffect(() => {
    const startAnimation = () => {
      let index = 0;
      const textInterval = setInterval(() => {
        setAnimatedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(textInterval);
      }, 100);
    };

    startAnimation();

    const mainInterval = setInterval(() => {
      setAnimatedText('');
      setTimeout(startAnimation, 500);
    }, 8000);

    return () => clearInterval(mainInterval);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Logo />
        <h1 className="company-name">{animatedText}</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a href="#o-nas">O nás</a>
          </li>
          <li>
            <a href="#projekty">Naše projekty</a>
          </li>
          <li>
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
