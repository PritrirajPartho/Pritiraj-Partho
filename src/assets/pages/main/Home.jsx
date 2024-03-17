import React from 'react';
import Overview from './Overview/Overview';
import '../main/Home.css';

const Home = () => {
    return (
        <div className='home'>
            <Overview></Overview>
            {/* <About></About>
            <Projects></Projects>
            <Contact></Contact> */}
            hello home
        </div>
    );
};

export default Home;