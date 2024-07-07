import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

//import css
import "./Register.css"

//import  icon
import Show from "../../../assets/icons/icon-show.png"
import Hide from "../../../assets/icons/icon-hide.png"

//import components
import TitleName from '../../layout/TitleName/TitleName'

const Register = () => {

    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
            <TitleName title={"Register"} />
            <section className='section-createAccount'>

                <h1 className='title-accounts'>Create Accunt</h1>

                <div className="content-registeringAccountCards">
                    <div className="account-registeringCards">
                        <form className='form-registering'>
                            <label htmlFor="name">Your Username:</label>
                            <input type="text" name="name" id='name' className='inputUserName' placeholder='username...' />

                            <label htmlFor="mail">Your Emai:</label>
                            <input type="email" name="email" id='mail' className='inputEmail' placeholder='fake@email.com' />

                            <label htmlFor="pwd">Password :</label>
                            <div className="pasword-contentRegister">
                                <input type={showPassword ? "text" : "password"}
                                    name="password"
                                    id='pwd'
                                    className='inputPwd'
                                    placeholder='password...' />
                                <img
                                    title={showPassword ? "Hide password" : "Show password"}
                                    src={showPassword ? Hide : Show}
                                    onClick={() => setShowPassword(prevState => !prevState)}
                                />
                            </div>

                            <div className="btn-login">
                                <button className="create-accBtn" type="submit">
                                    Create your accunt
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="registerighaveAcc">


                        <p>You already have account ?</p>

                        <NavLink to="/singIn" className="singIn">
                            <button>Sing In </button>
                        </NavLink>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register