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

    return (
        <header>
            <div className="content-header">
                <NavLink href="/" className="no-underline">
                    <img src={Logo} className="logo " alt="here should be a picture" />
                </NavLink>
                <>
                    <SearchBar />
                </>

                <>
                    <SearchBarMobile />
                </>

                <>
                    <NavBar />
                </>
            </div>
        </header>
    )
}

export default Header