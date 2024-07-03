import React from 'react'
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'
import { NavLink } from 'react-router-dom'


//import css
import "./FavoritListAccount.css"

//import img
import Actor from "../../../assets/pictures/Tom-Cruise.jpg"
import Poster1 from "../../../assets/pictures/poster.jpg"

import AddWatchList from "../../../assets/icons/icon-add.png"
import AddFavorit from "../../../assets/icons/icon-check.png"
import Remove from "../../../assets/icons/icon-cancelPic.png"

const FavoritListAccount = () => {
    return (
        <div>
            <div className="main-contentProfile">
                <div className="head-AcoutProfile">
                    <h1>Your Favorit List</h1>
                    <span className='notfi-WatchList'>2</span>
                </div>
                <div className="tabs-contentProfile">
                    <TabNavAccount />
                </div>

                {/* content  favoritList*/}
                <main className='MovieWatFavlist-mainSection'>
                    <div className='MovieWatFavlist-content'>
                        <ul>
                            <li className='MovieWatFavlist-contentList'>
                                <div className="MovieWatFavlist-posterBox">
                                    <img src={Poster1} alt="" className='MovieWatFavlist-img' />
                                </div>
                                <div className="MovieWatFavlist-details">
                                    <h3>Backt To the Future</h3>
                                    <p>1970</p>
                                    <p>8.45</p>
                                </div>
                                <div className="MovieWatFavlist-addDatum">
                                    <h3>Aded:</h3>
                                    <p>2024-07-02</p>
                                </div>
                                <div className="MovieWatFavlist-btns">
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Watchlist
                                    </button>
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Favorites
                                    </button>
                                </div>
                            </li>

                            <li className='MovieWatFavlist-contentList'>
                                <div className="MovieWatFavlist-posterBox">
                                    <img src={Poster1} alt="" className='MovieWatFavlist-img' />
                                </div>
                                <div className="MovieWatFavlist-details">
                                    <h3>Backt To the Future</h3>
                                    <p>1970</p>
                                    <p>8.45</p>
                                </div>
                                <div className="MovieWatFavlist-addDatum">
                                    <h3>Aded:</h3>
                                    <p>2024-07-02</p>
                                </div>
                                <div className="MovieWatFavlist-btns">
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Watchlist
                                    </button>
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Favorites
                                    </button>
                                </div>
                            </li>


                            <li className='MovieWatFavlist-contentList'>
                                <div className="MovieWatFavlist-posterBox">
                                    <img src={Poster1} alt="" className='MovieWatFavlist-img' />
                                </div>
                                <div className="MovieWatFavlist-details">
                                    <h3>Backt To the Future</h3>
                                    <p>1970</p>
                                    <p>8.45</p>
                                </div>
                                <div className="MovieWatFavlist-addDatum">
                                    <h3>Aded:</h3>
                                    <p>2024-07-02</p>
                                </div>
                                <div className="MovieWatFavlist-btns">
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Watchlist
                                    </button>
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Favorites
                                    </button>
                                </div>
                            </li>


                            <li className='MovieWatFavlist-contentList'>
                                <div className="MovieWatFavlist-posterBox">
                                    <img src={Poster1} alt="" className='MovieWatFavlist-img' />
                                </div>
                                <div className="MovieWatFavlist-details">
                                    <h3>Backt To the Future</h3>
                                    <p>1970</p>
                                    <p>8.45</p>
                                </div>
                                <div className="MovieWatFavlist-addDatum">
                                    <h3>Aded:</h3>
                                    <p>2024-07-02</p>
                                </div>
                                <div className="MovieWatFavlist-btns">
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Watchlist
                                    </button>
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Favorites
                                    </button>
                                </div>
                            </li>

                            <li className='MovieWatFavlist-contentList'>
                                <div className="MovieWatFavlist-posterBox">
                                    <img src={Poster1} alt="" className='MovieWatFavlist-img' />
                                </div>
                                <div className="MovieWatFavlist-details">
                                    <h3>Backt To the Future</h3>
                                    <p>1970</p>
                                    <p>8.45</p>
                                </div>
                                <div className="MovieWatFavlist-addDatum">
                                    <h3>Aded:</h3>
                                    <p>2024-07-02</p>
                                </div>
                                <div className="MovieWatFavlist-btns">
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Watchlist
                                    </button>
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Favorites
                                    </button>
                                </div>
                            </li>


                            <li className='MovieWatFavlist-contentList'>
                                <div className="MovieWatFavlist-posterBox">
                                    <img src={Poster1} alt="" className='MovieWatFavlist-img' />
                                </div>
                                <div className="MovieWatFavlist-details">
                                    <h3>Backt To the Future</h3>
                                    <p>1970</p>
                                    <p>8.45</p>
                                </div>
                                <div className="MovieWatFavlist-addDatum">
                                    <h3>Aded:</h3>
                                    <p>2024-07-02</p>
                                </div>
                                <div className="MovieWatFavlist-btns">
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Watchlist
                                    </button>
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Favorites
                                    </button>
                                </div>
                            </li>


                            <li className='MovieWatFavlist-contentList'>
                                <div className="MovieWatFavlist-posterBox">
                                    <img src={Poster1} alt="" className='MovieWatFavlist-img' />
                                </div>
                                <div className="MovieWatFavlist-details">
                                    <h3>Backt To the Future</h3>
                                    <p>1970</p>
                                    <p>8.45</p>
                                </div>
                                <div className="MovieWatFavlist-addDatum">
                                    <h3>Aded:</h3>
                                    <p>2024-07-02</p>
                                </div>
                                <div className="MovieWatFavlist-btns">
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Watchlist
                                    </button>
                                    <button>
                                        <img src={AddWatchList} width={20} height={20} alt="" />
                                        Add to Favorites
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default FavoritListAccount