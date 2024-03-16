import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from './assets/layout/Root';
import Errorpage from './assets/pages/Errorpage/Errorpage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <Errorpage></Errorpage>,
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
