import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/main/Header/Header';
import Footer from '../pages/main/Footer/Footer';


const Root = () => {
    return (
        <div className='root-layout'>
             <Header></Header>
                <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Root;
