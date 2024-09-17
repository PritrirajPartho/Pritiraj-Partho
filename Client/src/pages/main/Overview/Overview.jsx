import React from 'react';
import useDownloader from 'react-use-downloader';
import './Overview.css';
import webimg from '../../../../public/web.png';
import Typewriter from 'typewriter-effect';
import pdf from '../../../../public/Pritiraj-Partho-Full-Stack-Developer-Resume.pdf';




const Overview = () => {

    const {download} =
    useDownloader();
    const fileUrl = pdf;
    const filename = 'Pritiraj-Partho-full-stack-developer-resume.pdf';

    return (
    <section>
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
            <button onClick={() => download(fileUrl, filename)}   className='text-xl btn-resume'>Download Resume</button>
        </div>
        <div className='web'>
            <img className='static' src={webimg} alt="" srcset="" />
        </div>
      </section>
    </section>
    );
};

export default Overview;