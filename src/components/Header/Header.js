import react from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-inner">
                    <Logo></Logo>
                    <Nav></Nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
