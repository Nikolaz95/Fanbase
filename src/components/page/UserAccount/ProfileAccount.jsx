import React from 'react'


//import css
import "./ProfileAccount.css"

//import component
import TitleName from '../../layout/TitleName/TitleName';
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount';

//import img
import AvatarIcon from "../../../assets/icons/icon2-user.png"


const ProfileAccount = () => {
    return (
        <>
            <TitleName title={"Your Profile"} />


            {/* <div className="main-contentProfile"> */}
            {/* <div className="account-content">
                <div className="accoutn-profileImg">
                    <img src={AvatarIcon} alt="" className='Profileimg' />
                </div>

                <div className="account-info">
                    <h4>User Name:</h4>
                    <p>Nikola Zovko</p>

                    <h4>Email Address:</h4>
                    <p>niko@gmail.com</p>

                    <h4>Joined On</h4>
                    <p>2024-06-29</p>
                </div>
            </div> */}
            {/* </div> */}
        </>
    )
}

export default ProfileAccount