import React, { useState } from 'react'



//import img
import Xclose from "../../../assets/icons/icon-cancelPic.png"
import StrmIcon from "../../../assets/icons/icon-hboMax.png"
import PosterMovie from "../../../assets/pictures/poster2.jpg"

//import css
import "./WhereToWatch.css"

const WhereToWatch = ({ onClickCloseModal, menuRef, watchProviders, movieDetails }) => {
    return (

        <div className="modal-WhertoWth" >
            <div className="modal-ContentWhertoWth" ref={menuRef}>
                <div className="modal-InnerInfo">
                    <span className="modal-closeX" onClick={onClickCloseModal}>
                        <img src={Xclose} width={20} height={20} className='iconX-close' alt="" />
                    </span>
                    <div className="modal-left">
                        <img src={movieDetails?.backdrop_path ? `https://www.themoviedb.org/t/p/w300_and_h450_multi_faces/${movieDetails.poster_path}` : "Mising"} className='modal-Posterimg' alt="" />
                    </div>
                    <div className="modal-right">
                        <h3>Stream</h3>
                        <div className="WhertoWthContent">
                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>
                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>
                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>

                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>

                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>
                        </div>

                        <h3>Rent</h3>
                        <div className="WhertoWthContent">
                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>
                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>
                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>

                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>

                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>

                        </div>

                        <h3>Buy</h3>
                        <div className="WhertoWthContent">
                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>
                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>
                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>

                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>

                            <span>
                                <img src={StrmIcon} title='Strem on Hbo' alt="" className='Modal-strIcon' />
                            </span>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhereToWatch