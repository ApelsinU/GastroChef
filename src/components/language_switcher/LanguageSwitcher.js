import react from 'react';
import './language-switcher.sass'

function LanguageSwitcher() {

  const languages = ['ru', 'ua', 'en'];



  return (
    <div className="switcher">
      { languages.map(lg => {
          return <button className="switcher-lang-btn">{lg}</button>
        })
      }
    </div>
  );
}

export default LanguageSwitcher;
