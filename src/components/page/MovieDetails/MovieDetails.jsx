import React, { useEffect, useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import { NavLink, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

//import css
import "./MovieDetails.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import img
import PosterMovie from "../../../assets/pictures/poster2.jpg"
import BgPosterMovie from "../../../assets/pictures/bg-poster2.jpg"
import Mising from "../../../assets/pictures/mising-pic.jpg"
import AddWatchList from "../../../assets/icons/icon-add.png"
import IsOnWatchList from "../../../assets/icons/icon-check.png"
import AddFavoritList from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList2 from "../../../assets/icons/icon-like.png"
import MenuWatch from "../../../assets/icons/icon-menu.png"
import Xclose from "../../../assets/icons/icon-cancelPic.png"
import StrmIcon from "../../../assets/icons/icon-hboMax.png"
import WhereToWatch from '../../layout/ModalWhereToWatch/WhereToWatch';

/* icon */
import { MdFavoriteBorder } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";



//import components
import UserRating from '../../layout/UserRating/UserRating';
import GenresType from '../../layout/GenresComponent/GenresType';
import ReleaseDetails from '../../layout/ReleaseDetails/ReleaseDetails';
import TimeRating from '../../layout/TimeRating/TimeRating';
import TitleName from '../../layout/TitleName/TitleName';
import ActorsSection from '../../layout/MovieDetailsComponents/ActorsSection';
import ReviewsSection from '../../layout/MovieDetailsComponents/ReviewsSection';
import VideoOfMovieSection from '../../layout/MovieDetailsComponents/VideoOfMovieSection';
import MoviePictures from '../../layout/MovieDetailsComponents/MoviePictures';
import Recommendation from '../../layout/MovieDetailsComponents/Recommendation';



const MovieDetails = () => {

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

    const breakpoints = {
        320: { slidesPerView: 1, spaceBetween: 10, },
        340: { slidesPerView: 1, spaceBetween: 10, },
        660: { slidesPerView: 2, spaceBetween: 10, },
        960: { slidesPerView: 3, spaceBetween: 10, },
        1260: { slidesPerView: 4, spaceBetween: 10, },
        1600: { slidesPerView: 5, spaceBetween: 10, },
    };


    //open/close modal
    const [openModal, setOpenModal] = useState(false)
    const menuRef = useRef(null);
    const params = useParams();
    const onClickOpenModal = () => {
        setOpenModal(true)
    }
    const onClickCloseModal = () => {
        setOpenModal(false)
    }
    //open/close modal

    /* klick outside to close */
    useEffect(() => {
        const handler = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                onClickCloseModal();
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, []);
    /* klick outside to close */

    /* fetch data */

    /* fetch  movie Details*/
    const [movieDetails, setMovieDetails] = useState(null);
    /* fetch  watchProviders*/
    const [watchProviders, setWatchProviders] = useState(null);
    /* fetch   actors */
    const [actors, setActors] = useState(null);
    /* fetch  video from movie */
    const [videosOfMovie, setVideosOfMovie] = useState([]);
    /* fetch  images in movie */
    const [moviePicture, setPicturesOfMovie] = useState([]);
    /* fetch  recommendations*/
    const [recommendations, setRecommendations] = useState([]);


    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json()
            setMovieDetails(json);
            console.log(json)
        }

        async function fetchMovieActors() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setActors(json);
        }

        async function fetchVideosOfMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setVideosOfMovie(json);
        }

        async function fetchPicturesOfMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/images?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setPicturesOfMovie(json);
        }

        async function fetchMovieRecommendations() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setRecommendations(json.results);
        }

        fetchMovieDetails();
        fetchMovieActors();
        fetchVideosOfMovie();
        fetchPicturesOfMovie();
        fetchMovieRecommendations()
    }, [params.id])



    return (
        <>
            <TitleName title={movieDetails?.original_title} />
            <section className='MovieDetails-section'>
                <div className='MovieDetails-topContent'>
                    <div className="MovieDetails-BgPoster">
                        <img src={movieDetails?.backdrop_path ? `https://www.themoviedb.org/t/p/original/${movieDetails.backdrop_path}` : 'Missing'} alt="" className='MovieDetails-BgPosterImg' />
                    </div>

                </div>
                <div className="MovieDetails-PosterContent">
                    <div className="MovieDetails-left">

                        <img src={movieDetails?.backdrop_path ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces/${movieDetails.poster_path}` : "Mising"} className='MovieDetails-PosterImg' />

                        {/* ovo cemo poslije kad imadnem vremena */}
                        {/* <button onClick={onClickOpenModal} className="whereToWatch-btn">Where to watch ?
                                <img src={MenuWatch} alt="" className="whereToWatch-btnLogo" />
                            </button> */}
                        {/* ovo cemo poslije kad imadnem vremena */}

                        {/* ovo cemo poslije kad imadnem vremena . ovo je info gdje gledat film*/}
                        {/* modal where to watch */}
                        {/* ovo cemo poslije kad imadnem vremena */}
                        {/* {openModal && (
                                <WhereToWatch
                                    onClickCloseModal={onClickCloseModal}
                                    menuRef={menuRef}
                                    watchProviders={watchProviders}
                                    movieDetails={movieDetails}/>
                            )} */}
                        {/* ovo cemo poslije kad imadnem vremena */}
                        {/* modal where to watch */}

                    </div>

                    <div className="MovieDetails-right">
                        <div className="MovieDetails-rightTop">
                            <h1 className="MovieDetails-rightTitle">{movieDetails?.original_title}</h1>
                        </div>
                        <div className="MovieDetails-rightMiddle">
                            <p className="MovieDetails-overWiev">{movieDetails?.overview}</p>
                            <p className="MovieDetails-tagline">"{movieDetails?.tagline}"</p>
                        </div>

                        <div className="MovieDetails-fact">

                            {/* genres */}
                            <GenresType movieDetails={movieDetails} />
                            {/* genres */}

                            {/* releaseDetails */}
                            <ReleaseDetails movieDetails={movieDetails} />
                            {/* releaseDetails */}

                            {/* TimeRating */}
                            <TimeRating movieDetails={movieDetails} />
                            {/* TimeRating */}
                        </div>
                        {/* userRating */}
                        <UserRating />
                        {/* userRating */}
                        <div className="MovieDetails-btns">
                            <button>
                                <img src={AddWatchList} width={20} height={20} alt="" />
                                Add to Watchlist
                            </button>
                            <button>
                                <img src={AddFavoritList} width={20} height={20} alt="" />
                                Add to Favorites
                            </button>
                        </div>
                    </div>
                </div>

                <main className='MovieDetails-otherInfo'>
                    {/* movie REVIEWS */}
                    <ReviewsSection />

                    {/* actors slider */}
                    <ActorsSection actors={actors} />

                    {/* video iz filma */}
                    <VideoOfMovieSection videosOfMovie={videosOfMovie} />

                    {/* slike u filmu */}
                    <MoviePictures moviePicture={moviePicture} />

                    {/* Recommendations */}
                    <Recommendation recommendations={recommendations} />

                </main>
            </section >
        </>
    )
}

export default MovieDetails