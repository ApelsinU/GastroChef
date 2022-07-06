import './language-switcher.sass'
import { useTranslation, Trans } from 'react-i18next';

function LanguageSwitcher() {

  const languages = {
    en: {nativeName: 'English'},
    de: {nativeName: 'Deutch'},
    ru: {nativeName: 'Russian'},
  }

  const { gettext, i18n } = useTranslation();


  return (

    <div className="switcher">
      { Object.keys(languages).map((lg, i) => {
          return <button key={i} className="switcher-lang-btn"
          //onClick={changeLanguage(lg)}
          >{lg}</button>
        })
      }
    </div>
  );
}

export default LanguageSwitcher;
