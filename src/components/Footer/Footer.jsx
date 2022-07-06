import React from 'react';

import logo from '../../assets/images/logo.png';

import './footer.sass'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <nav>
                        <a href="#"></a>
                        
                    </nav>
                    <img className="logo-image" src={logo} alt="Gastro Chef Logo"/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
