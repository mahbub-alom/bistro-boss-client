import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import useCart from '../../../Hooks/useCart';


const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_PK}`);
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle
            heading="Payment" subHeading="Please Process"
            ></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};
export default Payment;