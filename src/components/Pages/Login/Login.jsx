import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {

    const [disable, setDisable] = useState(true)

    //captcha
    useEffect(()=>{
        loadCaptchaEnginge(6);
    },[])

    const captchaRef = useRef(null)

    //handle captcha
    const handleCaptcha = () => {
        const captcha = captchaRef.current.value

        if (validateCaptcha(captcha) == true) {
            setDisable(false)
        }
        else {
            alert('Captcha Does Not Match');
            setDisable(true)
        }
    }

    const [view, setView] = useState(false)

    const handleViewPass = () => {
        setView(!view)
    }

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row mt-14">
                    <div className="mr-7 w-full md:w-1/2">
                        <img src="https://img.freepik.com/free-vector/boy-playing-trumpet-music-melody-symbols_1308-106948.jpg?w=740&t=st=1686512195~exp=1686512795~hmac=896788ecc2edc9c380ff66c41d18cc872269e1ef532e3e7304e2215045474c8a" style={{ height: "900px" }} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
                        <div className="card-body">
                            <h1 className='text-4xl text-center my-5 font-bold'>LOGIN</h1>
                            <form className="space-y-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input type={view ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" />

                                    <label className="absolute bottom-2 right-6" onClick={handleViewPass}>{view?<FaEye fontSize="2em"/>: <FaEyeSlash fontSize="2em"/>}</label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                    <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleCaptcha} ref={captchaRef} type= "text" placeholder="write captcha" name="captcha" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button disabled={disable} className="btn btn-primary">Login</button>
                                </div>
                            </form>

                            <SocialLogin></SocialLogin>
                            <p>Have an account?<span className='text-[#FF3811]'><Link to='/register'> Sign Up</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;