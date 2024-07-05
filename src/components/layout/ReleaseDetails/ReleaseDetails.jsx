import React from 'react'

//import css
import "./ReleaseDetails.css"

const ReleaseDetails = ({ movieDetails }) => {
    const getStatusClass = (status) => {
        switch (status) {
            case 'Released':
                return 'statusCircle released';
            case 'In Production':
                return 'statusCircle inProduction';
            default:
                return 'statusCircle';
        }
    };
    return (
        <div className='MovieDetails-releaseDetails'>
            <div className='releasedStatusInfo'>
                <p>Status:</p>
                <span className={getStatusClass(movieDetails?.status)}>
                    {movieDetails?.status}
                </span>
            </div>

            <div className='releasedDateInfo'>
                <p>Datum:</p>
                <span className="releasedInfoCircle">{movieDetails?.release_date} </span>
            </div>
        </div>
    )
}

export default ReleaseDetails