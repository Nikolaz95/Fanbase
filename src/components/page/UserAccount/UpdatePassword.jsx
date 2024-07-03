import React from 'react'


//import components
import SideBarNavSettings from '../../layout/SideBarSettings/SideBarNavSettings'
import TabNavAccount from '../../layout/TabNavigationAccount/TabNavAccount'

const UpdatePassword = () => {
    return (
        <div className="main-contentProfile">
            <div className="head-AcoutProfile">
                <h1>Update Password</h1>
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
                                <label htmlFor="name_field" className="form-label">Old Password:</label>
                                <input type="text" id="name_field" className="form-control" name="name" />
                                <label htmlFor="email_field" className="form-label">New Password:</label>
                                <input type="email" id="email_field" className="form-control" name="email" />
                                <button type="submit" className="updateProfle-btn">
                                    Update PAssword
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UpdatePassword