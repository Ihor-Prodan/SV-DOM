import React from 'react';
import './about.css';

const services = [
  {
    title: 'Hrubé stavby od nuly',
    description:
      'Naši odborníci sa postarajú o kompletnú realizáciu hrubých stavieb od samotného základu. S našimi skúsenosťami postavíme každý objekt pevne, bezpečne a s dlhodobou životnosťou. Naša práca zahŕňa všetky kroky od prípravy terénu až po dokončenie hrubej stavby, čím zabezpečíme váš spokojný a bezstarostný začiatok projektov.',
    images: [
      'images/5262979313530170247.jpg',
      'images/5262979313530170226.jpg',
    ],
  },
  {
    title: 'Betonárske práce',
    description:
      'Naša firma ponúka profesionálne betonárske práce s dôrazom na kvalitu, presnosť a trvácnosť. Realizujeme betónovanie základov, stropov, oporných múrov a ďalších konštrukčných prvkov. Naši odborníci pracujú s najmodernejšími technológiami, aby zabezpečili pevnosť a stabilitu každého projektu. Spoliehajte sa na nás, že vaša stavba bude mať silný základ.',
    images: [
      'images/5260274965897408019.jpg',
      'images/5260274965897408017.jpg',
    ],
  },
  {
    title: 'Murovacie práce',
    description:
      'S našimi skúsenými murármi vykonáme murovanie z rôznych materiálov – tehál, pórobetónových tvárnic a iných moderných stavebných materiálov. Naša práca je zárukou precíznosti, presnosti a estetického vzhľadu vašich stavieb. Či už ide o rodinný dom alebo komerčné objekty, naši odborníci zabezpečia, že každý detail bude vykonaný podľa najvyšších štandardov.',
    images: [
      'images/5265231113343856056.jpg',
      'images/5265231113343856054.jpg',
    ],
  },
  {
    title: 'Interiérové práce',
    description:
      'Sme odborníci na interiérové práce, kde sa zameriavame na perfektné obklady, stierky, maľovanie a pokládanie parkiet. Každý projekt realizujeme so zameraním na detaily, precíznosť a dizajn, čím zabezpečíme, že vaše interiéry budú krásne, praktické a nadčasové. Naši odborníci dbajú na kvalitu a vytvorenie harmonického a pohodlného prostredia.',
    images: [
      'images/5292033994193497958.jpg',
      'images/5292033994193497959.jpg',
    ],
  },
  {
    title: 'Fasádne práce',
    description:
      'Naša firma ponúka širokú škálu fasádnych prác, vrátane tepelnej izolácie a aplikácie dekoratívnych omietok. Naši odborníci vám pomôžu zlepšiť energetickú efektívnosť vášho domu a zároveň zvýšiť jeho estetickú hodnotu. Používame moderné technológie, ktoré zabezpečia dlhodobú ochranu pred poveternostnými podmienkami a zároveň krásny vzhľad fasády.',
    images: [
      'images/5262979313530170219.jpg',
      'images/5262979313530170220.jpg',
    ],
  },
  {
    title: 'Rekonštrukcie',
    description:
      'Zrealizujeme kompletné rekonštrukcie bytov a domov, prispôsobené moderným štandardom a vašim individuálnym požiadavkám. Naši odborníci sa postarajú o každú fázu rekonštrukcie – od návrhu po finálnu realizáciu. S našimi skúsenosťami a kvalitným materiálom vám pomôžeme vytvoriť priestor, ktorý bude funkčný, estetický a pohodlný.',
    images: [
      'images/kompletni-rekonstrukce-bytu-na-klic_IMG_6195.jpeg',
      'images/Rekonstrukce-panelakoveho-bytu-zmena-dispozice.jpg',
    ],
  },
  {
    title: 'Zámkové dlažby',
    description:
      'Zabezpečíme kvalitné pokládanie zámkovej dlažby pre chodníky, terasy a parkoviská. Naša práca je zárukou trvácnosti, pevnosti a estetického vzhľadu. Každý projekt realizujeme s dôrazom na kvalitu, precíznosť a dizajn. Naši odborníci vám pomôžu vytvoriť praktické a krásne vonkajšie priestory, ktoré vydržia mnoho rokov.',
    images: [
      'images/5293989625947351883.jpg',
      'images/5292033994193497963.jpg',
    ],
  },
];

const AboutUsSection: React.FC = () => {
  return (
    <section className="about-us" id="o-nas">
      <div className="about-us-content">
        <h2 className="about-us-title">O nás</h2>
        <p className="about-us-text">
          Naša spoločnosť <strong>SV-DOM</strong> je spoľahlivým partnerom v
          oblasti stavebníctva.
        </p>
        <ul className="about-us-services">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <span className="service-text">✅ {service.title}</span>
              <div className="service-details">
                <p>{service.description}</p>
                <div
                  style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}
                >
                  {service.images.map((src, i) => (
                    <img key={i} src={src} alt="service" />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUsSection;
