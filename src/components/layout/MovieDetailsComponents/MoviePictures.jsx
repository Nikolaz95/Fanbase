import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import css
import "./MoviePictures.css"

const MoviePictures = ({ moviePicture }) => {
    const PicturesOfMovie = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        330: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        350: { slidesPerView: 1, spaceBetween: 10, },
        370: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 3, spaceBetween: 10, },
        1600: { slidesPerView: 3, spaceBetween: 10, },
    };
    return (
        <section className='section-pitcutreOfMovie'>
            <h1 className='title-pitcutreOfMovie'>Pictures from Movies:</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                breakpoints={PicturesOfMovie}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper-PicturesMovie'>

                <div className="content-pitcutreOfMovie">
                    {moviePicture?.backdrops?.map(pictures => (
                        <SwiperSlide key={pictures.id} /* className="pictures-card" */>
                            <img src={`https://image.tmdb.org/t/p/w500${pictures.file_path}`} alt="" className="pitcutreOfMovieImg" />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>
    )
}

export default MoviePictures