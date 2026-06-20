import React from 'react';
import './about.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const services = [
  {
    title: 'Hrubé stavby od nuly',
    description:
      'Naši odborníci sa postarajú o kompletnú realizáciu hrubých stavieb od samotného základu. S našimi skúsenosťami postavíme každý objekt pevne, bezpečne a s dlhodobou životnosťou. Naša práca zahŕňa všetky kroky od prípravy terénu až po dokončenie hrubej stavby, čím zabezpečíme váš spokojný a bezstarostný začiatok projektov.',
    images: [
      'images/5262979313530170247-thumb.webp',
      'images/5262979313530170226-thumb.webp',
    ],
  },
  {
    title: 'Betonárske práce',
    description:
      'Naša firma ponúka profesionálne betonárske práce s dôrazom na kvalitu, presnosť a trvácnosť. Realizujeme betónovanie základov, stropov, oporných múrov a ďalších konštrukčných prvkov. Naši odborníci pracujú s najmodernejšími technológiami, aby zabezpečili pevnosť a stabilitu každého projektu. Spoliehajte sa na nás, že vaša stavba bude mať silný základ.',
    images: [
      'images/5260274965897408019-thumb.webp',
      'images/5260274965897408017-thumb.webp',
    ],
  },
  {
    title: 'Murovacie práce',
    description:
      'S našimi skúsenými murármi vykonáme murovanie z rôznych materiálov – tehál, pórobetónových tvárnic a iných moderných stavebných materiálov. Naša práca je zárukou precíznosti, presnosti a estetického vzhľadu vašich stavieb. Či už ide o rodinný dom alebo komerčné objekty, naši odborníci zabezpečia, že každý detail bude vykonaný podľa najvyšších štandardov.',
    images: [
      'images/5265231113343856056-thumb.webp',
      'images/5265231113343856054-thumb.webp',
    ],
  },
  {
    title: 'Interiérové práce',
    description:
      'Sme odborníci na interiérové práce, kde sa zameriavame na perfektné obklady, stierky, maľovanie a pokládanie parkiet. Každý projekt realizujeme so zameraním na detaily, precíznosť a dizajn, čím zabezpečíme, že vaše interiéry budú krásne, praktické a nadčasové. Naši odborníci dbajú na kvalitu a vytvorenie harmonického a pohodlného prostredia.',
    images: [
      'images/5292033994193497958-thumb.webp',
      'images/5292033994193497959-thumb.webp',
    ],
  },
  {
    title: 'Fasádne práce',
    description:
      'Naša firma ponúka širokú škálu fasádnych prác, vrátane tepelnej izolácie a aplikácie dekoratívnych omietok. Naši odborníci vám pomôžu zlepšiť energetickú efektívnosť vášho domu a zároveň zvýšiť jeho estetickú hodnotu. Používame moderné technológie, ktoré zabezpečia dlhodobú ochranu pred poveternostnými podmienkami a zároveň krásny vzhľad fasády.',
    images: [
      'images/5262979313530170219-thumb.webp',
      'images/5262979313530170220-thumb.webp',
    ],
  },
  {
    title: 'Rekonštrukcie',
    description:
      'Zrealizujeme kompletné rekonštrukcie bytov a domov, prispôsobené moderným štandardom a vašim individuálnym požiadavkám. Naši odborníci sa postarajú o každú fázu rekonštrukcie – od návrhu po finálnu realizáciu. S našimi skúsenosťami a kvalitným materiálom vám pomôžeme vytvoriť priestor, ktorý bude funkčný, estetický a pohodlný.',
    images: [
      'images/kompletni-rekonstrukce-bytu-na-klic_IMG_6195-thumb.webp',
      'images/Rekonstrukce-panelakoveho-bytu-zmena-dispozice-thumb.webp',
    ],
  },
  {
    title: 'Zámkové dlažby',
    description:
      'Zabezpečíme kvalitné pokládanie zámkovej dlažby pre chodníky, terasy a parkoviská. Naša práca je zárukou trvácnosti, pevnosti a estetického vzhľadu. Každý projekt realizujeme s dôrazom na kvalitu, precíznosť a dizajn. Naši odborníci vám pomôžu vytvoriť praktické a krásne vonkajšie priestory, ktoré vydržia mnoho rokov.',
    images: [
      'images/5293989625947351883-thumb.webp',
      'images/5292033994193497963-thumb.webp',
    ],
  },
];

type Service = (typeof services)[number];

const ServiceItem: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`service-item reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${Math.min(index, 6) * 0.08}s` }}
    >
      <span className="service-text">✅ {service.title}</span>
      <div className="service-details">
        <p>{service.description}</p>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          {service.images.map((src, i) => (
            <img key={i} src={src} alt="service" loading="lazy" />
          ))}
        </div>
      </div>
    </li>
  );
};

const AboutUsSection: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal<HTMLDivElement>();

  return (
    <section className="about-us" id="o-nas">
      <div
        ref={titleRef}
        className={`about-us-content reveal ${titleVisible ? 'is-visible' : ''}`}
      >
        <h2 className="about-us-title">O nás</h2>
        <p className="about-us-text">
          Naša spoločnosť <strong>SV-DOM</strong> je spoľahlivým partnerom v
          oblasti stavebníctva.
        </p>
        <ul className="about-us-services">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUsSection;
