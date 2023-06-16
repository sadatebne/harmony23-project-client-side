import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";



const CheckoutForm = ({ item }) => {
    const { _id, price, name, course_id } = item
    console.log(name, _id, course_id)

    
    const { user } = useAuth()
    const stripe = useStripe();
    const [axiosSecure] = useAxiosSecure()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')


    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)

        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('')
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous',
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError)
        }

        console.log(paymentIntent)

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)

            const payment = {
                email: user?.email,
                price,
                courseName: name
            }
            axiosSecure.post('/payment', payment)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: 'top-middle',
                            icon: 'success',
                            title: 'Payment Successful',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        fetch(`http://localhost:3000/carts/${_id}`, {
                            method: 'DELETE'
                        })
                            .then(res => res.json())
                    }
                })

        }

    }

    return (
        <>
            <form className="w-full space-y-4 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-success" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 text-center">{cardError}</p>}

            {transactionId && <p className="text-green-600 text-center">Successfully Payment and TransactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;