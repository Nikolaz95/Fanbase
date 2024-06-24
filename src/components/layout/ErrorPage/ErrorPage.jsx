import React from 'react'

import Eror from "../../../assets/icons/icon-error.png"


//import css
import "../../layout/ErrorPage/ErrorPage.css";

const ErrorPage = () => {
    return (
        <>
            {/* <MetaData title={"Eror 404"} /> */}
            <div className="eror-content">

                <div className="main-content">
                    <img src={Eror} alt="" className='img-eror' />
                    <p className='text-eror vibrate-1'>This page not exist</p>
                    <img src={Eror} alt="" className='img-eror' />
                </div>


            </div>
        </>
    )
}

export default ErrorPage