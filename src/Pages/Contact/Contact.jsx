import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form =useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nfvfcle', 'template_61hykuy', form.current, 'uAewzXBRS0oG0WGxW')
          .then((result) => {
              console.log(result.text);
              window.alert("Email Send Successfull")
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
    <div >
    <div className="lg:pl-[32rem] pl-[10rem] py-14 md:pl-[20rem]"><button className=" border-solid border-gray-700 px-4 py-2 border-2 text-xl font-extrabold flex justify-center">Contact</button>
    </div>
   <div className='flex justify-center gap-10  px-20'>
   <div className='w-1/2'>
        <div className='flex gap-2 py-2'>< h2 className='text-lg font-bold'>Call Me </ h2 > <p>+8801789267314</p></div>
        <div  className='flex gap-2 py-2'><h2 className='text-lg font-bold'>Whatsapp Me </h2> <p>+8801789267314</p></div>
        <div  className='flex gap-2 py-2'><h2 className='text-lg font-bold'>Email </h2> <p>mahmudulhasan7314@gmail.com</p></div>
        <div  className='flex gap-2 py-2'><h2 className='text-lg font-bold'>Location </h2> <address>Tangail,Dhaka,Bangladesh</address></div>
        
    </div>
    <div className='w-1/2'>
    <form className='text-center' ref={form} onSubmit={sendEmail}>
      <label className='px-2'>Name :</label>
      <input className='bg-gray-300 py-1 my-2' type="text" name="from_name" /> <br />
      <label className='px-2'>Email:</label>
      <input className='bg-gray-200 py-1 my-2' type="email" name="from_email" /><br />
      <label className='px-2'>Message: </label>
      <textarea className='bg-gray-300 py-4 px-8' name="message" /> <br />
      <input className='btn btn-accent' type="submit" value="Send" />
    </form>
    </div>
  
   </div>
        
        </div>
    );
};

export default Contact;