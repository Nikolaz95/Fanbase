import React from 'react'


//import img
import Actor from "../../../assets/pictures/Tom-Cruise.jpg"
import AddWatchList from "../../../assets/icons/icon-add.png"
import AddFavorit from "../../../assets/icons/icon-check.png"
import Remove from "../../../assets/icons/icon-cancelPic.png"


//import components
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'
import { NavLink } from 'react-router-dom'

const ActorFavoritAccount = () => {
    return (
        <div>
            <div className="main-contentProfile">
                <div className="head-AcoutProfile">
                    <h1>Your Favorit Actors List</h1>
                </div>
                <div className="tabs-contentProfile">
                    <TabNavAccount />
                </div>

                {/* content */}
                <div className="watchList-content">
                    {/* card pocetak */}
                    <div className="watchList-card">
                        <div className="allmovies-cardtop">
                            <NavLink to="">
                                <img src={Actor} alt="" className="watchList-img" />
                            </NavLink>
                        </div>
                        <div className="watchListcard-bottom">
                            <p className="watchList-name">Mission imposible</p>
                            <p className="watchList-rating">Rating: 2134</p>
                            <button className="watchListicon-favorit"> <img src={AddFavorit} height={30} alt="" />ADD Favorit</button>
                            <div className="btn-addrmv">
                                <button className="watchListadd-btnadd"> <img src={AddWatchList} height={30} alt="" />ADD Wishlist</button>
                                <button className="watchListadd-btnrmv"> <img src={Remove} height={30} alt="" /> Remove</button>
                            </div>
                        </div>
                    </div>
                    {/* one cart design */}
                </div>
            </div>
        </div>
    )
}

export default ActorFavoritAccount