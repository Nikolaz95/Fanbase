import React from 'react'

//import css
import "./ReviewsSection.css"


//import img
import AvatarDefaultImg from "../../../assets/pictures/avatar-profile.jpg"
import Remove from "../../../assets/icons/icons-remove.png"

const ReviewsSection = () => {
    return (
        <section className='section-Reviews'>
            <h1 className='title-Reviews'>Reviews (18)</h1>
            <div className="content-Reviews">
                {/* pocetak kart reviwes */}
                <div className="main-Review">
                    <div className="inner-Review">
                        <div className="innerLeft-Review">
                            <img src={AvatarDefaultImg} alt="" className="icon-Review" />
                        </div>
                        <div className="innerRight-Review">
                            <div className="innerRight-ReviewTop">
                                <div className="innerRight-ReviewButon">
                                    <p>Joe</p>
                                    <p>08-02-2024 21:01:56</p>
                                </div>
                                <div className="innerRight-ReviewButon">
                                    <button className='ReviewButon'> <img src={Remove} className='ReviewButon-icon' alt="" />Remove</button>
                                </div>
                            </div>
                            <div className="innerRight-ReviewBoton">
                                <p>Lorem, ipsum.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, ducimus ab consequatur omnis optio voluptatibus nobis fuga in officia. Facere ad est obcaecati animi! Maiores recusandae a, eaque nostrum ab similique porro! Iste ullam quae consequuntur expedita impedit veniam repellendus libero doloribus fugit. Repudiandae amet ad cupiditate eos deserunt! Fugit?</p>
                            </div>
                        </div>
                    </div>

                    <div className="inner-Review">
                        <div className="innerLeft-Review">
                            <img src={AvatarDefaultImg} alt="" className="icon-Review" />
                        </div>
                        <div className="innerRight-Review">
                            <div className="innerRight-ReviewTop">
                                <div className="innerRight-ReviewButon">
                                    <p>Joe</p>
                                    <p>08-02-2024 21:01:56</p>
                                </div>
                                <div className="innerRight-ReviewButon">
                                    <button className='ReviewButon'> <img src={Remove} className='ReviewButon-icon' alt="" />Remove</button>
                                </div>
                            </div>
                            <div className="innerRight-ReviewBoton">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, ducimus ab consequatur omnis optio voluptatibus nobis fuga in officia. Facere ad est obcaecati animi! Maiores recusandae a, eaque nostrum ab similique porro! Iste ullam quae consequuntur expedita impedit veniam repellendus libero doloribus fugit. Repudiandae amet ad cupiditate eos deserunt! Fugit?</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* KRAj kart reviwes */}
            </div>
        </section>
    )
}

export default ReviewsSection