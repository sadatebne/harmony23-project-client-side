import ErrorImg from '../../../../public/error.json'
import Lottie from "lottie-react";

const ErrorPage = () => {



    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <div style={{ width: "50%" }}>
                <Lottie animationData={ErrorImg}></Lottie>
            </div>
        </div>

    );
};

export default ErrorPage;