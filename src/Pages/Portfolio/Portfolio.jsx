import { Link } from "react-router-dom";

const Portfolio = () => {
    return (
        <div id="portfolio" className="max-w-7xl py-14">
            <div className="">
            <div className="py-10 text-center">
              {/* <div className="relative"><img className="w-full shadow-xl opacity-50 lg:h-4 h-10" src="../../../public/banner.webp" alt="" /></div> */}
            <div className=" lg:pl-[36rem] pl-[10rem] md:pl-[20rem]"><button className=" border-solid text-[#272743] border-gray-700 px-4 py-2 border-2 text-xl font-extrabold flex justify-center">Portfolio</button></div>
           <div className="py-10 space-y-3">
           <h2 className="text-3xl font-bold text-[#272743]">Projects</h2>
            <p className="text-md font-normal text-[#272743]">Things I have built so far</p>
           </div>
            <div className="pt-8">
            <ul className="no-underline flex justify-center gap-4 text-[#6565a4]">
                  <li className="border-2 border-[#6565a4] px-2 py-2 rounded-lg">Tailwind</li>
                  <li className="border-2 border-[#6565a4] px-2 py-2 rounded-lg">React</li>
                  <li className="border-2 border-[#6565a4] px-2 py-2 rounded-lg">Node.JS</li>
                  <li className="border-2 border-[#6565a4] px-2 py-2 rounded-lg">Express</li>
                  <li className="border-2 border-[#6565a4] px-2 py-2 rounded-lg">MongoDB</li>
                  <li className="border-2 border-[#6565a4] px-2 py-2 rounded-lg">Firebase</li>
                  <li className="border-2 border-[#6565a4] px-2 py-2 rounded-lg">JWT</li>
                </ul>
            </div>
           </div>

            <div className="flex justify-around bg-[#0A082E] py-14">
           <div className="flex shadow-[0_0_10px_#374151] max-w-2xl mx-auto justify-center items-center bg-gray-700 rounded-xl p-10 my-8">
            <div
            className="bg-[#a3a1c0] mx-auto h-[200px] rounded-xl w-[200px] ease-in-out duration-[6000ms] bg-cover bg-top hover:bg-bottom"
            style={{
              backgroundImage:
              "url('https://i.ibb.co/Jdrrmfd/screencapture-learnme-83e14-web-app-2023-12-17-18-28-12.png')",
            }}
            >
            </div>
            <div className="pl-6">
              <ul>
                <li>  <a className="text-blue-400 text-bold bordered" href="https://learnme-83e14.web.app">Live Site</a><br /></li>
                <li> <a className="text-blue-400 text-bold" href="https://github.com/Mahmodul7314/Learn-Me-A12-Client-Side">Client Site Repo</a><br /></li>
                <li> <a className="text-blue-400 text-bold" href="https://github.com/Mahmodul7314/Learn-Me-A12-Server-Side">Server Site Repo</a></li>
              </ul>

            </div>
           </div>
           <div className="flex shadow-[0_0_10px_#374151] max-w-2xl mx-auto justify-center items-center bg-gray-700 rounded-xl p-10 my-8">
            <div
            className="bg-[#a3a1c0] mx-auto h-[200px] rounded-xl w-[200px] ease-in-out duration-[6000ms] bg-cover bg-top hover:bg-bottom"
            style={{
              backgroundImage:
              "url('https://i.ibb.co/6mBmbGR/screencapture-az-shop-project-web-app-2023-12-17-18-24-06.png')",
            }}
            >
            </div>
            <div className="">
            <div className="pl-6">
              <ul>
                <li>  <a className="text-blue-400 text-bold bordered" href="https://az-shop-project.web.app/">Live Site</a><br /></li>
                <li> <a className="text-blue-400 text-bold" href="https://github.com/Mahmodul7314/AZ-Shop-A10-Client-Side">Client Site Repo</a><br /></li>
                <li> <a className="text-blue-400 text-bold" href="https://github.com/Mahmodul7314/Learn-Me-A12-Server-Side">Server Site Repo</a></li>
              </ul>

            </div>
            </div>
           </div>
           <div className="flex shadow-[0_0_10px_#374151] max-w-2xl mx-auto justify-center items-center bg-gray-700 rounded-xl p-10 my-8">
            <div
            className="bg-[#a3a1c0] mx-auto h-[200px] rounded-xl w-[200px] ease-in-out duration-[6000ms] bg-cover bg-top hover:bg-bottom"
            style={{
              backgroundImage:
              "url('https://i.ibb.co/2c2HkBf/screencapture-localhost-5173-2023-12-17-14-40-17.png')",
            }}
            >
            </div>
            <div className="">
            <div className="pl-6">
              <ul>
                <li>  <a className="text-blue-400 text-bold bordered" href="https://second-chin.surge.sh/">Live Site</a><br /></li>
                <li> <a className="text-blue-400 text-bold" href="hhttps://github.com/Mahmodul7314/feeding-bd-a11-client">Client Site Repo</a><br /></li>
                <li> <a className="text-blue-400 text-bold" href="https://github.com/Mahmodul7314/feeding-bd-a11-server">Server Site Repo</a></li>
              </ul>
            </div>

            </div>
           </div>
           </div>


            </div>
     
        </div>
    )
}

export default Portfolio;
