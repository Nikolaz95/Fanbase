import React from 'react'


//import css
import "./ProfileAccount.css"

//import component
import TitleName from '../../layout/TitleName/TitleName';
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount';


const ProfileAccount = () => {
    return (
        <>
            <TitleName title={"Your Profile"} />


            <div className="main-contentProfile">
                <div className="head-AcoutProfile">
                    <h1>Accoutn Profile</h1>
                </div>

                <div className="tabs-contentProfile">
                    {/* <div className="tabs-navigation"> */}
                    <TabNavAccount />
                    {/* </div> */}
                </div>

                <div className="account-content">
                    <div className="accoutn-profileImg">
                        {/* <img
                            src={user?.avatar ? user?.avatar?.url : avatarDefault} alt={user?.name}
                            className="Profileimg" /> */}
                    </div>

                    <div className="account-info">
                        <h4>User Name:</h4>
                        {/* <p>{user?.name}</p> */}
                        <p>Nikola Zovko</p>

                        <h4>Email Address:</h4>
                        {/* <p>{user?.email}</p> */}
                        <p>niko@gmail.com</p>

                        <h4>Joined On</h4>
                        <p>2024-06-29</p>
                        {/* <p>{user?.createdAt?.substring(0, 10)}</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileAccount