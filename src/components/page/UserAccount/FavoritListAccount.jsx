import React, { useState } from 'react'
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'
import { NavLink } from 'react-router-dom'
import { Pagination, Stack } from '@mui/material'


//import css
import "./FavoritListAccount.css"

//import img
import Actor from "../../../assets/pictures/Tom-Cruise.jpg"
import Poster1 from "../../../assets/pictures/poster.jpg"

import AddWatchList from "../../../assets/icons/icon-add.png"
import AddFavorit from "../../../assets/icons/icon-check.png"
import Remove from "../../../assets/icons/icon-cancelPic.png"
import BtnAddWatchList from '../../layout/BtnAddToWatchlist/BtnAddWatchList'
import BtnsAddFavList from '../../layout/BtnAddFavList/BtnsAddFavList'

const FavoritListAccount = () => {
    const [currentPage, setCurrentPage] = useState(1);
    console.log("sada je stranica", currentPage);

    return (
        <div>
            <div className="main-contentProfile">
                <div className="head-AcoutProfile">
                    <h1>Your Favorit List</h1>
                </div>
                <div className="tabs-contentProfile">
                    <TabNavAccount />
                </div>

                {/* content  favoritList*/}
                <main className='MovieWatFavlist-mainSection'>
                    <div className='MovieWatFavlist-content'>
                        <ul>
                            {/* 1 */}
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

                            {/* 2 */}
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

                            {/* 3 */}
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

                            {/* 4 */}
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

                            {/* 5 */}
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

                            {/* 6 */}
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

                            {/* 7 */}
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

                            {/* 8 */}
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

                            {/* 9 */}
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


                            {/* 10 */}
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

                            {/* 11 */}
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


                            {/* 12 */}
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


                            {/* 13 */}
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


                            {/* 14 */}
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

                            {/* 15 */}
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
                    {/* <div className="paginationList">
                        <Stack spacing={2}>
                            <Pagination
                                page={currentPage}
                                onChange={(e, newPage) => setCurrentPage(newPage)}
                                count={10}
                                color="primary"
                                variant="outlined"
                                showFirstButton showLastButton />
                        </Stack>
                    </div> */}
                </main>
            </div>
        </div>
    )
}

export default FavoritListAccount