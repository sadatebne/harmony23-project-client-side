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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import PaymentHistory from "../Pages/DashBoard/Student/PaymentHistory/PaymentHistory";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'cartitems',
        element:<CartItems></CartItems>, 
      },
      {
        path:'payment',
        element:<PaymentHistory></PaymentHistory>,
        
      },
      {
        path:'cartitems/payment/:id',
        element:<Payment></Payment>, 
      },
      {
        path:'allclasses',
        element:<AdminRoute><AllClasses></AllClasses></AdminRoute> 
      },
      {
        path:'allusers',
        element:<AdminRoute><ManageUser></ManageUser> </AdminRoute>
      },
      {
        path:'addclass',
        element:<InstructorRoute><AddAClass></AddAClass></InstructorRoute> 
      },
      {
        path:'myclass',
        element:<InstructorRoute><MyClasses></MyClasses> </InstructorRoute>
      },
    ]
  }

]);

export default router