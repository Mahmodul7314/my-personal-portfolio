



import AboutMe from './../About/AboutMe';
import Skills from "../Skills/Skills";
import Portfolio from "../Portfolio/Portfolio";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Footer from "../../Components/Footer";


import { Typewriter } from 'react-simple-typewriter';
import { MdLocationPin } from 'react-icons/md';
import { GoGoal } from 'react-icons/go';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {

  return (
    <div className="App">
      <div className="py-12 bg-[#0A082E]">
        <div className="lg:h-[80vh] md:h-[200vh] h-[220vh] px-10 w-3/2 lg:flex-row flex flex-col lg:items-center lg:justify-around pt-24">
          <div className="lg:py-24 py-10 md:text-center">
            <p className='text-3xl font-bold  md:justify-center lg:justify-start lg:flex  text-[#a3a1c0] flex items-center gap-4 py-4'>Hi! I am Mahmodul Hasan <span> <span className="">
                <img className="w-8 h-8" src="https://i.ibb.co/j32jqvK/wave.png" alt="" />
              </span></span></p>
            <h2 className="lg:text-5xl md:text-4xl text-2xl lg:font-bold md:font-bold font-bold flex items-center text-[#42448E] ">
              {' '}
             <span className="text-[#FF6D5A] md:text-center lg:flex lg:justify-start md:w-full"> <Typewriter
                words={['Web Designer', ' Front-end Developer','React Developer', 'Problem Solver']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={1000}
              /></span>
            </h2>
            <p className="text-lg lg:text-left font-medium text-[#a3a1c0] py-8">Passionate Front-End Developer with expertise in React and Node.js. <br /> Dedicated to crafting seamless digital experiences and embracing innovation.</p>
            <p className="flex text-md text-[#a3a1c0] gap-1 md:items-center lg:justify-start md:justify-center font-medium items-center justify-start">
              <span><MdLocationPin/></span>Dhaka,Bangladesh
            </p>
            <p className="flex items-center lg:justify-start md:justify-center md:items-center text-md gap-1 font-medium text-[#a3a1c0]">
              <span><GoGoal /></span>actively seeking job opportunities
            </p>
            <div className="flex md:justify-center lg:justify-start text-[#a3a1c0] justify-start py-12 gap-4">
              <a href="https://github.com/Mahmodul7314" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
              <a href="https://www.linkedin.com/in/md-mahmodul-hasan-8243a4176/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </div>
          <div className="lg:px-0 px-14 lg:pb-12 md:flex md:justify-center">
            <img className="lg:w-[24rem] md:w-[24rem] lg:pl-6 md:pl-6 md:h-[24rem]  rounded-full  lg:h-[24rem] border-4 border-[#FF6D5A] " src="https://i.ibb.co/fGL0XzD/dc8c07b4-7062-4009-ba29-82a10092ae88-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
      <AboutMe id="aboutme"></AboutMe>
      <Skills id="skills"></Skills>
      <Portfolio id="portfolio"></Portfolio>
      <Education id="education"></Education>
      <Contact id="contact"></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
