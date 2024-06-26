import React from 'react'
import { NavLink } from 'react-router-dom'


//import css
import "./SingIn.css"


//import components
import TitleName from '../../layout/TitleName/TitleName'

const SingIn = () => {
    return (
        <>
            <TitleName title={"Sing in"} />
            <section className="registering-section">

                <h1 className='title-registering'>Sign in</h1>
                <div className="card-registering">

                    <div className="lef-registering">
                        <form className='form-registering' /* onSubmit={submitHandler} */>
                            <label htmlFor="mail">Your Email:</label>
                            <input type="email" id='mail' placeholder='fake@email...'
                            /* value={email} */
                            /* onChange={(e) => setEmail(e.target.value)} */
                            />


                            <label htmlFor="pwd">Password :</label>
                            <div className="pasword-content">
                                <input /* type={showPassword ? "text" : "password"} id='pwd' placeholder='password...'
                                    value={password} */
                                /* onChange={(e) => setPassword(e.target.value)} */
                                />
                                {/* <img
                                    title={showPassword ? "Hide password" : "Show password"}
                                    src={showPassword ? Hide : Show}
                                    onClick={() => setShowPassword(prevState => !prevState)}
                                /> */}
                            </div>

                            <div className="btn-login">
                                <button type="submit" className="login" /* disabled={isLoading} */>
                                    <p>Log in</p>
                                    {/* {isLoading ? "Authenticating..." : "Log in"} */}
                                </button>
                            </div>
                        </form>


                        <div className="divider-text">
                            <span>Or:</span>
                        </div>


                        <NavLink to="/registration">
                            <div className="btn-registering">
                                <button className="create-acc">Create a New Accoutn</button>
                            </div>
                        </NavLink>

                    </div>

                    <div className="right-registering">
                        <h1 className="registering-title">Benefits of your free  account</h1>
                        <p>Personalized Recommendations</p>

                        <h1 className="registering-title">Your Watchlist</h1>
                        <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>

                        <h1 className="registering-title">Your Favorit list</h1>
                        <p>Track everything you want to watch and receive e-mail when movies open in theaters.</p>
                    </div>
                </div>


            </section>
        </>

    )
}

export default SingIn