import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutPage from './assets/pages/AboutPage.jsx'

import './assets/style/input.css'
import HomePage from './assets/pages/homepage.jsx'
import GuestLayout from './assets/guestLayout/GuestLayout.jsx'
import Contact from './assets/pages/Contact.jsx'
import ErrorPages from './assets/pages/ErrorPages.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <GuestLayout />,
    children :[
      {
        path:'/',
        element: <HomePage />
      },
      {
        path:'/about',
        element : <AboutPage/>
      },
      {
        path:'/about/:name',
        element :<AboutPage />
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      // {
      //     path:'*',
      //     element : <p>404 Page Not Found </p>
      // }
    ],
    errorElement: <ErrorPages/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
// 32:56