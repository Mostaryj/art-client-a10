import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Error from "../error/Error";

import PrivateRoute from "../privateRoute/PrivateRoute";
import AllArt from "../components/AllArt";
import AddCraft from "../components/AddCraft";
import MyArt from "../components/MyArt";
import Details from "../components/Details/Details";
import Update from "../components/Update";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/art"),
      },
      {
        path: "/details/:id",
        element: 
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ,
        loader: ({ params }) => fetch(`http://localhost:5000/art/${params.id}`),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allArt",
        element: <AllArt></AllArt>,
        loader: () => fetch("http://localhost:5000/art"),
      },
      {
        path: "/addCraft",
        element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>,
      },
      {
        path: "/myArt",
        element: <PrivateRoute><MyArt></MyArt></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/art"),
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/art/${params.id}`),
      },
    ],
  },
]);
export default routes;
