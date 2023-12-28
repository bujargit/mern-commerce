import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../actions/userActions";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";
import { Link } from "react-router-dom";

const Registerscreen = () => {
  const { loading, error, success } = useSelector(
    (state) => state.registerNewUserReducer
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    if (password === cpassword) {
      dispatch(registerNewUser(user));
    } else {
      alert("Passwords not matched");
    }
  };
  return (
    <div className="py-3">
      <div className="row justify-content-center">
        <div className="col-md-5 card p-3" style={{ marginTop: "150px" }}>
          <div className="div">
            <h2 className="text-center">Register</h2>

            {loading && <Loader />}
            {error && <Error error="Email Address is already registered" />}
            {success && <Success success="Your registration is successfull" />}

            <form onSubmit={register}>
              <input
                type="text"
                placeholder="name"
                className="form-control"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="password"
                className="form-control"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="confirm password"
                className="form-control"
                required
                value={cpassword}
                onChange={(e) => {
                  setCPassword(e.target.value);
                }}
              />
              <div className="text-end">
                <button type="submit" className="btn mt-3">
                  Register
                </button>
              </div>
            </form>
          </div>
          <Link to="/login" className="m-3">
            Click here to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registerscreen;
