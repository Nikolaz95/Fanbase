import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

/* import pictures */
import Logo from "../../../assets/pictures/logo.gif"
import Search from "../../../assets/icons/icon-search.png";

//import css
import "../../layout/Header/Header.css";

//import components
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import SearchBarMobile from '../SearchBarMobile/SearchBarMobile';


const Header = () => {
    const [isLogoVisible, setIsLogoVisible] = useState(true);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const toggleSideMenu = () => {
        setIsSideMenuOpen((prevSideMenuOpen) => !prevSideMenuOpen);
    }

    const handleSearchToggle = (isActive) => {
        setIsLogoVisible(!isActive);
    };

    return (
        <header>
            <div className="content-header">
                {isLogoVisible && (
                    <NavLink to="/" className="no-underline">
                        <img src={Logo} className="logo" alt="Logo" />
                    </NavLink>
                )}
                <>
                    <SearchBar />
                </>

                <>
                    <SearchBarMobile
                        onSearchToggle={handleSearchToggle}
                    />
                </>

                <>
                    <NavBar isSideMenuOpen={isSideMenuOpen} setIsSideMenuOpen={setIsSideMenuOpen} />
                </>

                <div onClick={toggleSideMenu} className={`ham-menu ${isSideMenuOpen === true ? "active" : null} ${isSideMenuOpen === false ? "close" : null}`}>
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                </div>
            </div>
        </header>
    )
}

export default Header