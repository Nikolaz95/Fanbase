import React from 'react'

import poster1234 from "../../../assets/pictures/poster1.jpg"
import noImg from '../../../assets/pictures/noimg1.png';

//import css
import "../../layout/SearchBarMobile/SearchMobileResultList.css";
import { NavLink } from 'react-router-dom';

const SearchMobileResultList = ({ searchResults }) => {
    return (
        <>
            {searchResults.length > 0 ? (
                <div className="searchBarMobile-resultsList">
                    <div className="searchBarMobile-searchResult">
                        <ul >
                            {searchResults.map((result) => (
                                <NavLink to={`/movies/${result.id}`}>
                                    <li key={result.id}>
                                        <img src={result.poster_path ? `https://image.tmdb.org/t/p/w200${result.poster_path}` : noImg} className='searchBarMobile-contentImg' />
                                        {/* </NavLink> */}
                                        <div className="searchBarMobile-resultContenta">
                                            <p>{result.title}</p>
                                            <p>{result.vote_average}</p>
                                            <p>{result.release_date ? result.release_date.split('-')[0] : 'N/A'}</p>
                                        </div>
                                    </li>
                                </NavLink>
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

export default SearchMobileResultList