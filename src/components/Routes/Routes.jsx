import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ApproveClasses from "../Pages/Classes/ApproveClasses/ApproveClasses";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
              path: "/",
              element:<Home></Home> ,
            },
            {
              path: "/login",
              element:<Login></Login> ,
            },
            {
              path: "/register",
              element:<Register></Register> ,
            },
            {
              path: "/allclasses",
              element:<ApproveClasses></ApproveClasses> ,
            },
          ],
    },
    
]);

export default router