import React, { useEffect, useRef, useState } from 'react'

//swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//import css
import "./AutoSlider.css"
import MovieRating from '../MovieRating/MovieRating';



const AutoSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const [trendingMovies, setTrendingMovies] = useState([]);
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';


    /* fetch */
    useEffect(() => {

        const moviesTrendingWeek = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`);
                if (response.ok) {
                    const data = await response.json();
                    setTrendingMovies(data.results);
                    console.log("Movie list", data);
                } else {
                    console.error('Error fetching data from TMDB API:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data from TMDB API: ', error);
            }
        };

        // Call the moviesTrandingWeek function whenever searchValue changes
        moviesTrendingWeek();
    }, []);
    return (
        <>
            <section className='HomePg-section'>
                <div className='HomePg-topContent'>
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        navigation={false}
                        /* autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }} */
                        loop={true}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    >
                        {trendingMovies.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <div className="HomePg-BgPoster">
                                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} className='HomePg-BgPosterImg' />
                                </div>

                                <div className="HomePg-PosterContent">
                                    <div className="HomePg-left">
                                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='HomePg-posterCard' />
                                    </div>
                                    <div className="HomePg-right">
                                        <div className="HomePg-rightTop">
                                            <h1 className="HomePg-rightTitle">{movie.title}</h1>
                                        </div>
                                        <div className="HomePg-rightMiddle">
                                            <p className="HomePg-overWiev">
                                                {movie.overview}
                                            </p>
                                        </div>
                                        <div className="HomePg-rightBottom">
                                            <span className='HomePg-releaseDate'>
                                                <p>{movie.release_date}</p>
                                            </span>
                                            <MovieRating movie={movie} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default AutoSlider