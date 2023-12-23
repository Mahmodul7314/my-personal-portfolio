/* eslint-disable react/no-unescaped-entities */


const Education = () => {
    return (
      <div id="education" className="bg-[#F7F9FD] py-12 lg:px-10 px-2 pt-20">
        <h2 className="font-bold text-3xl text-center lg:pb-0 pb-14 text-[#12103E]">Educational Qualification</h2>
         <div className="lg:flex md:flex-row flex-col justify-center items-center">
          <div className="lg:w-1/2 w-full flex justify-left">
            <img className="lg:w-3/4 w-full h-64 rounded-2xl" src="https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif" alt="" />
          </div>
         <div className="py-20 space-y-4 text-[#12103E] lg:w-1/2 w-full">
         <h2 className="font-bold text-lg text-[#12103E] flex items-center "><span><img className="w-20 h-20 bg-green-50" src="https://img.freepik.com/premium-vector/graduation-cap-symbol-education-illustration-design_92086-772.jpg?size=626&ext=jpg&uid=R40507079&ga=GA1.1.158317514.1699199683&semt=ais" alt="" /></span>
         Learn Front-End Web Development from Programming Hero Institution</h2>
         <div className="text-md font-normal text-left pl-8 text-[#12103E]">
         <p>It's an online course-based programming institute in Bangladesh.</p>
            <p>I am learning here as a web development specialist in front-end development with React and Node.js.</p>
            <p>I am also self-learning from Google and YouTube.</p>
            </div>
          <div className="py-3 text-[#12103E] ">
          <h2 className="text-lg font-bold text-[#12103E]  flex items-center "><span><img className="lg:w-20 h-20 w-14 bg-green-50" src="https://img.freepik.com/premium-vector/graduation-cap-symbol-education-illustration-design_92086-772.jpg?size=626&ext=jpg&uid=R40507079&ga=GA1.1.158317514.1699199683&semt=ais" alt="" /></span>Educational Qualification:</h2>
            <div className="pl-8">
            <p>I am currently a BBA graduate student in the Department of Management.</p>
            <p>Student of BBA at Govt. Saadat University College.</p>
         </div>
            </div>
          </div>
         </div>
        
      </div>
       
        
    );
};

export default Education;