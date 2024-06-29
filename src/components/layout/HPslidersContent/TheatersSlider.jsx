import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


// import required modules swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


/* icon */
import { MdFavoriteBorder } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";

//impor img
import Poster1 from "../../../assets/pictures/poster1.jpg";
import PosterMising from "../../../assets/pictures/noimg1.png";
//import img
import AddWatchList from "../../../assets/icons/icon-add.png"
import IsOnWatchList from "../../../assets/icons/icon-check.png"
import AddFavoritList from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList2 from "../../../assets/icons/icon-like.png"


//import css
import "./HpSlidersContent.css";

const TheatersSlider = () => {
    const breakpoints = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 5, spaceBetween: 10, },
    };

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'YOUR_API_KEY' with your actual API key
                const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
                const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setMovies(jsonData.results); // Assuming the movie results are in the 'results' property

            } catch (error) {
                setError(error.message);
                console.error("Error Fetching data ", error);
            }
        };

        fetchData(); // Call the fetchData function when the component mounts

    }, []); // The empty dependency array ensures that useEffect
    return (
        <div className="HomePg-contentUnder">

            <div className="contentUnder-title">
                <h1>Now playing in Theatres :</h1>
                <NavLink to="#">
                    <span className='VievAll'>View All :</span>
                </NavLink>
            </div>

            <main className='Hp-NowTheatherSlider'>
                {/* conteiner-card se brise mjenja ga swiper */}
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={10}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    loop={true}
                    breakpoints={breakpoints}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className='swiper-homeContent'
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className="conteiner-card">
                                <div className='kartica'>
                                    <div className="topcard">
                                        <NavLink to={`/movies/${movie.id}`}>
                                            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} className='poster' title={movie.title} />
                                        </NavLink>
                                    </div>
                                    <div className="botom-card">
                                        <h3 className="card-title">{movie.title}</h3>
                                        <p className="card-rating">Rating: {movie.vote_average}</p>
                                        <div className="btn-card">
                                            <button className="add-to-watchlist"
                                                title='Add to Watchlist'>
                                                Add to Watchlist
                                                <img src={AddWatchList} alt="" className='icon-add' />
                                            </button>
                                            <button
                                                className="add-to-favorites">
                                                Add to Favorites
                                                <img src={AddFavoritList} alt="" className='icon-favorit' />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </div>
    )
}

export default TheatersSlider