import React from 'react';
import facebook from '../../../../../public/facebook.png';
import linkedin from '../../../../../public/linkedin.png';
import whatsapp from '../../../../../public/whatsapp.png';
import twitter from '../../../../../public/twitter.png';

const Footer = () => {
    return (
    <section className='pt-8 pb-8 bg-violet mt-14'>
        <div className='flex justify-center mb-8'>
           <a href="http://" target="_blank" rel="noopener noreferrer">
               <img  className='w-[35px] mr-2' src={linkedin} alt="" srcset="" />
           </a>
           <a href="http://" target="_blank" rel="noopener noreferrer">
               <img  className='w-[35px] mr-2' src={facebook} alt="" srcset="" />
           </a>
           <a href="http://" target="_blank" rel="noopener noreferrer">
              <img  className='w-[35px] mr-2' src={twitter} alt="" srcset="" />
           </a>
           <a href="http://" target="_blank" rel="noopener noreferrer">
              <img  className='w-[35px]' src={whatsapp} alt="" srcset="" />
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