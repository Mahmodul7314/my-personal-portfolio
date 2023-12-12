
const Portfolio = () => {
    return (
        <div className="max-w-7xl bg-green-50">
            <div>
            <div className="py-10 text-center">
              {/* <div className="relative"><img className="w-full shadow-xl opacity-50 lg:h-4 h-10" src="../../../public/banner.webp" alt="" /></div> */}
            <div className=" lg:pl-[36rem] pl-[10rem] md:pl-[20rem]"><button className=" border-solid border-gray-700 px-4 py-2 border-2 text-xl font-extrabold flex justify-center">Portfolio</button></div>
           
           </div>
           <div className="lg:pl-[28rem] py-14">
           <div className="carousel w-[24rem]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="../../../public/learnme1.jpg" className="h-[60]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-info">❮</a> 
      <a href="#slide2" className="btn btn-circle btn-info">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="../../../public/learnme2.jpg" className="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle btn-info">❮</a> 
      <a href="#slide3" className="btn btn-circle btn-info">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="../../../public/learnme3.jpg" className="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-info">❮</a> 
      <a href="#slide4" className="btn btn-circle btn-info">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="../../../public/learnme4.jpg" className="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle btn-info">❮</a> 
      <a href="#slide5" className="btn btn-circle btn-info">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src="../../../public/az1.jpg" className="" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-info">❮</a> 
      <a href="#slide6" className="btn btn-circle btn-info">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src="../../../public/az2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle btn-info">❮</a> 
      <a href="#slide7" className="btn btn-circle btn-info">❯</a>
    </div>
  </div>
  <div id="slide7" className="carousel-item relative w-full">
    <img src="../../../public/az3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide6" className="btn btn-circle btn-info">❮</a> 
      <a href="#slide8" className="btn btn-circle btn-info">❯</a>
    </div>
  </div>
  <div id="slide8" className="carousel-item relative w-full">
    <img src="../../../public/az4.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide7" className="btn btn-circle btn-info">❮</a> 
      <a href="#slide1" className="btn btn-circle btn-info">❯</a>
    </div>
  </div>
</div>
           </div>



            </div>
     
        </div>
    )
}

export default Portfolio;
