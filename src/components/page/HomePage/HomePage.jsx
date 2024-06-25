import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

//import css
import "../../page/HomePage/HomePage.css";

//impor img
import Poster1 from "../../../assets/pictures/poster1.jpg";
import PosterMising from "../../../assets/pictures/noimg1.png";


//import component
import AutoSlider from '../../layout/HPAutoSlider/AutoSlider';
import TheatersSlider from '../../layout/HPslidersContent/TheatersSlider';
import UpcomingMovieSliders from '../../layout/HPslidersContent/UpcomingMovieSliders';
import TopRatedMoviesSlider from '../../layout/HPslidersContent/TopRatedMoviesSlider';

const HomePage = () => {



    return (
        <>

            <AutoSlider />
            {/* Now playing in Theatres kontent */}
            <TheatersSlider />
            {/* Now playing in Theatres kontent */}

            {/* Upcoming movies kontent */}
            <UpcomingMovieSliders />
            {/* Upcoming movies kontent */}

            {/* TopRated movies kontent */}
            <TopRatedMoviesSlider />
            {/* TopRated movies kontent */}
        </>
    )
}

export default HomePage