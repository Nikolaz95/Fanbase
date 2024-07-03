import React from 'react'


//import components
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'
import SideBarNavSettings from '../../layout/SideBarSettings/SideBarNavSettings'

const DeleteAccount = () => {
    return (
        <div className="main-contentProfile">
            <div className="head-AcoutProfile">
                <h1>Delete Account</h1>
            </div>
            <div className="tabs-contentProfile">
                <TabNavAccount />
            </div>
            {/* main content style */}
            <main className='settingsMain-mainContent'>
                {/* style main info right part */}
                <div className="settingsMain-Content">
                    <SideBarNavSettings />
                    <div className="setting-contentProfileInfso">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore ratione animi eligendi mollitia necessitatibus deleniti, nihil praesentium aliquam eos?</p>
                        asdsa
                    </div>
                </div>
            </main>

        </div>
    )
}

export default DeleteAccount