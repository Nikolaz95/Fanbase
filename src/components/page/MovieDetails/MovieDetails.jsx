import React, { useEffect, useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';

//import titlen Name component
import TitleName from '../../layout/TitleName/TitleName';
//import css
import "./MovieDetails.css"
//import img
import PosterMovie from "../../../assets/pictures/poster2.jpg"
import BgPosterMovie from "../../../assets/pictures/bg-poster2.jpg"
/* import Mising from "../../assets/pictures/mising-pic.jpg" */
import AddWatchList from "../../../assets/icons/icon-add.png"
import IsOnWatchList from "../../../assets/icons/icon-check.png"
import AddFavoritList from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList2 from "../../../assets/icons/icon-like.png"
import MenuWatch from "../../../assets/icons/icon-menu.png"
import Xclose from "../../../assets/icons/icon-cancelPic.png"
import StrmIcon from "../../../assets/icons/icon-hboMax.png"
import WhereToWatch from '../../layout/ModalWhereToWatch/WhereToWatch';



//import components
/* import MovieRating from '../MovieRating/MovieRating'; */



const MovieDetails = () => {
    //open/close modal
    const [openModal, setOpenModal] = useState(false)
    const menuRef = useRef(null);
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


    /* rating */
    const [ratingValue, setRatingValue] = useState(0);
    console.log("You rate movie with", ratingValue)


    /* fetch data */

    const params = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    /* fetch  recommendations*/
    const [similar, setSimilar] = useState([]);
    /* fetch  credits actors */
    const [credits, setCredits] = useState(null);
    /* fetch  images in movie */
    const [picturesOfMovie, setPicturesOfMovie] = useState([]);
    /* fetch  video from movie */
    const [videosOfMovie, setVideosOfMovie] = useState([]);


    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json()
            setMovieDetails(json);
            console.log(json)
        }

        async function fetchPicturesOfMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/images?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setPicturesOfMovie(json);
        }

        async function fetchVideosOfMovie() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/videos?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setVideosOfMovie(json);
        }

        async function fetchMovieActors() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json();
            setCredits(json);
        }

        async function fetchMovieRecommendations() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=d0e15d3cd703e39934833d9dc348e907`);

            const json = await response.json();
            setSimilar(json.results);
        }

        fetchMovieDetails();
        fetchPicturesOfMovie();
        fetchVideosOfMovie();
        fetchMovieActors();
        fetchMovieRecommendations();
    }, [params.id])



    return (
        <>
            <TitleName title={movieDetails?.original_title} />

            <section className='MovieDetails-section'>

                <div className='MovieDetails-topContent'>
                    <div className="MovieDetails-BgPoster">
                        <img src={movieDetails?.backdrop_path ? `https://www.themoviedb.org/t/p/original/${movieDetails.backdrop_path}` : 'Missing'} alt="" className='MovieDetails-BgPosterImg' />
                    </div>

                    <div className="MovieDetails-PosterContent">
                        <div className="MovieDetails-left">
                            <img src={movieDetails?.backdrop_path ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces/${movieDetails.poster_path}` : "Mising"} className='MovieDetails-PosterImg' />
                            <div className="whereToWatch">
                                <button onClick={onClickOpenModal} className="whereToWatch-btn">Where to watch ?
                                    <img src={MenuWatch} width={40} height={40} alt="" />
                                </button>
                            </div>

                            {/* modal where to watch */}

                            {/* <div className="modal-WhertoWth">
                                <div className="modal-ContentWhertoWth">
                                    <div className="modal-InnerInfo">
                                        <span className="modal-closeX">
                                            <img src={Xclose} width={20} height={20} className='iconX-close' alt="" />
                                        </span>
                                        <div className="modal-left">
                                            <img src={PosterMovie} className='modal-Posterimg' alt="" />
                                        </div>
                                        <div className="modal-right">
                                            <h3>Stream</h3>
                                            <div className="WhertoWthContent">
                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>
                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>
                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>

                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>

                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>
                                            </div>
                                            <h3>Rent</h3>
                                            <div className="WhertoWthContent">
                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>
                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>
                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>

                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>

                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>

                                            </div>

                                            <h3>Buy</h3>
                                            <div className="WhertoWthContent">
                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>
                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>
                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>

                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>

                                                <span>
                                                    <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                                                </span>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {openModal && (
                                <WhereToWatch
                                    onClickCloseModal={onClickCloseModal}
                                    menuRef={menuRef}
                                />
                            )}

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
                                <div className="movieDetails-genres">
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

                                <div className='MovieDetails-releaseDetails'>
                                    {/* <span>Status:<span className="releasedInfo">Released</span></span> */}
                                    <span className='releasedInfo'>
                                        <p>Status:</p>
                                        <span className="releasedInfoCircle">{/* {rating} */} {movieDetails?.status}
                                        </span>
                                    </span>
                                    <span className='releaseDate'>Release :</span>
                                    <span className="releasedDateInfo">
                                        {movieDetails?.release_date}
                                    </span>
                                    {/* <span>Released</span> */}
                                </div>

                                <div className='MovieDetails-timeDetails'>
                                    <span className='runTime'>Runtime: {movieDetails?.runtime} min</span>
                                    {/* <span>149 min</span> */}
                                    <span className='Rating'>
                                        <p>Rating:</p>
                                        <span className="ratingCircle">{/* {rating} */} {movieDetails?.vote_average}</span>
                                    </span>

                                </div>

                            </div>

                            <div className="usersRating">
                                <Rating
                                    precision={0.5}
                                    max={5}
                                    value={ratingValue}
                                    onChange={(event, newValue) => setRatingValue(newValue)}
                                />

                            </div>

                            <div className="MovieDetails-btns">
                                <button>
                                    <img src={AddWatchList} width={25} height={25} alt="" />
                                    Add to Watchlist
                                </button>
                                <button>
                                    <img src={AddFavoritList} width={25} height={25} alt="" />
                                    Add to Favorites
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <main>
                </main>
            </section >
        </>
    )
}

export default MovieDetails