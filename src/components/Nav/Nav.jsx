import React from 'react';
import { useTranslation, Trans} from  'react-i18next'
import './nav.sass'



function Nav() {
      // const {gettext} = useTranslation()

    const nav_content = [
      {text: 'Программы питания', link: "#"},
      {text: 'Бизнес-ланчи', link: "#"},
      {text: 'Gastro Shop', link: "#"},
      {text: 'О нас', link: "#"},
      {text: 'Блог', link: "#"},
    ]
    return (
        <React.Fragment>
            <ul className="nav">
                {nav_content.map(item => {
                    return (
                      <li className={"nav-item"}>
                          <a className="nav-link" href={item.link}>
                              {item.text}
                          </a>
                      </li>
                    )
                })}
              {/*<li className="nav-item">{gettext('header__food_programs')}</li>*/}
            </ul>
        </React.Fragment>
    );
}

export default Nav;
