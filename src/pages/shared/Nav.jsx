import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import { renderToString } from "react-dom/server";



const Nav = () => {
  const { logOut, user } = useAuth();

  
  // console.log(user);

  const tooltipContent = <>
  {user?.displayName || "User name not found"}
 
  
  </>;
  const tooltipString = renderToString(tooltipContent);

  const navLinks = (
    <>
      <li className="font-semibold">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/allArt">All Art & Craft</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/addCraft">Add Craft Item</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/myArt">My Art&Craft List</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/register">Register</NavLink>
      </li>
     
    </>
  );
  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="navbar bg-base-200 border-b-2 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost sm:hidden "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="font-pop font-semibold lg:text-2xl  sm:flex items-center justify-center  bg-gradient-to-r from-cyan-400 to-violet-700  text-transparent bg-clip-text">
            <span>
              <img
                src="palette.png"
                alt=""
                className="w-10 h-10 hidden sm:block "
              />
            </span>
           Artz
          </a>
        </div>
        <div className="navbar-center  hidden sm:block md:flex lg:flex">
          <ul className="menu menu-horizontal   px-1 gap-4">{navLinks}</ul>
        </div>
        

        {user && (
          <div className="navbar-end gap-4">
            <div className="dropdown dropdown-end ">
              <label
                tabIndex={0}
                className="tooltip tooltip-bottom mr-4  btn btn-ghost  btn-circle avatar"
                data-tip={tooltipString}
              
              >
                <div className="w-12 rounded-full ">
                  <img
                    src={
                      user?.photoURL || 


                       "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                    
                  />
                      <button
                    className="btn absolute mt-8 right-0 bg-white p-2 rounded-md shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300"
                    onClick={logOut}
                  >
                    LogOut
                  </button>
                  {/* <div className="tooltip-content absolute bg-white p-2 rounded-md shadow-md hidden opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {user?.displayName || "User name not found"}
                    {user && <button onClick={logOut}>Logout</button>}
                  </div> */}
                </div>
               
              </label>

            </div>
          </div>
        )}

        <div className=" gap-4">
          <Link to="/login">
            {/* {user ? ( */}
              
              {/* <button
                onClick={logOut}
                className="btn bg-cyan-500 text-white"
              >
                LogOut
              </button> */}

            
             {/* ) 
             : ( */}
            
                <button
                //  onClick={logOut}
                 className="btn bg-cyan-500 text-white"
               >
                 Login
               </button>
            

             {/* )} */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
