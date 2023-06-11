import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './components/Routes/Routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-screen-2xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router}>
      </RouterProvider>
    </React.StrictMode>
  </div>

)
