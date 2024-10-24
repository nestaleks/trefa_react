

import {NavLink} from 'react-router-dom';
import './header.css';
import NavigationBar from '../NavigationBar/NavigationBar';


function Header() {
    return (
        <header className='header'>
            <div className="header__inner">
            <div className="header__inner-left">
                <NavLink to="/" className="header__logo">
                    <b>Trefa Cats</b>
                </NavLink>
                	
            </div>
            <NavigationBar/>
            </div>
            
        </header>
    );
}

export default Header;