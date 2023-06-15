import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";


const stripePromise = loadStripe(import.meta.env.VITE_stripe_key)
const Payment = () => {
    const {id}=useParams()
    const [bookClass, setBookClass]=useState()
    useEffect (()=>{
            fetch(`http://localhost:3000/carts/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setBookClass(data)
            })            
    }, [id])
    
    console.log(bookClass)

    return (
            <div className='w-2/3'>
                <SectionTitle heading={'payment'}></SectionTitle>
                <h2>taka</h2>
                <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
    );
};

export default Payment;