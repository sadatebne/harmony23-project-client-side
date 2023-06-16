import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";



const stripePromise = loadStripe(import.meta.env.VITE_stripe_key)
const Payment = () => {
    //const{user, loading}=useAuth()
    const {id}=useParams()
    console.log(id)
    const [bookClass, setBookClass]=useState([])
    useEffect (()=>{
            fetch(`http://localhost:3000/carts/${id}`)
            .then(res=>res.json())
            .then(data=>{
                setBookClass(data)
            })            
    }, [id])
     

    return (
            <div className='w-2/3'>
                <SectionTitle heading={'payment'}></SectionTitle>
                <h2>taka</h2>
                <Elements stripe={stripePromise}>
                    {
                        bookClass.map(item=><CheckoutForm key={item.p_id} item={item}></CheckoutForm>)
                    }
                
                </Elements>
            </div>
    );
};

export default Payment;