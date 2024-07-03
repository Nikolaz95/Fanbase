import React from 'react'

//import css
import "./UploadPicture.css"

//import img
import AvatarIcon from "../../../assets/icons/icon2-user.png"
import AddCamera from "../../../assets/icons/icons-add-camera.png"
import UpdatePicture from "../../../assets/icons/icon2-user.png"
import CancelUpdPicture from "../../../assets/icons/icon2-user.png"


//import components
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'
import SideBarNavSettings from '../../layout/SideBarSettings/SideBarNavSettings'

const UploadPicture = () => {
    return (
        <div className="main-contentProfile">
            <div className="head-AcoutProfile">
                <h1>Update Picture</h1>
            </div>
            <div className="tabs-contentProfile">
                <TabNavAccount />
            </div>
            {/* main content style */}
            <main className='settingsMain-mainContent'>
                {/* style main info right part */}
                <div className="settingsMain-Content">
                    <SideBarNavSettings />

                    <div className="setting-updatePicture">
                        <div className="setting-updateCotnainerPicture">
                            <form action="" className='setting-profileUpdateImg'>
                                <div className="setting-profileUpdateTop">
                                    <img src={AvatarIcon} alt="" className="setting-Profileimg" />
                                    <input type="file" name="file" id="file" accept="images/*" />
                                    <label htmlFor="file" className='labell'>
                                        <img src={AddCamera} alt="Person" className="addCameraPosition" />
                                    </label>
                                </div>
                                <div className="btns-updatePicture">
                                    <button className="buttons-updPicture">
                                        Save picture <img src={UpdatePicture} alt="Person" className="btns-savePicture" />
                                    </button>
                                    <button className="buttons-cancelUpdPic">
                                        Cancel  <img src={CancelUpdPicture} alt="Person" className="btns-cancelUpdPic" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UploadPicture