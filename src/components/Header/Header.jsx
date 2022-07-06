import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav.jsx'
import PhoneNumber from '../PhoneNumber/PhoneNumberLink';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

import './header.sass'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <Logo/>
                    <div className="header-top">
                        <Nav/>
                        <PhoneNumber/>
                    </div>
                    <div className="header-bottom">
                        <LanguageSwitcher/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
