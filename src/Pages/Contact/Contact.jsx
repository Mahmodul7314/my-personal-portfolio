import { useRef } from 'react';
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
    <div id='contact' className='bg-[#F7F9FD]' >
    <div className="lg:pl-[36rem] pl-[10rem] py-14 md:pl-[20rem]"><button className=" border-solid text-[#272743] border-gray-700 px-4 py-2 border-2 text-xl font-extrabold flex justify-center">Contact</button>
    </div>
    <h2 className='text-4xl font-bold text-[#272743] py-6 px-20'>Get In Tuch : </h2>
   <div className='lg:flex-row lg:flex md:flex-col flex-col justify-center gap-10  px-20 md:mb-8 py-14'>
   <div className='lg:w-1/2 w-full lg:shadow-xl md:py-8 md:border border-[#acacbc] rounded-md lg:border-2 md:px-8'>
        <div className='flex gap-2 py-2'>< h2 className='text-lg text-[#272743] font-bold'>Call Me </ h2 > <p>+8801789267314</p></div>
        <div  className='flex gap-2 py-2'><h2 className='text-lg text-[#272743] font-bold'>Whatsapp Me </h2> <p>+8801789267314</p></div>
        <div  className='flex gap-2 py-2'><h2 className='text-lg text-[#272743] font-bold'>Email </h2> <p>mahmudulhasan7314@gmail.com</p></div>
        <div  className='flex gap-2 py-2'><h2 className='text-lg text-[#272743] font-bold'>Location </h2> <address>Tangail,Dhaka,Bangladesh</address></div>
        
    </div>
    <div className='lg:w-1/2 w-full border-[#acacbc] border-2 shadow-xl rounded-md py-8'>
    <form className='text-center px-8' ref={form} onSubmit={sendEmail}>
     <div className='flex items-center'>
     <label className='px-2'>Name :</label>
      <input className='w-[24rem] bg-amber-50 py-1 my-2 border' type="text" name="from_name" /> 
     </div>
      <div className='flex items-center'>
      <label className='px-3'>Email:</label>
      <input className='w-[24rem] pl-4 bg-amber-50 py-1 my-2 border' type="email" name="from_email" />
      </div>
      <div className='flex items-center'>
      <label className=''>Message: </label>
      <textarea className='w-[24rem] bg-amber-50 py-4 px-8 border' name="message" /> 
      </div>
      
     <div className='pt-4'>
     <input className='btn w-28 h-8 text-[#fff] bg-[#ff715e]' type="submit" value="Send" />
     </div>
    </form>
    </div>
  
   </div>
        
        </div>
    );
};

export default Contact;