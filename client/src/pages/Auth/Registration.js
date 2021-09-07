import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../../app/actions/userActions";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();
  const registerHandler = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    if (password === cpassword) {
      dispatch(registerNewUser());
    } else {
      alert(`password doesn't match`);
    }
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5 card mt-5">
          <h1 className="text-center mt-5">Create An Account</h1>
          <form onSubmit={registerHandler}>
            <div class="form-group mt-3">
              <input
                type="text"
                class="form-control"
                required
                id="exampleInputPassword1"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                required
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted mt-3">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group mt-1">
              <input
                required
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="form-group mt-3">
              <input
                required
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
                onChange={(e) => setCpassword(e.target.value)}
              />
              <small id="emailHelp" class="form-text text-muted">
                Use Atleast 8 characters
              </small>
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
              Register
            </button>
            <div>
              <label>
                Already a member? <a href="/login">Login</a>{" "}
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
