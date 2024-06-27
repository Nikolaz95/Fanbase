import React, { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom';

//import titlen Name component
import TitleName from '../../layout/TitleName/TitleName';

//import css
import "./AllMovies.css";

/* icon */
import { AiOutlineArrowUp } from 'react-icons/ai';
import AddWatchList from "../../../assets/icons/icon-add.png"
import IsOnWatchList from "../../../assets/icons/icon-check.png"
import AddFavoritList from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList2 from "../../../assets/icons/icon-like.png"
import PosterMovie from "../../../assets/pictures/poster2.jpg"
import DropDownCategory from '../../layout/DropDownCategory/DropDownCategory';


const AllMovies = () => {
    const getTitleBasedOnCategory = (category) => {
        switch (category) {
            case 'theaters':
                return 'Now playing in Theatres';
            case 'upcoming':
                return 'Upcoming movies';
            case 'toprated':
                return 'Top Rated Movies';
            default:
                return '';
        }
    };

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [selectedCategory, setSelectedCategory] = useState(queryParams.get('category') || 'theaters');
    /* funckija za dropdown */
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
        setShowDropdown(false);
    };

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getDataRequest = async () => {
            try {
                let link = '';

                if (selectedCategory === 'theaters') {
                    link = `https://api.themoviedb.org/3/movie/now_playing?api_key=d0e15d3cd703e39934833d9dc348e907`;
                } else if (selectedCategory === 'upcoming') {
                    link = `https://api.themoviedb.org/3/movie/upcoming?api_key=d0e15d3cd703e39934833d9dc348e907`;
                } else if (selectedCategory === 'toprated') {
                    link = `https://api.themoviedb.org/3/movie/top_rated?api_key=d0e15d3cd703e39934833d9dc348e907`;
                }

                const response = await fetch(link);
                const jsonData = await response.json();

                setMovies(jsonData.results || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getDataRequest();
    }, [selectedCategory]);


    return (
        <>
            <TitleName title={getTitleBasedOnCategory(selectedCategory)} />
            {/* section category */}
            <DropDownCategory
                getTitleBasedOnCategory={getTitleBasedOnCategory}
                handleCategoryChange={handleCategoryChange}
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
                showDropdown={showDropdown}
                setShowDropdown={setShowDropdown} />
            {/* section category */}

            <main className='Main-allmoviesContentList'>
                <div className="allmovies-content">
                    {movies.map((movie) => (
                        <div key={movie.id} className={`allmovies-card ${selectedCategory}`}>
                            <div className="allmovies-cardtop">
                                <NavLink to={/* `/movies/${movie.id}` */ "#"}>
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className="allmoviesCards-poster" title={movie.title} />
                                </NavLink>
                            </div>
                            <div className="card-bottom">
                                <p className="movieall-name">{movie.title}</p>
                                <p className="movieall-rating">Rating: {movie.vote_average}</p>
                                <div className="movieDetails-buttons">
                                    <button className='favorite-btn'>Add to Favorite<img src={AddFavoritList} alt="" className='icon-favoriteIsFav' /></button>
                                    <button className='watchlist-btn'>Add to Watch list<img src={AddWatchList} alt="" className='icon-watchlistIsOn' /> </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    )
}

export default AllMovies