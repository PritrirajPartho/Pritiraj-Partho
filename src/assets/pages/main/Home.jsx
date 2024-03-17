import React from 'react';
import Overview from './Overview/Overview';
import '../main/Home.css';
import About from './About/About';

const Home = () => {
    return (
        <div className='home'>
            <Overview></Overview>
            <About></About>
            {/* <About></About>
            <Projects></Projects>
            <Contact></Contact> */}
            hello home
        </div>
    );
};

export default Home;