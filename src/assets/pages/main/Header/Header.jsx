import React from 'react';
import styled from "styled-components"; 
import '../Header/Header.css';
import { Link } from 'react-router-dom';

const StyledText = styled.h1` 
    font-family: "Cedarville Cursive", cursive;
    font-weight: 800;
    font-style: normal;
    color: red;
`; 


const Header = () => {
    return (
    <div className="navbar bg-base-100 header">
    <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             <h1>Pritiraj Partho</h1>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link>About</Link></li>
            <li><Link>Projects</Link></li>
            <li><Link>Contact</Link></li>
        </ul>
        </div>
        <StyledText><h1 className="text-xl ms-10">Pritiraj Partho</h1></StyledText>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            <li><Link>About</Link></li>
            <li><Link>Projects</Link></li>
            <li><Link>Contact</Link></li>
        </ul>
    </div>
    </div>
    );
};

export default Header;