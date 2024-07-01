import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

//import css
import "./TabNavAccount.css"

//import icons
import Profile from "../../../assets/icons/icons-customer.png"
import AddWatchList from "../../../assets/icons/icon-add.png"
import AddFavorit from "../../../assets/icons/icons-favorite.png"
import Rating from "../../../assets/icons/icons-star.png"
import ActorFavorit from "../../../assets/icons/icons-actor.png"
import Settings from "../../../assets/icons/icons-gear.png"


//import component
import TitleName from '../../layout/TitleName/TitleName';

const TabNavAccount = () => {
    const getTitleBasedOnActiveTab = (tab) => {
        switch (tab) {
            case 'Profile':
                return 'Account Profile';
            case 'YourWatchList':
                return 'Your Watch List';
            case 'YourFavoritList':
                return 'Your Favorit List';
            case 'YourRatings':
                return 'Your Ratings List';
            case 'FavoritActor':
                return 'Your Favorite Actors List';
            case 'Settings':
                return 'Profile Settings';
            default:
                return '';
        }
    };

    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        document.title = getTitleBasedOnActiveTab(activeTab) + ' - Movie Lovers';
    }, [activeTab]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    return (
        <>
            <TitleName title={getTitleBasedOnActiveTab(activeTab)} />

            <div className="tabs-navigation">

                <ul className='navbar-content'>
                    <li className={activeTab === 'Profile' ? 'active' : ''}>
                        <NavLink to="/user/profile" onClick={() => handleTabClick('Profile')} >
                            <span className='icon'><img src={Profile} height={30} alt="" /></span>
                            <span className='text'>Profile</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'YourWatchList' ? 'active' : ''}>
                        <NavLink to="/user/watchList" onClick={() => handleTabClick('YourWatchList')} >
                            <span className='icon'><img src={AddWatchList} height={30} alt="" /></span>
                            <span className='text'>Your Watch List</span>
                            <span className='notification'>2</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'YourFavoritList' ? 'active' : ''}>
                        <NavLink to="/user/favoritList" onClick={() => handleTabClick('YourFavoritList')}>
                            <span className='icon'><img src={AddFavorit} height={30} alt="" /></span>
                            <span className='text'>Your Favorit List</span>
                            <span className='notification'>2</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'YourRatings' ? 'active' : ''}>
                        <NavLink to="/user/ratingList" onClick={() => handleTabClick('YourRatings')}>
                            <span className='icon'><img src={Rating} height={30} alt="" /></span>
                            <span className='text'>Your Ratings</span>
                            <span className='notification'>2</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'FavoritActor' ? 'active' : ''}>
                        <NavLink to="/user/favoritActor" onClick={() => handleTabClick('FavoritActor')}>
                            <span className='icon'><img src={ActorFavorit} height={30} alt="" /></span>
                            <span className='text'>Favorit Actor</span>
                            <span className='notification'>2</span>
                        </NavLink>
                    </li>
                    <li className={activeTab === 'Settings' ? 'active' : ''}>
                        <NavLink to="/user/settings" onClick={() => handleTabClick('Settings')}>
                            <span className='icon'><img src={Settings} height={30} alt="" /></span>
                            <span className='text'>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default TabNavAccount