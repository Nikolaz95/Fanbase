import React from 'react'
import { NavLink } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

//import css
import "./ActorsSection.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ActorsSection = ({ actors }) => {
    const ActorSlider = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        330: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        350: { slidesPerView: 1, spaceBetween: 10, },
        370: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 5, spaceBetween: 10, },
    };
    return (
        <section className='section-Actors'>
            <h1 className='title-actors'>Actors:</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                breakpoints={ActorSlider}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper-Actors'>

                <div className="actors-content">
                    {actors?.cast?.map(actor => (
                        <SwiperSlide key={actor.id} className="actors-card">

                            <NavLink to={"#"} /* to={`/actors/${actor.id}`} */>
                                <img src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`} alt="n" className="actors-img" title={actor.name} />
                            </NavLink>
                            <div className="actors-botton-container">
                                <p className="actors-name">{actor.name}</p>
                                <p className="actors-name">As</p>
                                <p className="actors-character">{actor.character}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>
    )
}

export default ActorsSection