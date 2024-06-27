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
      /* {
        path: "/movies/:id",
        element: <MovieDetails />
      }, */
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
