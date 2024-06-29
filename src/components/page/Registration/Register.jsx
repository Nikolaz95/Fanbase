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
            <section className='cr-acc'>

                <h1 className='title-account'>Create Accunt</h1>

                <div className="content-accountcard">
                    <div className="account-card">
                        <form className='form-registering' /* onSubmit={submitHandler} */>
                            <label htmlFor="name">Your Username:</label>
                            <input type="text" name="name" placeholder='username...'
                            /* value={name} */
                            /* onChange={onChange} */
                            />
                            <br />

                            <label htmlFor="mail">Your Emai:</label>
                            <input type="email" name="email" id='mail' placeholder='fake@email.com'
                            /* value={email} */
                            /* onChange={onChange} */
                            />
                            <br />

                            <label htmlFor="pwd">Password :</label>
                            <input type="password" name="password" id='pwd' placeholder='password...'
                            /* value={password} */
                            /* onChange={onChange} */
                            />

                            <div className="btn-login">
                                <button className="create-accBtn" type="submit" /* disabled={isLoading} */>
                                    {/* {isLoading ? "Creating..." : "Create your accunt"} */}
                                    Create your accunt
                                </button>
                            </div>
                        </form>
                    </div>
                    <p>You already have account ?</p>

                    <NavLink to="/singIn" className="singIn">
                        <p>Sing In {/* <FaArrowRight className='arow-singin' /> */}</p>
                    </NavLink>
                </div>
            </section>
        </>
    )
}

export default Register