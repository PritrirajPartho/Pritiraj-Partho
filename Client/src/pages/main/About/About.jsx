import React from 'react';
import partho from '../../../../public/partho.jpeg';
import '../About/About.css';

const About = () => {
    return (
     <section className='about'> 
     <h1 className='mt-14 text-center text-4xl text-violet'>About me</h1>
        <section className='flex mt-16'>
            <div className='mt-6'>
                <p className='text-2xl mr-10 text-white'>
                Hello! I am Pritiraj Partho from Bangladesh. Currently I'm <br></br>
                a student of BBA(honors-2nd year) Mangement Department.<br></br>
                My Dream and Always worship for just Web Developing and Programing. I'm a passionate web developer with a keen eye for detail, and a drive to create elegant, efficient, and user-friendly web app. I've honed my skills in a variety of technologies, including Html5,CSS3,React.Js, Node.js,
                Express.Js,Firebase, Javascript,tailwind.css,Bootstrap.css<br></br>
                ES6 and MongoDb. Now I am learning Next.Js,Redux and JQuery<br></br>
                </p>
            </div>
            <div>
                <img className='w-[1650px] rounded-md' src={partho} alt="" />
            </div>
        </section>
     </section>
    );
};

export default About;