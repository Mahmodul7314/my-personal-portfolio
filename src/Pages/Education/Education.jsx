import { FaGithub, FaLinkedin } from "react-icons/fa";

const Education = () => {
    return (
        <div className="flex justify-center items-center">
         <div className="py-20 space-y-4">
         <h2 className="font-bold text-lg flex items-center "><span><img className="w-20 h-20" src="https://img.freepik.com/premium-vector/graduation-cap-symbol-education-illustration-design_92086-772.jpg?size=626&ext=jpg&uid=R40507079&ga=GA1.1.158317514.1699199683&semt=ais" alt="" /></span>
         Learn Front-End Web Development from Programming Hero Institution</h2>
         <div className="text-md font-normal text-left pl-8">
         <p>It's an online course-based programming institute in Bangladesh.</p>
            <p>I am learning here as a web development specialist in front-end development with React and Node.js.</p>
            <p>I am also self-learning from Google and YouTube.</p>

          <div className="py-3 ">
          <h2 className="text-lg font-bold  flex items-center "><span><img className="w-20 h-20" src="https://img.freepik.com/premium-vector/graduation-cap-symbol-education-illustration-design_92086-772.jpg?size=626&ext=jpg&uid=R40507079&ga=GA1.1.158317514.1699199683&semt=ais" alt="" /></span>Educational Qualification:</h2>
            <p>I am currently a BBA graduate student in the Department of Management.</p>
            <p>Student of BBA at Govt. Saadat University College.</p>
         </div>
          </div>
         </div>
        </div>
    );
};

export default Education;