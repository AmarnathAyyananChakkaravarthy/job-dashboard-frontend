import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import JobDashboard from './pages/JobDashboard.jsx';

const router= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/jobs",
        element:<JobDashboard/>,
      },
      {
        path:"/messages",
        element:<h1 className="flex items-center justify-center text-boldTextColor">Page yet to be developed!</h1>,
      },
      {
        path:"/payments",
        element:<h1 className="flex items-center justify-center text-boldTextColor">Page yet to be developed!</h1>,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
