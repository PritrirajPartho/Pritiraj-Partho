import React from 'react';
import Overview from './Overview/Overview';
import '../main/Home.css';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className='home'>
            <Overview></Overview>
            <About></About>
            <Projects></Projects>
            {/* <About></About> */}
            <Contact></Contact>
        </div>
    );
};

export default Home;