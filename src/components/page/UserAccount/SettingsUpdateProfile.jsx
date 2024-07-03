import React from 'react'


//import img
import AvatarIcon from "../../../assets/icons/icon2-user.png"

//import css
import "./SettingsUpdateProfile.css"

//import components
import SideBarNavSettings from '../../layout/SideBarSettings/SideBarNavSettings'
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'

const SettingsUpdateProfile = () => {
    return (
        <div className="main-contentProfile">
            <div className="head-AcoutProfile">
                <h1>Update Profile</h1>
            </div>

            <div className="tabs-contentProfile">
                <TabNavAccount />
            </div>

            {/* main content style */}
            <main className='settingsMain-mainContent'>
                {/* style main info right part */}
                <div className="settingsMain-Content">
                    <SideBarNavSettings />
                    {/* odavde pocinej update profile */}
                    <div className="setting-conteinerUpdateProfile">
                        <div className="setting-contentUpdateProfile">
                            <form className="form-content" action="#">
                                <label htmlFor="name_field" className="form-label">Name</label>
                                <input type="text" id="name_field" className="form-control" name="name" />
                                <label htmlFor="email_field" className="form-label">Email:</label>
                                <input type="email" id="email_field" className="form-control" name="email" />
                                <button type="submit" className="updateProfle-btn">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* <div className="setting-updatePicture">
                        <div className="setting-updateCotnainerPicture">
                            <form action="" className='profileUpdate-img'>
                                <img src={AvatarIcon} alt="" className="setting-Profileimg" />
                                <input type="file" name="file" id="file" accept="images/*" />
                                <label htmlFor="file">
                                    <img src={AddCamera} alt="Person" className="addCamera" />
                                </label>


                                <div className="btn-updatePicture">
                                    <button className="buttons-updPicture">
                                        Save picture <img src={UpdatePicture} alt="Person" className="savePicture" />
                                    </button>
                                    <button className="buttons-cancelUpdPic">
                                        Cancel  <img src={CancelUpdPicture} alt="Person" className="cancelUpdPic" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div> */}
                </div>
            </main>
        </div>
    )
}

export default SettingsUpdateProfile