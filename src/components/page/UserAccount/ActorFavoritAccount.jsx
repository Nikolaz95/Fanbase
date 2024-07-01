import React from 'react'
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'

const ActorFavoritAccount = () => {
    return (
        <div>
            <div className="content-WatchList">
                <div className="head-WatchList">
                    <h1>Your Favorit List</h1>
                    <span className='notfi-WatchList'>2</span>
                </div>
                <div className="tabs-contentProfile">
                    <TabNavAccount />
                </div>
            </div>
        </div>
    )
}

export default ActorFavoritAccount