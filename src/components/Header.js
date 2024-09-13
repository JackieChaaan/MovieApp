import React from 'react';
import './Header.scss';
import Logo from '../assets/Netflix_2015_logo.svg.png'
import LanguageSelectBox from './LanguageSelectBox';

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Netflix-Logo" />
            </div>
            <div className="wrapper">
                <LanguageSelectBox/>
                <div className="sign-in">
                    <button type="button">Sign in</button>
                </div>
            </div>
        </header>
    )
}

export default Header
