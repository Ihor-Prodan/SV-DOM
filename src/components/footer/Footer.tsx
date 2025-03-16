import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="kontakt">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Kontakt</h3>
          <p>📍 Adresa: Hlavná 123, Bratislava, Slovensko</p>
          <p>📞 Telefón: +421 987 654 321</p>
          <p>📧 Email: info@sv-dom.sk</p>
        </div>
        <div className="footer-socials">
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
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SV-DOM. Všetky práva vyhradené.</p>
      </div>
    </footer>
  );
};

export default Footer;
