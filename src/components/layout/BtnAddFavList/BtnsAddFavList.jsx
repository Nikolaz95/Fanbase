import React, { useState } from 'react'

//import css
import "./BtnsAddFavList.css"

//import img
import AddFavoritList from "../../../assets/icons/not-favoritIcon.png"
import AddFavoritList2 from "../../../assets/icons/icon-like.png"
const BtnsAddFavList = () => {
    const [notFavList, setNotFavList] = useState(false);
    console.log(notFavList);

    const handleClick = () => {
        setNotFavList(!notFavList);
        console.log(!notFavList);
    };
    return (
        <button onClick={handleClick}
            className="add-to-favorites">
            {notFavList ? 'Your Favorite ' : 'Add to Favorites'}
            <img src={notFavList ? AddFavoritList2 : AddFavoritList}
                alt="Watchlist Icon" className='icon-favorit' />
        </button>
    )
}

export default BtnsAddFavList