import React from 'react'

//import css
import "./FavoritListAccount.css"
//import img
import Poster1 from "../../../assets/pictures/poster.jpg"

//import components
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'
import BtnAddWatchList from '../../layout/BtnAddToWatchlist/BtnAddWatchList'
import BtnsAddFavList from '../../layout/BtnAddFavList/BtnsAddFavList'

const WatchListAccount = () => {
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
                                    <BtnAddWatchList />
                                    <BtnsAddFavList />
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
                                    <BtnAddWatchList />
                                    <BtnsAddFavList />
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
                                    <BtnAddWatchList />
                                    <BtnsAddFavList />
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
                                    <BtnAddWatchList />
                                    <BtnsAddFavList />
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
                                    <BtnAddWatchList />
                                    <BtnsAddFavList />
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
                                    <BtnAddWatchList />
                                    <BtnsAddFavList />
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
                                    <BtnAddWatchList />
                                    <BtnsAddFavList />
                                </div>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default WatchListAccount