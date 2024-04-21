import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, } from 'react-icons/fa';
import { BsSendXFill } from 'react-icons/bs';

const Contact = () => {
    const form = useRef();
    const contact_info = [
        { logo: <FaEnvelope />, text: 'dpartho5616@gmail.com' },
        { logo: <FaWhatsapp />, text: '+880 1764676589' },
        { logo: <FaMapMarkerAlt />, text: 'Sylhet, Bangladesh' }
    ];

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_255j94c',
            'template_l1rksed',
            form.current,
            'VzNYMcCGogxW1OgSG')
            .then((result) => {
                console.log(result.text);
                resetForm();
            }, (error) => {
                console.log(error.text);
            });
    };

    const resetForm = () => {
        if (form.current) {
            form.current.reset();
        }
    };

    return (
        <section className="pt-10 px-3 text-white bg-slate-900" id="contact">
             <div>
                 <h1 className='mt-14 text-center text-3xl text-violet'>Contact with me</h1>
             </div>
            <div className="text-center mt-10">
                <div className=' flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 py-10 md:p-6 p-2 rounded-lg mx-auto'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col flex-1 gap-5'>
                        <input type='text' name='from_name' className="py-3 px-3 text-black bg-base-300" placeholder='Your Name' />
                        <input type="email" name="from_email" className="py-3 px-3 text-black bg-base-300" placeholder="Your Email Address" />
                        <textarea name='message'
                            className='text-black py-8 px-3 bg-base-300' placeholder='Your Message' rows={5}></textarea>
                        <button style={{ backgroundImage: " linear-gradient(to right, rgb(139 92 246) 0%, rgb(96 165 250) 51%, #de5c70 100%)" }} className='btn btn-lg w-fit p-3 text-white'>Send Message <BsSendXFill /> </button>
                    </form>
                    <div className="flex flex-col gap-7">
                        {
                            contact_info.map((contact, i) => (
                                <div key={i} className="flex gap-4 w-fit items-center">
                                    <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                        {contact.logo}
                                    </div>
                                    <p className="text-[20px] ">{contact.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;