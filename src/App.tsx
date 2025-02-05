import React from 'react';
import './App.css';
import Header from './components/header/Header';
import HeroSection from './components/hero/Hero';
import AboutUsSection from './components/aboutUs/AboutUs';
import ProjectsSection from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default App;
