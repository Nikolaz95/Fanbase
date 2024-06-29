import React from 'react'


//import css
import "./GenresType.css"

//import img
import MenuWatch from "../../../assets/icons/icon-menu.png"

const GenresType = () => {
    return (
        <div className="movieDetails-genres">
            <div className="movieDetails-genresContent">
                <p className='genresText'>Action</p>
                <img src={MenuWatch} className='genresImg' alt="" />
            </div>

            <div className="movieDetails-genresContent">
                <p className='genresText'>Action</p>
                <img src={MenuWatch} className='genresImg' alt="" />
            </div>

            <div className="movieDetails-genresContent">
                <p className='genresText'>Action</p>
                <img src={MenuWatch} className='genresImg' alt="" />
            </div>

            <div className="movieDetails-genresContent">
                <p className='genresText'>Adventure</p>
                <img src={MenuWatch} className='genresImg' alt="" />
            </div>

            <div className="movieDetails-genresContent">
                <p className='genresText'>Science Fiction</p>
                <img src={MenuWatch} className='genresImg' alt="" />
            </div>

        </div>
    )
}

export default GenresType