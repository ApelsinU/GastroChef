import React from 'react';

import './nav.sass'

const nav_content = [
    {text: 'Програмы питания', link: "#"},
    {text: 'Бизнес-ланчи', link: "#"},
    {text: 'Gastro Shop', link: "#"},
    {text: 'О нас', link: "#"},
    {text: 'Блог', link: "#"},
]

function Nav() {
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
            </ul>
        </React.Fragment>
    );
}

export default Nav;
