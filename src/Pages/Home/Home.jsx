import { MdLocationPin } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { } from "react-router-dom";
const Home = () => {
    return (
        <div className="bg-green-50">
            <div className="lg:h-[80vh] md:h-[160vh] h-[180vh] px-10 w-3/2 lg:flex-row flex flex-col lg:justify-around">
                <div className="lg:py-24 py-10">
                <h2 className="text-5xl font-bold flex items-center">Hi! I am Mahmodul <span className="pl-6"><img className="w-12 h-12" src="https://i.ibb.co/j32jqvK/wave.png" alt="" /></span></h2>
                     <p className="text-lg font-medium text-gray-700 py-8">Passionate Front-End Developer with expertise in React and Node.js. <br /> Dedicated to crafting seamless digital experiences and embracing innovation.</p>
                    <p className="flex text-md text-gray-600 gap-1 font-medium items-center justify-start"><span><MdLocationPin /></span>Dhaka,Bangladesh</p>
                    <p className="flex items-center text-md gap-1 font-medium text-gray-600"><span><GoGoal /></span>actively seeking job opportunities </p>
                     <div className="flex justify-start py-12 gap-4">
                     <a href="https://github.com/Mahmodul7314" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                     <a href="https://www.linkedin.com/in/md-mahmodul-hasan-8243a4176/" target="_blank" rel="noopener noreferrer"><FaLinkedin />
                        </a>
                     </div>
                </div>
                <div className="lg:px-0 px-14">
                 <img className="lg:w-[28rem] rounded-full bg-green-300 p-2 lg:h-[30rem]" src="https://i.ibb.co/Zf1gPTK/profile.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;