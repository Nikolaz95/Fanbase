import React from 'react'


//import css
import "./GenresType.css"

//import img
import ActionIcon from "../../../assets/icons/icon-action.png"
import CrimeIcon from "../../../assets/icons/icon-crime.png"
import DramaIcon from "../../../assets/icons/icon-drama.png"
import AdventuresIcon from "../../../assets/icons/icon-adventures.png"
import SciFiIcon from "../../../assets/icons/icon-sciFi.png"


// Genre to icon mapping
const genreIcons = {
    12: AdventuresIcon,
    18: DramaIcon,
    27: "horor",
    28: ActionIcon,
    53: "Thriller",
    80: CrimeIcon,
    878: SciFiIcon,
};


const GenresType = ({ movieDetails }) => {
    return (
        <div className="movieDetails-genres">
            {movieDetails?.genres.map((genre) => (
                <div className="movieDetails-genresContent" key={genre.id}>
                    <p className='genresText'>{genre.name}</p>
                    <img src={genreIcons[genre.id]} className='genresImg' alt="" />
                </div>
            ))}
        </div>
    )
}

export default GenresType