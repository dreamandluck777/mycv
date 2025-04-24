import Sections from './Sections';
import { TextForH2 } from './SectionFirst';
import '../sectionSecond.css'; 


interface TextForSection {
  ru: string;
  az: string;
  en: string;
}

const textForH2: TextForH2 = {
  ru: 'О себе',
  az: 'Haqqımda',
  en: 'About Me'
};

const textForPSectionSecond: TextForSection = {
  ru: "Я живу в Баку и в настоящее время самостоятельно обучаюсь фронтенд-разработке. Мне очень нравится эта сфера, и я стремлюсь развиваться как веб-разработчик. Моя цель — продолжать совершенствоваться в этой области и создавать качественные веб-приложения, которые будут полезны пользователям.",
  az: "Bakıda yaşayıram və hal-hazırda frontend inkişafına özüm təkbaşına öyrənirəm. Bu sahəni çox bəyənirəm və veb inkişafçı olaraq inkişaf etmək istəyirəm. Məqsədim bu sahədə irəliləmək və istifadəçilərə faydalı olacaq keyfiyyətli veb tətbiqləri yaratmaqdır.",
  en: "I live in Baku and am currently self-learning frontend development. I really enjoy this field, and I am eager to grow as a web developer. My goal is to continue improving in this area and create high-quality web applications that will be useful to users."
};

const description = "Это изображение профиля.";
const imagePath = "/photo.jpeg";

function SectionSecond({ lang }: { lang: 'ru' | 'az' | 'en' }) {
  return (
    <Sections
      sectionId="about"
      sectionClassName="about-section"
      textForH2={textForH2}
      h2ClassName="about-heading"
      lang={lang}
      pText={textForPSectionSecond}
      pClassName="about-paragraph"
      imagePath={imagePath}
      imageClassName="about-image"
      description={description}
    />
  );
}

export default SectionSecond;
