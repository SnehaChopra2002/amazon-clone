// import { useSelector } from "react-redux";
// import "./Payment.css";
// import { RootState } from "../../redux/store";
// import { ArticleState } from "../../type";
// import CheckoutProduct from "../Checkout/CheckoutProduct";
// import { Link, useHistory } from "react-router-dom";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useEffect, useState } from "react";
// import axios from "../../axios";
// import { StripeCardElement } from "@stripe/stripe-js";

// const Payment = () => {
//   const user = useSelector((state: RootState) => state.user.currentUser);
//   const products = useSelector((state: ArticleState) => state.articles);
//   const totalPrice = products.reduce((sum, prod) => sum + prod.price, 0);

//   const stripe = useStripe();
//   const elements = useElements();
//   const history = useHistory();

//   const [error, setError] = useState("");
//   const [disabled, setDisabled] = useState(true);
//   const [processing, setProcessing] = useState(false);
//   const [succeeded, setSucceeded] = useState(false);
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // generate the special stripe secret which allows us to charge the customer
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: "post",
//         url: `/payment/create?total=${totalPrice}*100`,
//       });
//       setClientSecret(response.data.clientSecret);
//     };
//     getClientSecret();
//   }, [products]);

//   //   const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
//   //     // here we do all the stripe ...
//   //     event.preventDefault();
//   //     setProcessing(true);

//   //     const payload = await stripe
//   //       ?.confirmCardPayment(clientSecret, {
//   //         payment_method: {
//   //           card: elements?.getElement(CardElement),
//   //         },
//   //       })
//   //       .then(({ paymentIntent }) => {
//   //         // paymentIntent means payment confirmation
//   //         setSucceeded(true);
//   //         setProcessing(false);

//   //         history.replace("/orders");
//   //       });

//   //     // const payload=await stripe
//   //   };

//   const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
//     // here we do all the stripe ...
//     event.preventDefault();
//     setProcessing(true);

//     let cardElement;
//     if (elements) {
//       cardElement = elements.getElement(CardElement);
//       if (!cardElement) {
//         // Handle the case when card element is null or undefined
//         setError("Card element is not available");
//         setProcessing(false);
//         return;
//       }
//     } else {
//       // Handle the case when elements is not available
//       setError("Stripe elements are not available");
//       setProcessing(false);
//       return;
//     }

//     const payload = await stripe
//       ?.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//         },
//       })
//       .then(({ paymentIntent }) => {
//         // paymentIntent means payment confirmation
//         setSucceeded(true);
//         setProcessing(false);

//         history.replace("/orders");
//       })
//       .catch((error) => {
//         // Handle error
//         setError(error.message);
//         setProcessing(false);
//       });
//   };

//   const handleChange = (event: any) => {
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "");
//   };
//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>Checkout {<Link to="/ckeckout">{products?.length} items</Link>}</h1>

//         {/* Delivery section */}
//         <div className="payment__section delivery">
//           <div className="payment__title">
//             <h3>Delivery Address</h3>
//           </div>
//           <div className="payment__address">
//             <p>{user?.email}</p>
//             <p>React Lane</p>
//             <p>Mumbai, Maharashtra</p>
//           </div>
//         </div>

//         {/* Review Section */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Review items and delivery</h3>
//           </div>
//           <div className="payment__items">
//             {products.map((prod) => (
//               <CheckoutProduct
//                 key={prod.id}
//                 id={prod.id}
//                 title={prod.title}
//                 price={prod.price}
//                 image={prod.image}
//                 rating={prod.rating}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Payment Method</h3>
//           </div>
//           <div className="payment__details">
//             {/* Stripe magic */}
//             <form onSubmit={handleSubmit}>
//               <CardElement onChange={handleChange} />

//               <div className="payment__priceContainer">
//                 <h3>Order Total: ${totalPrice}</h3>
//               </div>

//               <button disabled={processing || disabled || succeeded}>
//                 <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
//               </button>

//               {/* Error */}
//               {error && <div>{error}</div>}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;


import { useSelector } from "react-redux";
import "./Payment.css";
import { RootState } from "../../redux/store";
import { ArticleState } from "../../type";
import CheckoutProduct from "../Checkout/CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios from "../../axios";

const Payment = () => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const products = useSelector((state: ArticleState) => state.articles);
  const totalPrice = products.reduce((sum, prod) => sum + prod.price, 0);

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Generate the special stripe secret which allows us to charge the customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${totalPrice * 100}`, // Corrected typo here
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [products, totalPrice]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);
  
    if (!stripe || !elements) {
      setError("Stripe.js has not loaded properly.");
      setProcessing(false);
      return;
    }
  
    const cardElement = elements.getElement(CardElement);
  
    if (!cardElement) {
      setError("Card element is not available");
      setProcessing(false);
      return;
    }
  
    try {
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });
  
      // Payment confirmation
      setSucceeded(true);
      setProcessing(false);
  
      history.replace("/orders");
    } catch (error:any) {
      // Handle error
      setError(error.message);
      setProcessing(false);
    }
  };  

  const handleChange = (event: any) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout <Link to="/checkout">{products?.length} items</Link> {/* Corrected typo here */}
        </h1>

        {/* Delivery section */}
        <div className="payment__section delivery">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>React Lane</p>
            <p>Mumbai, Maharashtra</p>
          </div>
        </div>

        {/* Review Section */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {products.map((prod) => (
              <CheckoutProduct
                key={prod.id}
                id={prod.id}
                title={prod.title}
                price={prod.price}
                image={prod.image}
                rating={prod.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <h3>Order Total: ${totalPrice}</h3>
              </div>

              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>

              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
