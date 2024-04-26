import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../Hook/useAuth";

const Root = () => {
  

const {  loading } = useAuth();
if(loading){
   return <div className="flex justify-center mt-10 items-center"><span className="loading loading-spinner loading-lg "></span></div>

 }

  return (
    <div>
     
      <div className="max-w-6xl mx-auto p-2">
        <Outlet></Outlet>
     
      </div>
      <div>
        <Footer></Footer>
      </div>
      <ToastContainer></ToastContainer>

    </div>
  );
};

export default Root;
