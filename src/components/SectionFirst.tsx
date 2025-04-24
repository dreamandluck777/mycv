import "../sectionFirst.css";
import Sections from "./Sections";



export interface TextForH2 {
  ru: string;
  az: string;
  en: string;
}


const h2Text: TextForH2 = {
  ru: "Привет, я - начинающий фронтенд разработчик",
  az: "Salam, mən başlanğıc frontend inkişafçısıyam",
  en: "Hi, I am a beginner frontend developer",
};

function SectionFirst({ lang }: { lang: 'ru' | 'az' | 'en' }) {
  return (
    <Sections
      textForH2={h2Text}
      h2ClassName="section-heading"
      sectionClassName="section-first"
      lang={lang}
    />
  );
}

export default SectionFirst;
