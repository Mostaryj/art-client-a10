// import "swiper/swiper-bundle.css";
// import "animate.css";

const Banner = () => {
  return (
    <div className="mt-8 ">



<div className="carousel w-full md:h-[450px] rounded-lg  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="image/banner22.jpg" className="w-full " />
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <h1 className="relative md:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-white opacity-100   ">
            Enjoy your vacations <br />
            with us.
          </h1>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img  src="image/banner11.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <h1 className="relative md:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-white opacity-100   ">
            Enjoy your vacations <br />
            with us.
          </h1>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="image/banner3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <h1 className="relative md:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-white opacity-100   ">
            Enjoy your vacations <br />
            with us.
          </h1>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="image/banner1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <h1 className="relative md:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-white opacity-100   ">
            Enjoy your vacations <br />
            with us.
          </h1>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>




     
       
       
        
        
    </div>
  );
};

export default Banner;
