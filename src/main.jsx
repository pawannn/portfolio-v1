import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Hireme from './hireme'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />,
  },
  {
    path : '/hireme',
    element : <Hireme />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>,
)
