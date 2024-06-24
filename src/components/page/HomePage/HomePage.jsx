import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* import './styles.css'; */
//import css
import "../../page/HomePage/HomePage.css";

// Import images
import poster1 from '../../../assets/pictures/poster1.jpg';
import Bgposter1 from '../../../assets/pictures/bg-poster1.jpg';
import poster2 from '../../../assets/pictures/poster2.jpg';
import Bgposter2 from '../../../assets/pictures/bg-poster2.jpg';
import poster3 from '../../../assets/pictures/poster3.jpg';
import Bgposter3 from '../../../assets/pictures/bg-poster3.jpg';
import poster4 from '../../../assets/pictures/poster4.jpg';
import Bgposter4 from '../../../assets/pictures/bg-poster4.jpg';

const HomePage = () => {
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
                                            <h1 className="HomePg-rightTitle">{movie.title} ({new Date(movie.release_date).getFullYear()})</h1>
                                        </div>
                                        <div className="HomePg-rightMiddle">
                                            <p className="HomePg-overWiev">
                                                {movie.overview}
                                            </p>
                                        </div>
                                        <div className="HomePg-rightBottom">
                                            {/* <div className="HomePg-facts"> */}
                                            <span className='HomePg-releaseDate'><p>{movie.release_date}</p></span>
                                            <span className='HomePg-rightRating'><p>Rating:</p><span className='HomePg-ratingCircle'>{Math.round(movie.vote_average * 10)}</span></span>
                                            {/* </div> */}
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

            <div className="tekstdalje">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum doloribus iusto recusandae quibusdam dolorum, rerum nostrum? Deleniti culpa beatae odit eveniet sunt consequuntur vero repellat tenetur asperiores alias veniam labore doloribus, aperiam est fuga iste quod voluptas placeat harum aliquam! Cum, provident culpa. Quia minima ipsum pariatur ab magni minus non illo dolor saepe quas? Consequatur doloribus quod quisquam labore molestias. Eligendi quisquam, error laborum eveniet, vero quos nostrum, expedita ratione tenetur labore sapiente! Expedita quibusdam ipsa commodi ex vitae aspernatur cum impedit iure eius, nisi veniam soluta iusto dolorem labore. Amet suscipit earum asperiores odio incidunt quam alias eius tempore iste voluptatibus eos quod, eveniet quae ipsum eum culpa accusantium aperiam quo aliquam nesciunt facere? Quis dicta labore amet cum, iure vero vitae maiores, debitis ullam natus aliquam. Magnam, autem optio tempore ea natus nulla tempora harum laudantium aut voluptatibus error iste itaque amet, obcaecati labore reiciendis cum voluptas mollitia repellat. Incidunt provident tempore reiciendis quaerat, dicta saepe labore ullam qui, sint eos a illo aperiam esse quidem in harum ipsum impedit error, eveniet obcaecati fugiat quasi. Voluptatibus incidunt eos harum. Minus, aliquam officia deserunt dolor quam aliquid modi iusto inventore assumenda similique harum neque consectetur, delectus architecto. Autem!</p>
            </div>
        </>
    )
}

export default HomePage