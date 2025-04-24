import '../sectionThird.css'; 


interface Text {
  ru: string;
  az: string;
  en: string;
}

interface Skill {
  name: Text;
  description: Text;
  iconPath: string;
}

const skills: Record<string, Skill> = {
  html: {
    name: { ru: "HTML", az: "HTML", en: "HTML" },
    description: {
      ru: "HTML — это язык для создания структуры веб-страниц.",
      az: "HTML veb səhifələrinin strukturunu yaratmaq üçün istifadə olunan dildir.",
      en: "HTML is the language used to create the structure of web pages.",
    },
    iconPath: "/html5-brands.svg",
  },
  css: {
    name: { ru: "CSS", az: "CSS", en: "CSS" },
    description: {
      ru: "CSS используется для оформления веб-страниц.",
      az: "CSS veb səhifələrinin dizaynı üçün istifadə olunur.",
      en: "CSS is used for styling web pages.",
    },
    iconPath: "/css-brands.svg",
  },
  javascript: {
    name: { ru: "JavaScript", az: "JavaScript", en: "JavaScript" },
    description: {
      ru: "JavaScript — это язык для добавления интерактивности на сайты.",
      az: "JavaScript saytlar üzərində interaktivliyi əlavə etmək üçün istifadə olunan dildir.",
      en: "JavaScript is the language for adding interactivity to websites.",
    },
    iconPath: "/js-brands.svg",
  },
  react: {
    name: { ru: "React", az: "React", en: "React" },
    description: {
      ru: "React — это библиотека для создания интерфейсов.",
      az: "React istifadəçi interfeysləri yaratmaq üçün kitabxanadır.",
      en: "React is a library for building user interfaces.",
    },
    iconPath: "/react-brands.svg",
  },
  typescript: {
    name: { ru: "TypeScript", az: "TypeScript", en: "TypeScript" },
    description: {
      ru: "TypeScript — это расширение JavaScript с типизацией.",
      az: "TypeScript JavaScript-in tipli bir genişlənməsidir.",
      en: "TypeScript is an extension of JavaScript with typing.",
    },
    iconPath: "/icons8-typescript.svg",
  },
};

const h2Text: Text = {
  ru: "Мои навыки",
  az: "mənim bacarıqlarım",
  en: "My skills",
};

const SectionThirdH2 = ({ textH2 }: { textH2: string }) => {
  return <h2 className="skills-heading">{textH2}</h2>;
};

const SectionInfo = ({ skill, lang }: { skill: Skill; lang: "ru" | "az" | "en" }) => {
  return (
    <div className="skill-card">
      <img alt={skill.name[lang]} src={skill.iconPath} />
      <h3>{skill.name[lang]}</h3>
      <p>{skill.description[lang]}</p>
    </div>
  );
};

function SectionThird({ lang }: { lang: "ru" | "az" | "en" }) {
  return (
    <section className="skills-section" id="skills">
      <SectionThirdH2 textH2={h2Text[lang]} />
      <div className="skills-grid">
        {Object.values(skills).map((skill, index) => (
          <SectionInfo key={index} skill={skill} lang={lang} />
        ))}
      </div>
    </section>
  );
}

export default SectionThird;
