import React from 'react'

//import css
import "./TimeRating.css"

const TimeRating = ({ movieDetails }) => {
    return (
        <div className='MovieDetails-timeDetails'>
            <div className="runTime">
                <p>Runtime:</p>
                <span>{movieDetails?.runtime} min</span>
            </div>
            <div className="MovieDetails-rating">
                <p>Rating:</p>
                <span className="MovieDetails-ratingCircle">{movieDetails?.vote_average}</span>
            </div>
        </div>
    )
}

export default TimeRating