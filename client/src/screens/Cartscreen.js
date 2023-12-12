import { useSelector } from "react-redux";
// import { useState } from "react";

const Cartscreen = () => {
  const { cartItems } = useSelector((state) => state.addToCartReducer);
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-8">
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
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select value={item.quantity}>
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <i className="far fa-trash-alt"></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cartscreen;
