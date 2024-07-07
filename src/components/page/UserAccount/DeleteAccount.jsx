import React, { useState } from 'react'


//import css
import "./DeleteAccount.css"

//import img
import AvatarIcon from "../../../assets/icons/icon2-user.png"
import DeleteAccoutn from "../../../assets/icons/icon-delete-account.png"
import ConfirDeleteAccoutn from "../../../assets/icons/icon-confirm.png"
import CancelDeleteAccoutn from "../../../assets/icons/icon-cancelPic.png"

//import components
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'
import SideBarNavSettings from '../../layout/SideBarSettings/SideBarNavSettings'
import BtnDeleteAcc from '../../layout/BtnDeleteAcc/BtnDeleteAcc'

const DeleteAccount = () => {
    const [closeModalDelAcc, setCloseModalDelAcc] = useState(false);

    const onClickOpenModal = () => {
        setCloseModalDelAcc(true)
    }

    const onClickCloseModal = () => {
        setCloseModalDelAcc(false)
    }
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


                    <div className="setting-deleteContent">
                        <div className="settingDeleteInfo">
                            <div className="setting-profileDeleteTop">
                                <img src={AvatarIcon} className="setting-profileDeleteImg" title='Your Profil picture' />
                            </div>
                            <div className="setting-profileDeleteBotom">
                                <h4>Full Name</h4>
                                <p>nikola</p>
                                <h4>Email Address</h4>
                                <p>n@agsgas</p>
                                <h4>Joined On</h4>
                                <p>2024-07-02</p>
                            </div>
                            <div className="setting-profileDeleteBtns">
                                <BtnDeleteAcc
                                    onClickOpenModal={onClickOpenModal} />
                            </div>

                        </div>
                        {/* modal */}
                        {closeModalDelAcc && (
                            <div className="modal-ContentConfirmDeleteAcc">
                                <div className="modal-InnerInfoConfirmDeleteAcc">
                                    <div className="modalInnerDeleteContent">
                                        <div className="modalTopDeleteContent">
                                            <p>Do You Realy wanna delete your Account ?</p>
                                        </div>
                                        <div className="modalBotomDeleteContent">
                                            <button>Yes <img src={ConfirDeleteAccoutn} alt="" className='icon-ConfirdeleteAccount' /></button>
                                            <button onClick={onClickCloseModal}>No <img src={CancelDeleteAccoutn} alt="" className='icon-CanceldeleteAccount' /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* modal */}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default DeleteAccount