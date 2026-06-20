import React, { useEffect, useState } from 'react';
import './Header.css';
import { Logo } from '../images/Logo';
import { MdMenu, MdClose } from 'react-icons/md';

const Header: React.FC = () => {
  const [animatedText, setAnimatedText] = useState<string>('');
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const fullText = 'Stavebná Spoločnosť';

  useEffect(() => {
    let typingInterval: ReturnType<typeof setInterval> | undefined;
    let resetTimeout: ReturnType<typeof setTimeout> | undefined;

    const startAnimation = () => {
      let index = 0;
      typingInterval = setInterval(() => {
        index++;
        setAnimatedText(fullText.slice(0, index));
        if (index === fullText.length && typingInterval) {
          clearInterval(typingInterval);
        }
      }, 100);
    };

    startAnimation();

    const mainInterval = setInterval(() => {
      if (typingInterval) clearInterval(typingInterval);
      setAnimatedText('');
      resetTimeout = setTimeout(startAnimation, 500);
    }, 8000);

    return () => {
      clearInterval(mainInterval);
      if (typingInterval) clearInterval(typingInterval);
      if (resetTimeout) clearTimeout(resetTimeout);
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setOpenMenu(false), 300);
    }
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openMenu]);

  return (
    <header className="header">
      <div className="logo">
        <Logo />
        <h1 className="company-name">{animatedText}</h1>
      </div>

      <div className="burger-icon" onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? (
          <MdClose size={30} color="white" />
        ) : (
          <MdMenu size={30} color="black" />
        )}
      </div>

      <nav className={`nav ${openMenu ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#o-nas" onClick={e => handleNavClick(e, 'o-nas')}>
              O nás
            </a>
          </li>
          <li>
            <a href="#projekty" onClick={e => handleNavClick(e, 'projekty')}>
              Naše projekty
            </a>
          </li>
          <li>
            <a href="#kontakt" onClick={e => handleNavClick(e, 'kontakt')}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
