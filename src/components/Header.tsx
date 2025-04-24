import '../header.css';


interface HeaderProps {
  lang: 'ru' | 'az' | 'en';
  switchLang: (lang: 'ru' | 'az' | 'en') => void;
}

const titles = {
  ru: 'Это моя страница резюме',
  az: 'Bu mənim CV səhifəmdir',
  en: 'This is my resume page',
};

const liArrayNames = [
  { id: 1, name: { ru: 'О себе', az: 'Haqqımda', en: 'About Me' } },
  { id: 2, name: { ru: 'Навыки', az: 'Bacarıqlar', en: 'Skills' } },
  { id: 3, name: { ru: 'Образование', az: 'Təhsil', en: 'Education' } },
];

const anchors = ['about', 'skills', 'education'];

const Header = ({ lang, switchLang }: HeaderProps) => {
  return (
    <header className='headerWrapper'>
      <div className='divWrapperForButton'>
        {['ru', 'en', 'az'].map((code) => (
          <button
            key={code}
            className={lang === code ? 'langButton activeLang' : 'langButton'}
            onClick={() => switchLang(code as 'ru' | 'az' | 'en')}
          >
            {code === 'ru' ? 'рус' : code === 'en' ? 'eng' : 'aze'}
          </button>
        ))}
      </div>
      <h1 className='h1Title'>{titles[lang]}</h1>
      <nav>
        <ul className='navList'>
          {liArrayNames.map((elem) => {
            const anchor = anchors[elem.id - 1];
            return (
              <li key={elem.id}>
                <a className='navLink' href={`#${anchor}`}>
                  {elem.name[lang]}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
