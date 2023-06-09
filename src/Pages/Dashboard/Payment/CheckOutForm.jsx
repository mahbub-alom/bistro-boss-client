import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import './CheckOutForm.css'


const CheckOutForm = ({ price,cart }) => {
  const {user}=useAuth()
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId,setTransactionId]=useState('')

    useEffect(() => {
      if (price > 0) {
        axiosSecure.post("/create-payment-intent", { price }).then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
      }
    }, [price,axiosSecure]);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("Payment Method", paymentMethod);
    }
    setProcessing(true)

    const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'known',
            name:user?.displayName || 'anonymous'
          },
        },
      },
    )
    if(confirmError) {
      console.log(confirmError);
    }
    console.log('payment intent', paymentIntent);
    setProcessing(false)
    if(paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      //save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        data: new Date(),
        quantity: cart.length,
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuItemId),
        status: "service pending",
        itemsName: cart.map((item) => item.name),
      };
      axiosSecure.post("/payment", payment).then(res => {
        console.log(res.data);
        if(res.data.insertedId) {
          Swal.fire("Good job!", "Your Payment Successfully done!", "success");
        }
      });
    }

  };

  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm mt-4 btn-primary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: { transactionId}</p>}
    </>
  );
};

export default CheckOutForm;
