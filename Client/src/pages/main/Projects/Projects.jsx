import React from 'react';
import '../Projects/Projects.css';

{/* <script>
   AOS.init();
</script> */}


const Projects = () => {
    return (
     <>
        <h1 className='mt-14 mb-10 text-center text-3xl text-violet'>My Projects</h1>
        <section className='projects'>
            {/*project one sparkle sports academy*/}
            <div className='project'>
                <div className='box box1'></div>
                <div className='mt-9 ps-7 pe-7 '>
                    <h1 className='text-2xl text-sky mb-2'>Sparkle Sports Academy</h1>
                    <p className='mb-6'>It is Full stack website project. Created for Student purpose. Here is the Courses and Instructors list etc.</p>
                    <div className='technologies'>
                        <span>Javascript</span>
                        <span>React.js</span>
                        <span>Tailwind.css</span>
                        <span>DaisyUi</span>
                        <span>React-router</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>MongoDB</span>
                    </div>
                    <div className='buttons'>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a  href="https://summer-camp-school-356df.web.app/" target='_blank'>Live site</a></button>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://github.com/PritrirajPartho/sparkle-sports-academy" target='_blank'>Github repo</a></button>
                    </div>
                </div>
            </div>

            {/* project two panda-dish start here */}            
            <div className='project'>
                <div className='box box2'></div>
                <div className='mt-8 ps-7 pe-7'>
                    <h1 className='text-2xl text-sky mb-2'>Panda Dish e-commerce</h1>
                    <p className='mb-12'>It is Frontend React.js web app. I try to make a relaiable Food e-commerce website like Foodpanda. </p>
                    <div className='technologies'>
                        <span>Javascript</span>
                        <span>Html5</span>
                        <span>CSS3</span>
                        <span>React.js</span>
                        <span>Tailwind.css</span>
                        <span>DaisyUi</span>
                        <span>react-router</span>
                    </div>
                    <div className='buttons'>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://panda-dish.netlify.app/" target='_blank'>Live site</a></button>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://github.com/PritrirajPartho/panda-dish" target='_blank'>Github repo</a></button>
                    </div>
                </div>
            </div>

            {/*project three starting justice*/}
            <div className='project'>
                <div className='box box3'></div>
                <div className='mt-8 ps-7 pe-7'>
                    <h1 className='text-2xl text-sky mb-2'>job-assistant website</h1>
                    <p className='mb-12'>Also it is a Frontend React.js project app or bootstrap based website making for job Searching </p>
                    <div className='technologies'>
                        <span>Javascript</span>
                        <span>Html5</span>
                        <span>CSS3</span>
                        <span>React.js</span>
                        <span>Bootstrap.css</span>
                        <span>rechart</span>
                        <span>react-router</span>
                    </div>
                    <div className='buttons'>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://job-assistant-web.netlify.app/" target='_blank'>Live site</a></button>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://github.com/PritrirajPartho/job-assistant-client" target='_blank'>Github repo</a></button>
                    </div>
                </div>
            </div>

            {/* project four web developers 360*/}
            <div className='project'>
                <div className='box box4'></div>
                <div className='mt-8 ps-7 pe-7 '>
                    <h1 className='text-2xl text-sky mb-2'>Glossy-Drawer Application</h1>
                    <p className='mb-6'>It is Full stack website project. Anyone can drawing in this website and do course and cand reads blog.</p>
                    <div className='technologies'>
                        <span>Javascript</span>
                        <span>React.js</span>
                        <span>Tailwind.css</span>
                        <span>DaisyUi</span>
                        <span>React-router</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>MongoDB</span>
                    </div>
                    <div className='buttons'>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://summer-camp-school-356df.web.app/" target='_blank'>Live site</a></button>
                        <button className="bg-violet ps-4 pe-4 rounded-md mr-8"><a href="https://github.com/PritrirajPartho/sparkle-sports-academy" target='_blank'>Github repo</a></button>
                    </div>
                </div>
            </div>


        </section>
     </>
    );
};

export default Projects;