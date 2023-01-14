import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Hireme from './hireme'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Homecard from './components/homecard'

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
    path : '/navbar',
    element : <Navbar />
  },
  {
    path : '/homecard',
    element : <Homecard />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>,
)
