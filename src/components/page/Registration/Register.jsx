import React from 'react'

//import css
import "./Register.css"

//import components
import TitleName from '../../layout/TitleName/TitleName'
import { NavLink } from 'react-router-dom'

const Register = () => {
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
                            <input type="password" name="password" id='pwd' className='inputPwd' placeholder='password...' />

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