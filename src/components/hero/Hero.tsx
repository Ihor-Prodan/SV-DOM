import React, { useState, useEffect } from 'react';
import './hero.css';

const images = [
  '/public/images/5260274965897407991.jpg',
  '/public/images/5260274965897407992.jpg',
  '/public/images/5260274965897408017.jpg',
  '/public/images/5260274965897408018.jpg',
  '/public/images/5260274965897408019.jpg',
  '/public/images/5262979313530170247.jpg',
];

const HeroSection: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isFading, setIsFading] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  useEffect(() => {
    setIsTitleVisible(true);

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImage(nextImage);
        setNextImage(prev => (prev + 1) % images.length);
        setIsFading(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section className="hero">
      <div
        className={`hero-bg bg-current ${isFading ? 'fade-out' : ''}`}
        style={{
          backgroundImage: `url(${images[currentImage]})`,
        }}
      ></div>
      <div
        className={`hero-bg bg-next ${!isFading ? 'fade-in' : ''}`}
        style={{
          backgroundImage: `url(${images[nextImage]})`,
        }}
      ></div>
      <h2 className={`hero-title ${isTitleVisible ? 'fade-up' : ''}`}>
        Kvalitná výstavba pre vašu budúcnosť
      </h2>
      <a href="#kontakt" className="contact-button">
        <span></span> Kontaktujte nás
      </a>
    </section>
  );
};

export default HeroSection;
