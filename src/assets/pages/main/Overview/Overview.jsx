import React from 'react';
import '../Overview/Overview.css';
import webimg from '../../../../../public/web.png';

const Overview = () => {
    return (
        <>
    <section className='overview-section mt-2'>
        <div className='mt-20'>
            <h1 className='text-[54px] text-violet'>
            Hello!, I'm<br></br>
            Pritiraj Partho
            </h1>
            <h1 className='text-[44px] mt-4 mb-6 text-sky'>I am Web Developer</h1>
            <button className='text-xl btn-resume'>Download Resume</button>
        </div>
        <div className='ms-56 web'>
            <img src={webimg} alt="" srcset="" />
        </div>
    </section>
    <div className="divider divider-error"></div>
    </>
    );
};

export default Overview;