import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";

//import img

import Search from "../../../assets/icons/icon-search.png";
/* import Search from '../../../assets/icon/icon-search.png'; */

//import css
import "../../layout/SearchBar/SearchBar.css";

//import components
import SearchResultsList from './SearchResultsList';

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const searchRef = useRef(null);

    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiUrlMovie = 'https://api.themoviedb.org/3/search/movie';

    /* fetch */
    useEffect(() => {
        // Function to make the API request
        console.log('API URL:', apiUrlMovie);
        console.log('API Key:', apiKey);
        console.log('Search:', searchValue);
        const searchMovies = async () => {
            try {
                const response = await fetch(`${apiUrlMovie}?api_key=${apiKey}&query=${searchValue}`);
                if (response.ok) {
                    const data = await response.json();
                    setSearchResults(data.results);
                    console.log(data);
                } else {
                    console.error('Error fetching data from TMDB API:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching data from TMDB API: ', error);
            }
        };

        // Call the searchMovies function whenever searchValue changes
        searchMovies();
    }, [searchValue]);


    /* clcik outside seacrh list */
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchActive(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="searchBar-container">
            <div className="searchbar-wrapper" ref={searchRef}>
                <div className="searchbar-content" >
                    <form className='serch-form'>
                        <input className='search-input'
                            type="text"
                            value={searchValue}
                            onFocus={() => setIsSearchActive(true)}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder='Search for the Movies, TvShow, Actors...'
                        />
                        <img src={Search} height={30} width={30} alt="" id="search-icon" />
                    </form>
                </div>

                {isSearchActive && searchValue && (
                    <SearchResultsList searchResults={searchResults} />
                )}
            </div>
        </div>
    )
}

export default SearchBar