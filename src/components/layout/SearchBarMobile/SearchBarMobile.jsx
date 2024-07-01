import React, { useEffect, useRef, useState } from 'react'

import Search from "../../../assets/icons/icon-search.png";
import CloseSearch from "../../../assets/icons/icon-cancelPic.png";


//import css
import "../../layout/SearchBarMobile/SearchBarMobile.css";
import SearchMobileResultList from './SearchMobileResultList';

const SearchBarMobile = ({ onSearchToggle }) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [showInput, setShowInput] = useState(false);

    const searchRef = useRef(null);
    const apiKey = 'd0e15d3cd703e39934833d9dc348e907';
    const apiUrlMovie = 'https://api.themoviedb.org/3/search/movie';

    const onClickShowInput = () => {
        setShowInput((prevShowInput) => !prevShowInput);
        if (showInput) {
            setIsSearchActive(false);
            setSearchValue('');
            onSearchToggle(false); // Notify parent to show logo
        } else {
            onSearchToggle(true); // Notify parent to hide logo
        }
    };

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
        <div className="searchBarMobile-container">
            <div className="searchBarMobile-wrapper" ref={searchRef}>
                <div className="searchBarMobile-content">
                    <form className="searchBarMobile-form">
                        {showInput && (
                            <input
                                className='searchBarMobile-input'
                                type="text"
                                placeholder='Search for the Movies, TvShow, Actors...'
                                value={searchValue}
                                onFocus={() => setIsSearchActive(true)}
                                onChange={(e) => setSearchValue(e.target.value)} />
                        )}
                    </form>
                    <img
                        src={showInput ? CloseSearch : Search}
                        onClick={onClickShowInput}
                        alt=""
                        className="searchBarMobile-icon"
                    />
                </div>
                {isSearchActive && searchValue && (
                    <SearchMobileResultList searchResults={searchResults}
                    />
                )}
            </div>
        </div>
    )
}

export default SearchBarMobile