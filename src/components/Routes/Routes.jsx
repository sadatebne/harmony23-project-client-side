import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ApproveClasses from "../Pages/Classes/ApproveClasses/ApproveClasses";
import Dashboard from "../Layout/Dashboard";
import CartItems from "../Pages/DashBoard/Student/CartItems/CartItems";
import Payment from "../Pages/Payment/Payment";
import AllClasses from "../Pages/DashBoard/Admin/AllClasses/AllClasses";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/allclasses",
        element: <ApproveClasses></ApproveClasses>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path:'cartitems',
        element:<CartItems></CartItems> 
      },
      {
        path:'payment',
        element:<Payment></Payment> 
      },
      {
        path:'allclasses',
        element:<AllClasses></AllClasses> 
      },
    ]
  }

]);

export default router