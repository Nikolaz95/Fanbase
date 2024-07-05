import React from 'react'

//import css
import "./BtnRemove.css"

//import img
import Remove from "../../../assets/icons/icons-remove.png"

const BtnRemove = () => {
    return (
        <button className='ReviewButon'>
            <img src={Remove} className='ReviewButon-icon' alt="" />
            Remove
        </button>
    )
}

export default BtnRemove