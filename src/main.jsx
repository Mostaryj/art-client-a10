
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import routes from './routes/Route.jsx'
import { RouterProvider } from 'react-router-dom'
// import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './AuthProvider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


  <AuthProvider>
  {/* <HelmetProvider> */}
  <RouterProvider router={routes} ></RouterProvider>

    {/* </HelmetProvider> */}

  </AuthProvider>
      

  </React.StrictMode>,
)
