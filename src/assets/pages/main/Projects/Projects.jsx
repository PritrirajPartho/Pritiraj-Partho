import React from 'react';
import '../Projects/Projects.css';
import project1 from '../../../../../public/summer-camp-school.png';
import project2 from '../../../../../public/web-developers.png';
import project3 from '../../../../../public/startling.png';

{/* <script>
   AOS.init();
</script> */}


const Projects = () => {
    return (
     <>
             <h1 className='mt-14 mb-10 text-center text-3xl text-violet'>My Projects</h1>
        <section className='projects'>
            {/*projets one sparkle sports academy*/}
            <div className='project'>
                <div className='box box1'></div>
                <div className='mt-9 ps-7 pe-7 '>
                    <h1 className='text-2xl text-sky mb-2'>Sparkle Sports Academy</h1>
                    <p className='mb-14'>It is Full stack website project. A student or visitor easily can sign up or sign in with the email and Google or Github system.Every Student can see our popular Instructors and Courses list for the best user experience on this website.</p>
                    <div className='buttons'>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a  href="https://summer-camp-school-356df.web.app/" target='_blank'>Live site</a></button>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://github.com/PritrirajPartho/sparkle-sports-academy" target='_blank'>Github repo</a></button>
                    </div>
                </div>
            </div>
            {/* project two web developers 360*/}
            <div className='project'>
                <div className='box box2'></div>
                <div className='mt-8 ps-7 pe-7 '>
                    <h1 className='text-2xl text-sky mb-2'>Glossy-Drawer Application</h1>
                    <p className='mb-14'>It is Full stack website project. A student or visitor easily can sign up or sign in with the email and Google or Github system.Every Student can see our popular Instructors and Courses list for the best user experience on this website.</p>
                    <div className='buttons'>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://summer-camp-school-356df.web.app/" target='_blank'>Live site</a></button>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://github.com/PritrirajPartho/sparkle-sports-academy" target='_blank'>Github repo</a></button>
                    </div>
                </div>
            </div>
            {/*projects three starting justice*/}
            <div className='project'>
                <div className='box box3'></div>
                <div className='mt-8 ps-7 pe-7'>
                    <h1 className='text-2xl text-sky mb-2'>Justice-law website</h1>
                    <p className='mb-2'>It is generall html5,css3 and bootstrap based website making for project practice. pixel perfect website making task from my training company.</p>
                    <div className='buttons'>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://startling-platypus-c6f46f.netlify.app/" target='_blank'>Live site</a></button>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://startling-platypus-c6f46f.netlify.app/" target='_blank'>Github repo</a></button>
                    </div>
                </div>
            </div>
        </section>
     </>
    );
};

export default Projects;