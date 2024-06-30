import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import css
import "./VideoOfMovieSection.css"



const VideoOfMovieSection = ({ videosOfMovie }) => {
    const TrailsOfMovie = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        330: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        350: { slidesPerView: 1, spaceBetween: 10, },
        370: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 1, spaceBetween: 10, },
        960: { slidesPerView: 1, spaceBetween: 10, },
        1260: { slidesPerView: 2, spaceBetween: 10, },
        1600: { slidesPerView: 2, spaceBetween: 10, },
    };
    return (
        <section className='section-videosOfMovie'>
            <h1 className='title-videosOfMovie'>Trails:</h1>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={2}
                navigation
                pagination={{ clickable: true }}
                breakpoints={TrailsOfMovie}
                loop={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='swiper-TrailsMovie'>

                <div className="content-videosOfMovie">
                    {videosOfMovie?.results?.map(trail => (
                        <SwiperSlide key={trail.key} className="video-card">
                            <iframe
                                title={trail.name}
                                width="100%"
                                height="500"
                                border="none"
                                src={`https://www.youtube.com/embed/${trail.key}`}
                                allowFullScreen
                                className='videosOfMovieMp4'></iframe>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </section>
    )
}

export default VideoOfMovieSection