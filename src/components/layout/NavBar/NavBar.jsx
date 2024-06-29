import React from 'react'
import { NavLink } from 'react-router-dom';

//import css
import "../../layout/NavBar/NavBar.css";

import Movies from "../../../assets/icons/icon-movies.png";
import TvShows from "../../../assets/icons/icon-tvs.png";
import SingIn from "../../../assets/icons/icon-login.png";


const NavBar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <NavLink to="/movies" className='navigation-style'>
                        Movies
                        <img src={Movies} height={30} width={30} alt="" className="icon-navigation" />
                    </NavLink>
                </li>
                <li>
                    <a className='navigation-style'>
                        TV Shows
                        <img src={TvShows} height={30} width={30} alt="" className="icon-navigation" />
                    </a>
                </li>
                <li>
                    <NavLink to="/singIn" className='navigation-style'>
                        Sing in
                        <img src={SingIn} height={30} width={30} alt="" className="icon-navigation" />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar