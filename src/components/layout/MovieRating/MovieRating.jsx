import React from 'react'
import PropTypes from 'prop-types';
//import css
import "./MovieRating.css"

const MovieRating = ({ movie }) => {
    const getRatingClass = (rating) => {
        if (rating >= 80) {
            return 'rating-green';
        } else if (rating >= 70) {
            return 'rating-yellow';
        } else if (rating >= 60) {
            return 'rating-orange';
        }
        return 'rating-red';
    };

    const rating = Math.round(movie.vote_average * 10);
    const ratingClass = getRatingClass(rating);

    return (
        <span className='HomePg-rightRating'>
            <p>Rating:</p>
            <span className={`HomePg-ratingCircle ${ratingClass}`}>{rating}</span>
        </span>
    );
};

/* MovieRating.propTypes = {
    movie: PropTypes.shape({
        vote_average: PropTypes.number.isRequired,
    }).isRequired,
}; */



export default MovieRating