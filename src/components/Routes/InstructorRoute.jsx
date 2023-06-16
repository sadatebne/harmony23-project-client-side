import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useInstructor from "../../hooks/useInstructor";


const InstructorRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isInstructor, isInstructorLoading] = useInstructor()

    const location = useLocation()

    if (loading || isInstructorLoading) {
        return <div
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

    if (user && isInstructor) {
        return children;
    }

    return <Navigate to='/' state={{ from: location }}></Navigate>
};

export default InstructorRoute;

