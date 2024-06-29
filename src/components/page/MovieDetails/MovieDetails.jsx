import React, { useEffect, useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import { useParams } from 'react-router-dom';

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
import UserRating from '../../layout/UserRating/UserRating';
import GenresType from '../../layout/GenresComponent/GenresType';
import ReleaseDetails from '../../layout/ReleaseDetails/ReleaseDetails';
import TimeRating from '../../layout/TimeRating/TimeRating';
import TitleName from '../../layout/TitleName/TitleName';



const MovieDetails = () => {
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



    useEffect(() => {
        async function fetchMovieDetails() {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d0e15d3cd703e39934833d9dc348e907`);
            const json = await response.json()
            setMovieDetails(json);
            console.log(json)
        }
        fetchMovieDetails();
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
                            <GenresType />
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
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias porro ut dolorum exercitationem omnis repellendus dolores at pariatur eum alias quisquam ab, eius, aut dolor! Provident vel autem mollitia fuga.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos harum sapiente ipsam impedit nam illum itaque hic alias enim velit voluptate natus, consequatur fuga placeat vel! Rerum a voluptatibus, ut, consectetur explicabo neque at molestias beatae quos, perspiciatis unde nihil! Incidunt repudiandae et laborum unde placeat, deserunt est odio autem exercitationem repellat nulla aliquam? Praesentium facere omnis exercitationem rerum repellat natus est doloremque nisi accusamus. Dolore autem rerum eum necessitatibus officiis alias quasi error dolorem est nihil, ut reiciendis ipsa consectetur id ab odio atque aliquid? Rem quas nemo neque animi ipsam modi dolorem! Tempore assumenda odit dignissimos pariatur cupiditate repudiandae, hic illum delectus iure sunt eos nisi quidem alias corporis ex. Nulla doloribus commodi sit nostrum, odit labore, illo natus enim repellat rerum repudiandae autem similique. Natus blanditiis tenetur totam ullam fuga debitis maxime non, quisquam modi iure nesciunt laboriosam in, officiis eos eveniet. Porro nobis velit veritatis dicta minus, totam eius necessitatibus maiores provident impedit libero. Ab ut minus, pariatur harum autem ratione nulla saepe? Dolores velit blanditiis sequi rem, nulla optio dolorum numquam culpa tempore accusantium perspiciatis aliquid modi eaque beatae assumenda autem deserunt asperiores. Quas eligendi consequuntur ex? Assumenda voluptatum atque at voluptates, iste temporibus cumque vero quasi fugit labore laudantium ullam molestiae optio dicta excepturi a quam impedit suscipit adipisci velit? Eaque soluta repellendus obcaecati dolorum dolore suscipit quaerat, consequatur, cumque deleniti hic ea voluptate voluptatem fugiat quidem ipsa quod eos atque earum dignissimos incidunt modi quos. Inventore minima necessitatibus fugit eaque ipsa tenetur laborum quisquam delectus culpa mollitia molestiae excepturi eum ex unde in sapiente perferendis eveniet, asperiores quibusdam et aliquam! Neque, rem esse repellat necessitatibus voluptatibus reiciendis, debitis odio error odit doloribus illo ut voluptate maxime ipsa iste? Quaerat, magnam voluptatem veniam similique hic rem beatae fugiat adipisci laborum laboriosam vero repudiandae earum!</p>
                    </div>
                </main>

                <main>
                    <div>
                        <p>2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias porro ut dolorum exercitationem omnis repellendus dolores at pariatur eum alias quisquam ab, eius, aut dolor! Provident vel autem mollitia fuga.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos harum sapiente ipsam impedit nam illum itaque hic alias enim velit voluptate natus, consequatur fuga placeat vel! Rerum a voluptatibus, ut, consectetur explicabo neque at molestias beatae quos, perspiciatis unde nihil! Incidunt repudiandae et laborum unde placeat, deserunt est odio autem exercitationem repellat nulla aliquam? Praesentium facere omnis exercitationem rerum repellat natus est doloremque nisi accusamus. Dolore autem rerum eum necessitatibus officiis alias quasi error dolorem est nihil, ut reiciendis ipsa consectetur id ab odio atque aliquid? Rem quas nemo neque animi ipsam modi dolorem! Tempore assumenda odit dignissimos pariatur cupiditate repudiandae, hic illum delectus iure sunt eos nisi quidem alias corporis ex. Nulla doloribus commodi sit nostrum, odit labore, illo natus enim repellat rerum repudiandae autem similique. Natus blanditiis tenetur totam ullam fuga debitis maxime non, quisquam modi iure nesciunt laboriosam in, officiis eos eveniet. Porro nobis velit veritatis dicta minus, totam eius necessitatibus maiores provident impedit libero. Ab ut minus, pariatur harum autem ratione nulla saepe? Dolores velit blanditiis sequi rem, nulla optio dolorum numquam culpa tempore accusantium perspiciatis aliquid modi eaque beatae assumenda autem deserunt asperiores. Quas eligendi consequuntur ex? Assumenda voluptatum atque at voluptates, iste temporibus cumque vero quasi fugit labore laudantium ullam molestiae optio dicta excepturi a quam impedit suscipit adipisci velit? Eaque soluta repellendus obcaecati dolorum dolore suscipit quaerat, consequatur, cumque deleniti hic ea voluptate voluptatem fugiat quidem ipsa quod eos atque earum dignissimos incidunt modi quos. Inventore minima necessitatibus fugit eaque ipsa tenetur laborum quisquam delectus culpa mollitia molestiae excepturi eum ex unde in sapiente perferendis eveniet, asperiores quibusdam et aliquam! Neque, rem esse repellat necessitatibus voluptatibus reiciendis, debitis odio error odit doloribus illo ut voluptate maxime ipsa iste? Quaerat, magnam voluptatem veniam similique hic rem beatae fugiat adipisci laborum laboriosam vero repudiandae earum!</p>
                    </div>
                </main>
            </section >
        </>
    )
}

export default MovieDetails