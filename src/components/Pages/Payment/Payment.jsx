import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_stripe_key)
const Payment = () => {
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