import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../app/actions/userActions";
import Error from "../../components/Error/Index";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  //login page will not show up if already user logged in
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);
  const loginHandler = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    console.log("hello");
    dispatch(loginUser(user));
    // if (password === cpassword) {

    // } else {
    //   alert(`password doesn't match`);
    // }
  };

  const loginreducer = useSelector((state) => state.LoginUserReducer);
  const { error, loading } = loginreducer;
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <div className="row justify-content-center">
        <div className="col-md-3 card mt-5">
          <h1 className="text-center mt-5">Login</h1>

          {error && <Error error="Invalid Cradentials" />}
          <form onSubmit={loginHandler}>
            <div className="form-group mt-3 mb-3">
              <input
                required
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group mt-1 mb-3">
              <input
                required
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              class="btn btn-dark mb-3"
              style={{
                width: "100%",
                backgroundColor: "#F6734A",
                borderBlock: "none",
              }}
            >
              Login
            </button>
            <div>
              <label>
                Don't Have An Account? <a href="/register">Register</a>{" "}
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
