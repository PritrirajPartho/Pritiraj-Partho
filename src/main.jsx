import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from './assets/layout/Root';
import Errorpage from './assets/pages/Errorpage/Errorpage';
import Home from './assets/pages/main/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // {
      //   path: "/blog",
      //   element: <Blog></Blog>,
      // },
      // {
      //   path: "/registration",
      //   element: <Registration></Registration>,
      // },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='root-place'>
         <RouterProvider router={router}/>
     </div>
  </React.StrictMode>,
)
