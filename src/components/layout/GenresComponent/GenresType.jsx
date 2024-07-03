import React from 'react'


//import css
import "./GenresType.css"

//import img
import ActionIcon from "../../../assets/icons/icon-action.png"
import CrimeIcon from "../../../assets/icons/icon-crime.png"
import DramaIcon from "../../../assets/icons/icon-drama.png"
import AdventuresIcon from "../../../assets/icons/icon-adventures.png"
import SciFiIcon from "../../../assets/icons/icon-sciFi.png"
import Comedy from "../../../assets/icons/icon-comedy.png"
import Horor from "../../../assets/icons/icon-horror.png"
import Animation from "../../../assets/icons/icon-animation.png"
import Fanstasy from "../../../assets/icons/icon-fantasy.png"
import Thriller from "../../../assets/icons/icon-thriller.png"
import Romance from "../../../assets/icons/icon-romance.png"
import Family from "../../../assets/icons/icon-family.png"
import ActionAdventure from "../../../assets/icons/icon-combat.png"
import Kids from "../../../assets/icons/icon-kids.png"
import SciFiFantasy from "../../../assets/icons/icon-star-trek-symbol.png"
import WarPolitics from "../../../assets/icons/icon-war-refugee.png"
import Mystery from "../../../assets/icons/icon-detective.png"
import War from "../../../assets/icons/icon-war.png"



// Genre to icon mapping
const genreIcons = {
    12: AdventuresIcon,
    14: Fanstasy,
    16: Animation,
    18: DramaIcon,
    27: Horor,
    28: ActionIcon,
    35: Comedy,
    53: Thriller,
    80: CrimeIcon,
    878: SciFiIcon,
    9648: Mystery,
    10749: Romance,
    10751: Family,
    10752: War,
    10759: ActionAdventure,
    10762: Kids,
    10765: SciFiFantasy,
    10768: WarPolitics,
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