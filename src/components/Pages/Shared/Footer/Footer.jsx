
//raect Icon
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-24">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                <div className='flex items-center gap-4'>
                        <Link>
                            <img style={{ height: "50px", width: "50px" }} src="https://i.ibb.co/j8jPDqc/H.png" alt="" />
                        </Link>
                        <span className='text-3xl'>Harmony23</span>
                </div>
                    <p className='text-xl text-center font-semibold mt-3'>Music School Ltd.<br />Trusted Online Learning Platform</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a><FaFacebook color='blue' fontSize="3em" /></a>
                        <a><FaYoutube color='red' fontSize="3em" /></a>
                        <a><FaTwitter color='skyblue' fontSize="3em" /></a>
                    </div>
                </div>
            </footer>
            <div className='bg-base-200 text-base-content text-center p-5'>
                <p>Copyright © 2023 - All right reserved by Harmony23 Ltd.</p>
            </div>
        </div>
    );
};

export default Footer;