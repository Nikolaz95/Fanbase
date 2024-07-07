import React from 'react'
import { NavLink } from 'react-router-dom';

//import css
import "./SettingsProfileAccount.css"

//import img
import AvatarIcon from "../../../assets/icons/icon2-user.png"

//import components
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'
import SideBarNavSettings from '../../layout/SideBarSettings/SideBarNavSettings';

const SettingsProfileAccount = () => {
    return (
        <div>
            <div className="main-contentProfile">
                <div className="head-AcoutProfile">
                    <h1>Profile Info</h1>
                </div>
                <div className="tabs-contentProfile">
                    <TabNavAccount />
                </div>
                {/* main content style */}
                <main className='settingsMain-mainContent'>
                    {/* style main info right part */}
                    <div className="settingsMain-Content">
                        <SideBarNavSettings />

                        {/* odavde pocinje */}
                        <div className="setting-conteinerProfileInfo">
                            <div className="setting-contentProfileInfo">
                                <div className="setting-profilePicture">
                                    <img src={AvatarIcon} className="setting-profileImg" title='Your Profil picture' />
                                    <div className="setting-profileInfo">
                                        <h4>Full Name</h4>
                                        <p>nikola</p>
                                        <h4>Email Address</h4>
                                        <p>n@agsgas</p>
                                        <h4>Joined On</h4>
                                        <p>2024-07-02</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default SettingsProfileAccount