import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './components/Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider';
//tanstack query
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className='max-w-screen-2xl mx-auto'>

    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={router}>
            </RouterProvider>
          </AuthProvider>
        </HelmetProvider>
      </React.StrictMode>
    </QueryClientProvider>

  </div>

)
