import React from 'react'


//import css
import "./BtnDeleteAcc.css"

//import img
import DeleteAccoutn from "../../../assets/icons/icon-delete-account.png"


const BtnDeleteAcc = ({ onClickOpenModal }) => {

    return (
        <button onClick={onClickOpenModal}>
            Delete Account
            <img src={DeleteAccoutn} alt="" className='icon-deleteAccount' />
        </button>
    )
}

export default BtnDeleteAcc