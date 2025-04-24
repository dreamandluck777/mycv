import '../sectionFourth.css'; 


interface TextForPAndH3 {
  ru: string;
  az: string;
  en: string;
}

interface H2Text {
  ru: string;
  az: string;
  en: string;
}

const textForP: { [key: number]: TextForPAndH3 } = {
  1: {
    ru: "Я окончил бакалавриат в Российском биотехнологическом университете по специальности 'Биотехнология'.",
    az: "Mən Rusiya Biotexnologiya Universitetində 'Biotexnologiya' ixtisası üzrə bakalavriat təhsilini başa vurmuşam.",
    en: "I graduated with a Bachelor's degree from the Russian University of Biotechnology, specializing in 'Biotechnology'.",
  },
  2: {
    ru: "Я окончил магистратуру в Первом медицинском университете имени Сеченова по направлению фармацевтика.",
    az: "Mən Seçenov adına Birinci Tibb Universitetində farmasevtika ixtisası üzrə magistratura təhsilimi başa vurmuşam.",
    en: "I completed my Master's degree at Sechenov First Moscow State Medical University in the field of Pharmacy.",
  },
};

const textForH3: { [key: number]: TextForPAndH3 } = {
  1: {
    ru: "Бакалавриат",
    az: "Bakalavriat",
    en: "Bachelor's Degree",
  },
  2: {
    ru: "Магистратура",
    az: "Magistratura",
    en: "Master's Degree",
  },
};

const h2Text: H2Text = {
  ru: "Образование",
  az: "Təhsil",
  en: "Education",
};

interface PropsSectionInfo {
  textForH3: string;
  textForP: string;
}

const SectionEducation = ({ textForH3, textForP }: PropsSectionInfo) => {
  return (
    <div className="education-card">
      <h3>{textForH3}</h3>
      <p>{textForP}</p>
    </div>
  );
};

function SectionFourth({ lang }: { lang: 'ru' | 'az' | 'en' }) {
  return (
    <section className="education-section" id="education">
      <h2 className="education-heading">{h2Text[lang]}</h2>
      <div className="education-wrapper">
        {Object.keys(textForH3).map((key) => (
          <SectionEducation
            key={key}
            textForH3={textForH3[+key][lang]}
            textForP={textForP[+key][lang]}
          />
        ))}
      </div>
    </section>
  );
}

export default SectionFourth;
