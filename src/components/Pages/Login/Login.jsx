import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin/SocialLogin";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
     
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
        console.log(data)
        login(data.email, data.password)
        .then(result=>{
            //console.log(result)
            if(result.user.providerId){
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'SuccessFully Register',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error=>{
            console.log(error)
        })
    };



    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row mt-14">
                    <div className="mr-7 w-full md:w-1/2">
                        <img src="https://img.freepik.com/free-vector/squirriel-with-microphone-park_1308-107502.jpg?w=740&t=st=1686514198~exp=1686514798~hmac=4b3aeabe23cc2c1a501a6089875edac9d23e2d50c9b1659fcc2f17c1a5a845b9" style={{ height: "900px" }} />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" >
                        <div className="card-body">
                            <h1 className='text-4xl text-center my-5 font-bold'>LOGIN</h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })}  type="text" placeholder="email" name="email" className="input input-bordered" />

                                    {errors.email?.type === 'required' && <p className="text-red-600 mt-2">Password is required</p>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text font-bold">Password</span>
                                    </label>
                                    <input {...register("password", { required: true })}  type={view ? "text" : "password"} placeholder="password" name="password" className="input input-bordered" />

                                    {errors.password?.type === 'required' && <p className="text-red-600 mt-2">Password is required</p>}

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