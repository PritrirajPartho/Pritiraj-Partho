import React from 'react';
import '../Projects/Projects.css';
import project1 from '../../../../../public/summer-camp-school.png'
import project2 from '../../../../../public/web-developers.png'
import project3 from '../../../../../public/startling.png'

const Projects = () => {
    return (
     <>
             <h1 className='mt-2 mb-10 text-center text-3xl text-violet'>--Projects--</h1>
        <section className='projects'>
            {/*projets one sparkle sports academy*/}
            <div>
                <div>
                     <img src={project1} alt="" />
                </div>
                <div>
                    <h1>Sparkle Sports Academy</h1>
                    <p>It is Full stack website project. A student or visitor easily can sign up or sign in with the email and Google or Github system.Every Student can see our popular Instructors and Courses list for the best user experience on this website.</p>
                    <div>
                        <button ><a href="https://summer-camp-school-356df.web.app/" target='_blank'>Live site</a></button>
                        <button ><a href="https://github.com/PritrirajPartho/sparkle-sports-academy" target='_blank'>Github repo</a></button>
                    </div>
                </div>
            </div>
            {/* project two web developers 360*/}
            <div>
                <div>
                     <img src={project2} alt="" />
                </div>
                <div>
                    <h1>Sparkle Sports Academy</h1>
                    <p>It is Full stack website project. A student or visitor easily can sign up or sign in with the email and Google or Github system.Every Student can see our popular Instructors and Courses list for the best user experience on this website.</p>
                    <div>
                        <button ><a href="https://summer-camp-school-356df.web.app/" target='_blank'>Live site</a></button>
                        <button ><a href="https://github.com/PritrirajPartho/sparkle-sports-academy" target='_blank'>Github repo</a></button>
                    </div>
                </div>

            </div>
            {/*projects three starting justice*/}
            <div>
                <div>
                     <img src={project3} alt="" />
                </div>
                <div>
                    <h1>Justice--law website</h1>
                    <p>It is generall html5,css3 and bootstrap based website making for project practice. pixel perfect website making task from my training company.</p>
                    <div>
                        <button ><a href="https://startling-platypus-c6f46f.netlify.app/" target='_blank'>Live site</a></button>
                        <button ><a href="https://startling-platypus-c6f46f.netlify.app/" target='_blank'>Github repo</a></button>
                    </div>
                </div>
            </div>
        </section>
     </>
    );
};

export default Projects;