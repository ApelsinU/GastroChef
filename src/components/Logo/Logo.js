import react from 'react';
import logo from '../../assets/images/logo.png';

function Logo() {
    return (
        <a className="logo" href="#">
            <img className="logo-image" src={logo} alt="Gastro Chef Logo"/>
            <p className="logo-text">healthy ration</p>
        </a>
    );
}

export default Logo;
