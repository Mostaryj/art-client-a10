import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
// import error from "../assets/error.jpg"

const Error = () => {
  return (
    <div className="">
      {/* <Helmet>
        <title>Luxury Retreats | error</title>
      </Helmet> */}
      
      <div className="flex flex-col m-2 md:m-10 md:ml-20 md:mr-20 border-2 bg-slate-300 h-[300px] justify-center items-center">
        <h1 className="text-center font-bold lg:text-5xl mb-4">
          404 <br />
          Page not found <br /> Enter the right path
        </h1>
        <Link to="/">
          <button className="btn bg-blue-800 text-white">Go Back</button>
        </Link>
      </div>
     {/* <img src={error} alt="" 
      className="w-[550px] h-[300px] border-2 mt-4 rounded-lg mb-4 mx-auto"
     /> */}
     
    </div>
  );
};

export default Error;
