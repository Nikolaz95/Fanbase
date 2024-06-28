import React, { useEffect, useRef } from 'react'

import noImg from '../../../assets/pictures/noimg1.png';

//import css
import "../../layout/SearchBar/SearchResultsList.css";
import { NavLink } from 'react-router-dom';

const SearchResultsList = ({ searchResults }) => {
    return (
        <>
            {searchResults.length > 0 ? (
                <div className="results-list">
                    <div className="search-result">
                        <ul>
                            {searchResults.map((result) => (
                                <li key={result.id}>
                                    <NavLink to={`/movies/${result.id}`}>
                                        <img src={result.poster_path ? `https://image.tmdb.org/t/p/w200${result.poster_path}` : noImg} width={100} height={100} alt={result.title} />
                                    </NavLink>
                                    <div className="search-resultContenta">
                                        <p>{result.title}</p>
                                        <p>{result.vote_average}</p>
                                        <p>{result.release_date ? result.release_date.split('-')[0] : 'N/A'}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="no-results">
                    <ul>
                        <li >
                            <img src={noImg} width={100} height={100} alt="" />
                            <div className="noresults-Contenta">
                                <p>No results found</p>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default SearchResultsList