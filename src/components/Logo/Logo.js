import react from 'react';
import logo from '../../assets/images/logo.png';

function Logo() {
    return (
        <div className="logo">
            <img className="logo-image" src={logo} alt="Gastro Chef Logo"></img>
            <p className="logo-text">healthy ration</p>
        </div>
    );
}

export default Logo;
