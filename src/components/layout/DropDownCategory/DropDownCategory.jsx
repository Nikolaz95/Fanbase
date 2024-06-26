import React from 'react'

//import css
import "./DropDownCategory.css";

import { AiOutlineArrowUp } from 'react-icons/ai';


const DropDownCategory = ({ handleCategoryChange, selectedCategory, showDropdown, setShowDropdown }) => {
    return (
        <section className="all-moviecontent">
            <div className="category-title">
                <h1 className='category-titleName'>{selectedCategory === 'theaters' ? 'Now playing in Theatres' : selectedCategory === 'upcoming' ? 'Upcoming movies' : selectedCategory === "toprated" ? 'Top Rated Movies' : ""}</h1>

                <div className="dropdown">
                    <p
                        onClick={() =>
                            setShowDropdown(!showDropdown)}
                        className="dropdown-BtnMenu">Category <AiOutlineArrowUp className={showDropdown ? 'arrowDrp rotatedArrow' : 'arrowDrp'} /> </p>
                    {showDropdown && (
                        <div onClick={handleCategoryChange} className='dropdown-options'>
                            <option className='dropdown-btn' value="theaters">Theatres movies</option>
                            <option className='dropdown-btn' value="upcoming">Upcoming movies</option>
                            <option className='dropdown-btn' value="toprated">Top Rated Movies</option>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default DropDownCategory