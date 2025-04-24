import React, { useState } from 'react';
import Header from './components/Header';
import SectionFirst from './components/SectionFirst';
import SectionSecond from './components/SectionSecond';
import SectionThird from './components/SectionThird';
import SectionFourth from './components/SectionFourth';
import './index.css';

type SwitchLang = 'ru' | 'az' | 'en';

const App = () => {
  const [lang, setLang] = useState<SwitchLang>('ru');

  const switchLang = (lang: SwitchLang) => {
    setLang(lang);
  };

  return (
    <div>
      <Header lang={lang} switchLang={switchLang} />
      <SectionFirst lang={lang} />
      <SectionSecond lang={lang} />
      <SectionThird lang={lang} />
      <SectionFourth lang={lang} />
    </div>
  );
};

export default App;
