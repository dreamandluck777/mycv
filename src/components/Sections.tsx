import { TextForH2 } from "./SectionFirst";



interface ForSections {
  sectionClassName?: string;
  textForH2: TextForH2;
  h2ClassName?: string;
  lang: 'ru' | 'az' | 'en';
  pText?: TextForH2;
  pClassName?: string;
  imagePath?: string;
  imageClassName?: string;
  description?: string;
  sectionId?: string;
}

 const Sections = ({
  sectionClassName,
  sectionId,
  textForH2,
  h2ClassName,
  lang,
  pText,
  pClassName,
  imagePath,
  imageClassName,
  description,
}: ForSections) => {
  return (
    <section className={sectionClassName} id={sectionId}>
      <h2 className={h2ClassName}>{textForH2[lang]}</h2>
      {pText && <p className={pClassName}>{pText[lang]}</p>}
      {imagePath && <img src={imagePath} alt={description || "Image description"} className={imageClassName} />}
    </section>
  );
};

export default Sections;