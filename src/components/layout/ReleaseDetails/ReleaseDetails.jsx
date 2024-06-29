import React from 'react'

//import css
import "./ReleaseDetails.css"

const ReleaseDetails = ({ movieDetails }) => {
    return (
        <div className='MovieDetails-releaseDetails'>
            <div className='releasedStatusInfo'>
                <p>Status:</p>
                <span className='statusCircle'>{movieDetails?.status}</span>
            </div>

            <div className='releasedDateInfo'>
                <p>Datum:</p>
                <span className="releasedInfoCircle">{movieDetails?.release_date} </span>
            </div>
        </div>
    )
}

export default ReleaseDetails