import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="kontakt">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Kontakt</h3>
          <p>📍 Adresa: Racianska 88B, Bratislava, Slovensko</p>
          <p>📞 Telefón: +421 949 545 059</p>
          <p>📧 Email: ivansvystak96@gmail.com</p>
        </div>
        {/* <div className="footer-socials">
          <h3>Sledujte nás</h3>
          <a href="#" className="social-link">
            Facebook
          </a>
          <a href="#" className="social-link">
            Instagram
          </a>
          <a href="#" className="social-link">
            LinkedIn
          </a>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SV-DOM. Všetky práva vyhradené.</p>
      </div>
    </footer>
  );
};

export default Footer;
