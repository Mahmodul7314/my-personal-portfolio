import { Link} from "react-router-dom";

const Navbar = () => {
    const navOptions = <>

    <li className="text-md font-bold"><Link to="/">Home</Link></li>
    <li className="text-md font-bold"><Link to="/aboutme">About Me</Link></li>
    <li className="text-md font-bold"><Link to="/skills">Skills</Link></li>
    <li className="text-md font-bold"><Link to="/portfolio">PortFolio</Link></li>
    <li className="text-md font-bold"><Link to="/education">Education</Link></li>
    <li className="text-md font-bold"><Link to="/contact">Contact</Link></li>
  
    <div className="lg:px-32">
    <button className="btn btn-outline lg:font-bold text-md">
  <a href="https://drive.google.com/uc?export=download&id=1-cLRW6NCRn5ZZcll_U-zajAG-K3LQtEH" download>
    Download Resume
  </a>
</button>
    </div>
    
    {/* <li className="text-lg font-bold"><Link to="/login">Login</Link></li> */}

 </>
    return (
        <div className=" bg-green-50 mx-w-7xl">
           <div className="navbar max-w-screen-xl text-black px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-secondary lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52">
    
        {navOptions}

      </ul>
    </div>
    <a className=" lg:text-3xl lg:font-bold text-lg font-bold lg:pl-0 pl-20 lg:pr-20 "><span className="">𝓜𝓪𝓱𝓶𝓸𝓭𝓾𝓵</span></a>
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