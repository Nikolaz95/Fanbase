import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './components/Root.jsx';
import ErrorPage from './components/layout/ErrorPage/ErrorPage.jsx';
import HomePage from './components/page/HomePage/HomePage.jsx';
import AllMovies from './components/page/AllMovies/AllMovies.jsx';
import MovieDetails from './components/page/MovieDetails/MovieDetails.jsx';
import SingIn from './components/page/SingIn/SingIn.jsx';
import Register from './components/page/Registration/Register.jsx';
import ProfileAccount from './components/page/UserAccount/ProfileAccount.jsx';
import WatchListAccount from './components/page/UserAccount/WatchListAccount.jsx';
import FavoritListAccount from './components/page/UserAccount/FavoritListAccount.jsx';
import RatingListAccount from './components/page/UserAccount/RatingListAccount.jsx';
import ActorFavoritAccount from './components/page/UserAccount/ActorFavoritAccount.jsx';
import SettingsProfileAccount from './components/page/UserAccount/SettingsProfileAccount.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/movies",
        element: <AllMovies />
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />
      },

      {
        path: "/singIn",
        element: <SingIn />
      },

      {
        path: "/registration",
        element: <Register />
      },
      /* profile Account */

      {
        path: "/user/profile",
        element: <ProfileAccount />
      },

      {
        path: "/user/watchList",
        element:
          <WatchListAccount />
      },

      {
        path: "/user/favoritList",
        element:
          <FavoritListAccount />
      },

      {
        path: "/user/ratingList",
        element: <RatingListAccount />
      },
      {
        path: "/user/favoritActor",
        element:
          <ActorFavoritAccount />
      },

      {
        path: "/user/settings",
        element:
          <SettingsProfileAccount />
      },


      /* profile Account */

      {
        path: "*",
        element: <ErrorPage />
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
