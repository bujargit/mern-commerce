import { useDispatch, useSelector } from "react-redux";
import { changeCartItemQuantity, deleteFromCart } from "../actions/cartActions";
import Checkout from "../components/Checkout";

const Cartscreen = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);
  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(changeCartItemQuantity(itemId, newQuantity));
  };

  const handleDelete = (itemId) => {
    dispatch(deleteFromCart({ _id: itemId }));
  };

  let subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="container-fluid">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-8 card">
          <h1 className="text-center m-5">My Cart</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item._id, parseInt(e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td>{item.quantity * item.price}</td>
                  <td>
                    <i
                      className="far fa-trash-alt"
                      onClick={() => handleDelete(item._id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
          <h2 className="text-center">SubTotal: {subtotal} &#8364;</h2>
          <hr />
          <Checkout amount={subtotal} />
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;
