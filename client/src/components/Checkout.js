import StripeCheckout from "react-stripe-checkout";

const Checkout = ({ amount }) => {
  const tokenHandler = (token) => {
    console.log(token);
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
