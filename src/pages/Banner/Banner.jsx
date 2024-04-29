// import "swiper/swiper-bundle.css";
// import "animate.css";
// import { useLottie } from "lottie-react";
// import groovyWalkAnimation from "groovyWalk.json";

const Banner = () => {
 
  // const options = {
  //   animationData: groovyWalkAnimation,
  //   loop: true
  // };

  // const { View } = useLottie(options);

 
  return (
    <div className="mt-14 ">



<div className="carousel w-full md:h-[450px] rounded-lg  ">
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="banner2.jpg" className="w-full " />
   
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
   
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <h1 className="relative lg:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-blue-800 bg-white bg-opacity-50 w-[200px] md:w-[400px] lg:w[800px] md:h-20 lg:h-[150px]  rounded-xl p-2  lg:p-4">
            Welcome to Artz 
           
        

          </h1>
          
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img  src="img3.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <h1 className="relative lg:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-blue-800 bg-white bg-opacity-50 w-[200px] md:w-[400px] lg:w[800px] md:h-20 lg:h-[150px]  rounded-xl p-2  lg:p-4">
            Welcome to Artz 
           
          </h1>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="img1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <h1 className="relative lg:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-blue-800 bg-white bg-opacity-50 w-[200px] md:w-[400px] lg:w[800px] md:h-20 lg:h-[150px]  rounded-xl p-2  lg:p-4">
            Welcome to Artz 
           
          </h1>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="img.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <h1 className="relative lg:text-5xl text-xl text-center   font-pop top-1/2  font-bold text-blue-800 bg-white bg-opacity-50 w-[200px] md:w-[400px] lg:w[800px] md:h-20 lg:h-[150px]  rounded-xl p-2  lg:p-4">
            Welcome to Artz 
           
          </h1>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>



{/* {View} */}
     
       
        
        
    </div>
  );
};

export default Banner;
