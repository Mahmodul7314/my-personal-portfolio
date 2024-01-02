
import { } from "react-router-dom";
const Navbar = () => {
    const navOptions = <>
    <li className="text-md font-bold text-[#a3a1c0]"><a href ="/#" >Home</a></li>
    <li className=" text-md font-bold text-[#a3a1c0]"><a href ="#aboutme" >About Me</a></li>
    <li className="text-md font-bold text-[#a3a1c0]"><a href="#skills">Skills</a></li>
    <li className="text-md font-bold text-[#a3a1c0]"><a href="#portfolio">PortFolio</a></li>
    <li className="text-md font-bold text-[#a3a1c0]"><a href="#education">Education</a></li>
    <li className="text-md font-bold text-[#a3a1c0]"><a href="#contact">Contact</a></li>
  
    <div className="lg:px-32">
    <button className="btn text-[#fff] bg-[#ff715e] lg:font-bold text-md">
  <a href="https://drive.usercontent.google.com/download?id=1M1L4edOXwyLGGVFSaWvA9nN0OK4fhfxL&export=download&authuser=0&confirm=t&uuid=44da2935-b9a8-4a57-a6b5-bff8267e8b1e&at=APZUnTXPiw7KC0BFZ79JXt2903O2:1704173062218" download>
    Download Resume
  </a>
</button>
    </div>
    
    {/* <li className="text-lg font-bold"><Link to="/login">Login</Link></li> */}

 </>
    return (
        <div className="max-w-7xl  fixed py-2 bg-[#0A082E]">
           <div className="navbar max-w-screen-xl   text-[#8684A0] px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-secondary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52">
    
        {navOptions}

      </ul>
    </div>
    <a className=" lg:text-3xl lg:font-bold text-lg font-bold lg:pl-0 pl-32 md:px-56 lg:pr-20 "><span className="text-[#ff715e] ">𝓜</span>𝓪𝓱𝓶𝓸𝓭𝓾𝓵</a>
  </div>
  <div className="navbar-center hidden lg:flex items-center">
    <ul className="menu menu-horizontal px-1">

        {navOptions}

    </ul>
  </div>
  <div className="navbar-end">
  <div className="pl-20">
  </div>
  </div>
</div>
            
        </div>
    );
};

export default Navbar;