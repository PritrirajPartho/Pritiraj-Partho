import React from 'react';
import facebook from '../../../../../public/facebook.png';
import linkedin from '../../../../../public/linkedin.png';
import whatsapp from '../../../../../public/whatsapp.png';
import twitter from '../../../../../public/twitter.png';
import github from '../../../../../public/github-logo.png';

const Footer = () => {
    return (
    <section className='pt-8 pb-8 bg-violet mt-14'>
        <div className='flex justify-center mb-8'>
           <a href="https://www.linkedin.com/in/professional-web-developer-pritiraj-partho/" target="_blank" rel="noopener noreferrer">
               <img  className='w-[35px] mr-6' src={linkedin} alt="" srcset="" />
           </a>
           <a href="https://web.facebook.com/pd.partho.5" target="_blank" rel="noopener noreferrer">
               <img  className='w-[35px] mr-6' src={facebook} alt="" srcset="" />
           </a>
           <a href="http://" target="_blank" rel="noopener noreferrer">
              <img  className='w-[35px] mr-6' src={twitter} alt="" srcset="" />
           </a>
           <a href="http://" target="_blank" rel="noopener noreferrer">
              <img  className='w-[35px] mr-6' src={whatsapp} alt="" srcset="" />
           </a>
           <a href="https://github.com/PritrirajPartho" target="_blank" rel="noopener noreferrer">
              <img  className='w-[35px]' src={github} alt="" srcset="" />
           </a>
        </div>
        <div>
            <h1 className='text-center text-xl font-semibold text-white'>Designed and Developed By Pritiraj Partho</h1>
            <h1 className='text-center text-xl font-semibold text-white'>Copyright©2024 Pritiraj-Partho, All right reserved</h1>
        </div>
    </section>
    );
};

export default Footer;