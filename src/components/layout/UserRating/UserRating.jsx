import React, { useState } from 'react'
import Rating from '@mui/material/Rating';


//import css
import "./UserRating.css"

const UserRating = () => {
    /* rating */
    const [ratingValue, setRatingValue] = useState();
    console.log("You rate movie with", ratingValue)
    return (
        <div className="usersRating">
            <Rating
                precision={0.5}
                max={5}
                value={ratingValue}
                onChange={(event, newValue) => setRatingValue(newValue)}
            />
        </div>
    )
}

export default UserRating