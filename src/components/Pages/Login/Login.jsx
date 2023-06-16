import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import LoginImg from '../../../../public/login.json'
import { Helmet } from "react-helmet-async";

const Login = () => {
    const location=useLocation()
    const from=location.state?.pathname || "/"

    const navigate=useNavigate()
     
    //currentUser
    const {login}=useAuth()

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
    
    //view password
    const [view, setView] = useState(false)
    const handleViewPass = () => {
        setView(!view)
    }

    //hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        //console.log(data)
        login(data.email, data.password)
        .then(result=>{
            //console.log(result)
            if(result.user.providerId){
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'SuccessFully Login',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from)
            }
        })
        .catch(error=>{
            console.log(error)
        })
    };



    return (
        <div>
            <Helmet>
               <title>Harmony23|Login</title>
            </Helmet> 
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row mt-14">
                    <div className="mr-7 w-full md:w-1/2">
                    <Lottie animationData={LoginImg}></Lottie>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
                        <div className="card-body">
                            <h1 className='text-4xl text-center my-5 font-bold'>LOGIN</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })}  type="text" placeholder="email" name="email" className="input input-bordered input-secondary" />

                                    {errors.email?.type === 'required' && <p className="text-red-600 mt-2">Password is required</p>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input {...register("password", { required: true })}  type={view ? "text" : "password"} placeholder="password" name="password" className="input input-bordered input-secondary " />

                                    {errors.password?.type === 'required' && <p className="text-red-600 mt-2">Password is required</p>}

                                    <label className="absolute bottom-2 right-6" onClick={handleViewPass}>{view?<FaEye fontSize="2em"/>: <FaEyeSlash fontSize="2em"/>}</label>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                    <LoadCanvasTemplate />
                                    </label>
                                    <input onBlur={handleCaptcha} ref={captchaRef} type= "text" placeholder="write captcha" name="captcha" className="input input-bordered input-secondary " />
                                </div>

                                <div className="form-control mt-6">
                                    <button disabled={false} className="btn btn-primary">Login</button>
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