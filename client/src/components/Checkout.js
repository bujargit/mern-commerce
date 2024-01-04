import StripeCheckout from "react-stripe-checkout";
import { useDispatch } from "react-redux";
import { placeOrder } from "../actions/orderActions";

const Checkout = ({ amount }) => {

  const dispatch = useDispatch()
  const tokenHandler = (token) => {
    // console.log(token);
    dispatch(placeOrder(token, amount))

  };
  return (
    <div>
      <StripeCheckout
        token={tokenHandler}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        shippingAddress
        amount={amount * 10}
        currency="EUR"
      >
        <button className="btn">PAY NOW</button>
      </StripeCheckout>
    </div>
  );
};

export default Checkout;
