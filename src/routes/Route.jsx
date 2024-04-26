import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../error/Error";
// import Details from "../pages/detailsCard/Details";
// import UserProfile from "../profile/UserProfile";
// import UPdateProfile from "../profile/UPdateProfile";
// import About from "../pages/about/About";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AllArt from "../components/AllArt";
import AddCraft from "../components/AddCraft";
import MyArt from "../components/MyArt";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        // {
        // path: '/details/:id',      
        // element: <PrivateRoute><Details></Details></PrivateRoute>,
        //  loader: () => fetch("/fakeData/fakeData.json"),
        // },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
        },
        {
          path: "/allArt",
          element: <AllArt></AllArt>
        },
        {
          path: "/addCraft",
          element: <AddCraft></AddCraft>
        },
        {
          path: "/myArt",
          element: <MyArt></MyArt>
        },

       
      ]
    },
  ]);
  export default routes;

  