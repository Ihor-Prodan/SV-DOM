import React from 'react';
import './about.css';

const AboutUsSection: React.FC = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2 className="about-us-title">O nás</h2>
        <p className="about-us-text">
          Naša spoločnosť <strong>SV-DOM</strong> je spoľahlivým partnerom v
          oblasti stavebníctva, ktorý kladie dôraz na{' '}
          <strong>kvalitu, precíznosť a profesionalitu</strong>. Vďaka skúseným
          majstrom a odbornému vyškoleniu, vrátane špecializácie v{' '}
          <strong>Doka systémoch </strong>
          pre betónové konštrukcie, poskytujeme komplexné stavebné riešenia.
        </p>
        <ul className="about-us-services">
          <li>
            ✅ <span>Hrubé stavby od nuly</span>
          </li>
          <li>
            ✅{' '}
            <span>
              Betonárske práce (základy, stropy, oporné múry, práca s debnením
              Doka)
            </span>
          </li>
          <li>
            ✅ <span>Murovacie práce</span>
          </li>
          <li>
            ✅{' '}
            <span>
              Interiérové práce (obklady, stierky, maľovanie, parkety)
            </span>
          </li>
          <li>
            ✅ <span>Fasádne práce</span>
          </li>
          <li>
            ✅ <span>Rekonštrukcie</span>
          </li>
          <li>
            ✅ <span>Zámkové dlažby</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsSection;
