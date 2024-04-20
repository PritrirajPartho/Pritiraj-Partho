import React from 'react';
import '../Overview/Overview.css';
import webimg from '../../../../../public/web.png';
import Typewriter from 'typewriter-effect';



const Overview = () => {
    return (
        <>
    <section className='overview-section mt-2'>
        <div className='mt-20'>
            <h1 className='text-[54px] text-violet'>
            Hello!, I'm<br></br>
            Pritiraj Partho
            </h1>
            <h1 id='app' className='text-[44px] mt-4 mb-6 text-sky'>
                <Typewriter
                    options={{
                        strings: ['Full Stack Developer', 'Web developer', 'Frontend developer', 'Javascript developer'],
                        autoStart: true,
                        loop: true,
                    }}
                 />
            </h1>
            <button className='text-xl btn-resume'>Download Resume</button>
        </div>
        <div className='ms-80 web'>
            <img className='static' src={webimg} alt="" srcset="" />
        </div>
    </section>
    <div className="divider divider-error"></div>
    </>
    );
};

export default Overview;