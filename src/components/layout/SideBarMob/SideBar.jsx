import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


//import icon
import { FaBars } from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';


//import css
import "./SideBar.css"

const SideBar = () => {

    return (
        <div className="sidebar active">
            {/* Sidebar content goes here */}
            <NavLink to="/movies" className='navigation-style'>
                Movies
            </NavLink>
            <NavLink to="/tvshows" className='navigation-style'>
                TV Shows
            </NavLink>
            <NavLink to="/signin" className='navigation-style'>
                Sign in
            </NavLink>
        </div>
    )
}

export default SideBar