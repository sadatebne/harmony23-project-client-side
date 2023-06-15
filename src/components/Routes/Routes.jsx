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
import ManageUser from "../Pages/DashBoard/Admin/ManageUser/ManageUser";
import AddAClass from "../Pages/DashBoard/Instructor/AddAClass/AddAClass";
import ShowInstructors from "../Pages/DashBoard/Instructor/ShowInstructors/ShowInstructors";
import MyClasses from "../Pages/DashBoard/Instructor/MyClasses/MyClasses";


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
        path: "/instructors",
        element: <ShowInstructors></ShowInstructors>,
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
        element:<CartItems></CartItems>, 
      },
      {
        path:'cartitems/payment/:id',
        element:<Payment></Payment>,
        // loader: ({params})=>(fetch(`http://localhost:3000/classes/${params.id}`)) 
      },
      {
        path:'allclasses',
        element:<AllClasses></AllClasses> 
      },
      {
        path:'allusers',
        element:<ManageUser></ManageUser> 
      },
      {
        path:'addclass',
        element:<AddAClass></AddAClass> 
      },
      {
        path:'myclass',
        element:<MyClasses></MyClasses> 
      },
    ]
  }

]);

export default router