import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Hireme from './hireme'
import Success from './success'
import ContactForm from './components/contactForm'

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
    path : '/success',
    element : <Success />
  },
  {
    path : '/contactme',
    element : <ContactForm />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>,
)
