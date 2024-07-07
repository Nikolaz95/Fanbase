import React from 'react'
import { NavLink } from 'react-router-dom'


//import css
import "./SideBarNavSettings.css"
//import img
import AvatarIcon from "../../../assets/icons/icon2-user.png"
import UploadImg from "../../../assets/icons/icon-upload.png"
import UpdateProfile from "../../../assets/icons/icon-profile.png"
import UpdatePassword from "../../../assets/icons/icon-update-password.png"
import DeleteAccoutn from "../../../assets/icons/icon-delete-account.png"


const SideBarNavSettings = () => {
    return (
        <div className="settingsProfile-sidebarOptions">
            <ul>
                <li>
                    <NavLink to="/user/settings-Profile">
                        <div className="sidebarOptions-content">
                            <p>Profile Info</p>
                            <img src={AvatarIcon} alt="" width={30} height={30} className='icon-navBar' />
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/user/settings-ProfileUpdate">
                        <div className="sidebarOptions-content">
                            <p>Update Profile</p>
                            <img src={UpdateProfile} alt="" width={30} height={30} className='icon-navBar' />
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/user/settings-UploadPicture">
                        <div className="sidebarOptions-content">
                            <p>Upload Picture</p>
                            <img src={UploadImg} alt="" width={30} height={30} className='icon-navBar' />
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/user/settings-UpdatePassword">
                        <div className="sidebarOptions-content">
                            <p>Update Password</p>
                            <img src={UpdatePassword} alt="" width={30} height={30} className='icon-navBar' />
                        </div>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/user/settings-DeleteAccount">
                        <div className="sidebarOptions-content">
                            <p>Delete account</p>
                            <img src={DeleteAccoutn} alt="" width={30} height={30} className='icon-navBar' />
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideBarNavSettings