import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const Loginscreen = () => {
  const { loading, error } = useSelector((state) => state.loginReducer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  return (
    <div className="py-3">
      <div className="row justify-content-center">
        <div className="col-md-4 card p-3" style={{ marginTop: "150px" }}>
          <div className="div">
            <h2 className="text-center">LOGIN</h2>

            {error && <Error error="Invalid Credentials" />}
            {loading && <Loader />}
            <form onSubmit={login}>
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
              <div className="text-end">
                <button type="submit" className="btn mt-3">
                  Login
                </button>
              </div>
            </form>

            <Link to="/register" className="m-3">
              Click here to Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginscreen;
