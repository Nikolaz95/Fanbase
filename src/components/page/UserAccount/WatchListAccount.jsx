import React from 'react'

//import css
import "./WatchListAccount.css"

//import components
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'

//import component

const WatchListAccount = () => {
    return (
        <div>
            <div className="content-WatchList">
                <div className="head-WatchList">
                    <h1>Your Watch List</h1>
                    <span className='notfi-WatchList'>2</span>
                </div>
                <div className="tabs-contentProfile">
                    <TabNavAccount />
                </div>
            </div>
        </div>
    )
}

export default WatchListAccount