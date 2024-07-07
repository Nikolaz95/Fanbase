import React, { useState } from 'react'

//import css
import "./BtnAddWatchList.css"

//import img
import AddWatchList from "../../../assets/icons/icon-add.png"
import IsOnWatchList from "../../../assets/icons/icon-check.png"

const BtnAddWatchList = () => {
    const [notOnWatchList, setNotOnWatchList] = useState(false);

    const handleClick = () => {
        setNotOnWatchList(!notOnWatchList);
    };

    return (

        <button onClick={handleClick}
            className="add-to-watchlist"
            title='Add to Watchlist'>
            {notOnWatchList ? 'On Your List' : 'Add to Watchlist'}
            <img src={notOnWatchList ? IsOnWatchList : AddWatchList}
                alt="Watchlist Icon" className='icon-add' />
        </button>
    )
}

export default BtnAddWatchList