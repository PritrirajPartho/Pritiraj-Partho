import React from 'react'
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from './layout/Root';
import Errorpage from './pages/Errorpage/Errorpage';
import Home from './pages/main/Home';
import About from './pages/main/About/About';
import Projects from './pages/main/Projects/Projects';
import Contact from './pages/main/Contact/Contact';

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
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      }
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
