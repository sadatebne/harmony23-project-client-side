import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading}=useAuth()

    const location=useLocation()

    if(loading){
        return   <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <span
          className="loading loading-bars loading-lg"
          style={{
            /* Add your loading spinner styles here */
            /* For example: */
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            animation: 'spin 1s linear infinite',
          }}
        ></span>
      </div>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}}></Navigate>
            
      
};

export default PrivateRoute;