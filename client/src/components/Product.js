import { Link } from "react-router-dom";
import Rating from "react-rating";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faStar as solidStar,
//   faStar as regularStar,
// } from "@fortawesome/free-regular-svg-icons";

const Product = ({ product }) => {
  return (
    <Link to={`product/${product._id}`} className="text-decoration-none">
      <img src={product.image} className="img-fluid" alt={product.name} />
      <h1>{product.name}</h1>
      <Rating
        initialRating={product.rating}
        empty="glyphicon glyphicon-heart-empty"
        full="glyphicon glyphicon-heart"
        readonly={true}
      />
      <h1>Price: {product.price}</h1>
    </Link>
  );
};

export default Product;
