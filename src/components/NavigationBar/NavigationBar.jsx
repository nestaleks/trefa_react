import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import youtubeIcon from './img/youtube.svg';
import facebookIcon from './img/facebook.svg';
import instagramIcon from './img/instagram.svg';
import './NavigationBar.css'

function NavigationBar() {
    // открывание-закрывание мобильного меню
    const [isOpen, setIsOpen] = useState(false);
    // закрывание мобильного меню при клике на пункт меню
    const toggleMenu = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
    {/* десктопное меню, при изменении нужно дублировать в мобильное, ниже по коду */}
    <nav className="menu-desktop">
        <button>
            <span className="btn-line"></span>
            <span className="btn-line"></span>
            <span className="btn-line"></span>
        </button>
            <>
        <a className="menu__item">
            <NavLink to="/" className="menu__link">
                Home
            </NavLink>
        </a>
        <a className="menu__item">
            <NavLink to="/about" className="menu__link">
                About
            </NavLink>
        </a>
        {/* <a className="menu__item">
            <NavLink to="/contacts" className="menu__link">
                Contact
            </NavLink>
        </a> */}
        <a className="menu__item">
            <NavLink to="/support" className="menu__link">
                Support Us
            </NavLink>
        </a>
        <div className="header__social">
            <a className="header__social-youtube" href="https://www.youtube.com/@trefa9099" target="_blank" rel="noreferrer">
                <img className="social-icon" src={youtubeIcon} alt=""/>
            </a>
            <a className="header__social-facebook" href="https://www.facebook.com/trefacats" target="_blank" rel="noreferrer">
                <img className="social-icon" src={facebookIcon} alt=""/>
            </a>
            <a className="header__social-instagram" href="https://www.instagram.com/trefa_catsshelter/" target="_blank" rel="noreferrer">
                <img className="social-icon" src={instagramIcon} alt=""/>
            </a>
        </div>
        </>
    </nav>
    {/* мобильное меню */}
    <nav className="menu-mobile {isOpen ? 'isOpen' : ''}">
        <button onClick={() => setIsOpen(!isOpen)}>
            <span className="btn-line"></span>
            <span className="btn-line"></span>
            <span className="btn-line"></span>
        </button>
        {isOpen && (
            <>
        <a className="menu__item">
            <NavLink to="/" onClick={toggleMenu} className="menu__link">
                Home
            </NavLink>
        </a>
        <a className="menu__item">
            <NavLink to="/about" onClick={toggleMenu} className="menu__link">
                About
            </NavLink>
        </a>
        {/* <a className="menu__item">
            <NavLink to="/contacts" onClick={toggleMenu} className="menu__link">
                Contact
            </NavLink>
        </a> */}
        <a className="menu__item">
            <NavLink to="/support" onClick={toggleMenu} className="menu__link">
                Support Us
            </NavLink>
        </a>
        <div className="header__social">
            <a className="header__social-youtube" href="https://www.youtube.com/@trefa9099" target="_blank" rel="noreferrer">
                <img className="social-icon" src={youtubeIcon} alt=""/>
            </a>
            <a className="header__social-facebook" href="https://www.facebook.com/trefacats" target="_blank" rel="noreferrer">
                <img className="social-icon" src={facebookIcon} alt=""/>
            </a>
            <a className="header__social-instagram" href="https://www.instagram.com/trefa_catsshelter/" target="_blank" rel="noreferrer">
                <img className="social-icon" src={instagramIcon} alt=""/>
            </a>
        </div>
        </>
        )}
    </nav>
    </>
  );
}

export default NavigationBar;