import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';

//import css
import "../../layout/NavBar/NavBar.css";

//icon import 
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import Movies from "../../../assets/icons/icon-movies.png";
import TvShows from "../../../assets/icons/icon-tvs.png";
import SingIn from "../../../assets/icons/icon-login.png";
import AvatarDefoult from "../../../assets/icons/avatar-profile.jpg";


const NavBar = ({ isSideMenuOpen }) => {
    const [showDropdownUserNav, setShowDropdownUserNav] = useState(false);

    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add('sidebar-active');
        } else {
            document.body.classList.remove('sidebar-active');
        }
    }, [isSideMenuOpen]);


    return (
        <div className={`navbar ${isSideMenuOpen ? 'active' : 'close'}`}>
            <ul>
                <li>
                    <NavLink to="/movies" className='navigation-style'>
                        Movies
                        <img src={Movies} alt="" className="icon-navigation" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/z<cxsad" className='navigation-style'>
                        TV Shows
                        <img src={TvShows} alt="" className="icon-navigation" />
                    </NavLink>
                </li>
                {/* user log in nav link i dropdown */}
                <li onClick={() => setShowDropdownUserNav(!showDropdownUserNav)} >
                    <div className="UserNavbar">
                        <figure>
                            <img src={AvatarDefoult} className="userIcon" />
                        </figure>
                        <p>asdasdas</p>
                        <FaArrowRight className={showDropdownUserNav ? "arrowDrpUser rotatedArrowUser" : "arrowDrpUser"} />
                    </div>
                    {showDropdownUserNav && (

                        <div className="dropDownUser" >
                            <ul>
                                <li className='/user/ratingList'>
                                    <NavLink to="/sada" className="dropDownUser-icon">
                                        <img src={AvatarDefoult} width={30} height={30} alt="" />
                                        Dashbord
                                    </NavLink>
                                </li>

                                <li className='dropDownUser-section'>
                                    <NavLink to="/user/favoritActor" className="dropDownUser-icon">
                                        <img src={AvatarDefoult} width={30} height={30} alt="" />
                                        Profile
                                    </NavLink>
                                </li>

                                <li className='dropDownUser-section'>
                                    <NavLink to="/user/settings" className="dropDownUser-icon">
                                        <img src={AvatarDefoult} width={30} height={30} alt="" />
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    )}

                </li>
                {/* user log in nav link i dropdown */}
                <li>
                    <NavLink to="/singIn" className='navigation-style'>
                        Sing in
                        <img src={SingIn} alt="" className="icon-navigation" />
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}

export default NavBar