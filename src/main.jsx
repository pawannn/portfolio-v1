import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Hireme from './hireme'
import Success from './success'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />,
  },
  {
    path : '/hireme',
    element : <Hireme />
  },
  {
    path : '/thankyou',
    element : <Success />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>,
)
