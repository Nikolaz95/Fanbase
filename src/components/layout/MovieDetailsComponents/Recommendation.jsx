import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import css
import "./Recommendation.css"

/* icon */
import { MdFavoriteBorder } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import AddWatchList from "../../../assets/icons/icon-add.png"
import IsOnWatchList from "../../../assets/icons/icon-check.png"
import AddFavoritList from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList2 from "../../../assets/icons/icon-like.png"
import { NavLink } from 'react-router-dom';

const Recommendation = ({ recommendations }) => {
    const RecommendationsOfMovie = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        330: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        350: { slidesPerView: 1, spaceBetween: 10, },
        370: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 4, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 4, spaceBetween: 10, },
    };
    return (
        <section className="section-recommendations">
            <h1 className="title-recommendations">Recommendations:</h1>
            <div className="recommendations-content">
                {recommendations && recommendations.length > 0 && (
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation
                        pagination={{ clickable: true }}
                        loop={true}
                        breakpoints={RecommendationsOfMovie}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className='swiper-Recommendation'>

                        {recommendations.map((recommendation) => (
                            <SwiperSlide key={recommendation.id}>
                                <div className="conteiner-card">
                                    <div className='kartica'>
                                        <div className="topcard">
                                            <NavLink to={`/movies/${recommendation.id}`}>
                                                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${recommendation.poster_path}`} alt={recommendation.title} className='poster' title={recommendation.title} />
                                            </NavLink>
                                        </div>
                                        <div className="botom-card">
                                            <h3 className="card-title">{recommendation.title}</h3>
                                            <p className="card-rating">Rating: {recommendation.vote_average}</p>
                                            <div className="btn-card">
                                                <button className="add-to-watchlist">Add to Watchlist <FiPlusCircle className='icon-add' /></button>
                                                <button className="add-to-favorites">Add to Favorites <MdFavoriteBorder className='icon-favorit' /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>))}
                    </Swiper>
                )}
            </div>
        </section>
    )
}

export default Recommendation