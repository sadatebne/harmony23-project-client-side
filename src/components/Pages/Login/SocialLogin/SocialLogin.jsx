import { FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
    return (
        <div>
            <div className="divider">OR</div>

            <div className='my-5 text-center'>
                <p className='text-2xl font-semibold mb-3'>Sign in With </p>
                <span>
                    <button className="btn btn-circle btn-outline">
                        <FaGoogle color='blue' fontSize="2em" />
                    </button>
                </span>
                <span className='ms-5'>
                    <button className="btn btn-circle btn-outline">
                        <FaGithub color='green' fontSize="2em" />
                    </button>
                </span>
            </div>
        </div>
    );
};

export default SocialLogin;