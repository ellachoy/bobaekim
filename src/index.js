import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'

import reportWebVitals from './reportWebVitals'
import Main from './pages/main'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Introduce from './pages/Introduce'
import Works from './pages/Works'
import Contacts from './pages/Contacts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
  },
  { path: '/Introduce', element: <Introduce /> },
  { path: '/Works', element: <Works /> },
  { path: '/Contacts', element: <Contacts /> },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Main /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
