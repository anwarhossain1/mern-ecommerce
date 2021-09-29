import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAction } from "../../app/actions/userActions";
import Error from "../../components/Error/Index";
import Success from "../../components/Success/Index";
const Index = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.LoginUserReducer);
  const currentUser = userState.currentUser;
  const userUpdateState = useSelector((state) => state.updateUserReducer);
  const { loading, error, success } = userUpdateState;
  console.log(userState);

  const updateHandler = (e) => {
    e.preventDefault();
    if (cpassword == password) {
      const updateUser = {
        name: name,
        email: email,
        password: password,
      };
      dispatch(updateUserAction(updateUser, currentUser._id));
    } else {
      alert("Password Doesn't Match!");
    }
  };

  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <div className="row justify-content-center">
        <div className="col-md-3 card mt-5">
          <h1 className="text-center mt-5">Update Your Profile</h1>
          {error && <Error error={error} />}
          {success && (
            <Success success="Profile Updated Successfully. Please Try To Login." />
          )}

          <form onSubmit={updateHandler}>
            <div class="form-group mt-3 text-start text-primary">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                required
                id="exampleInputPassword1"
                placeholder={currentUser.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 text-start text-primary">
              <label>Email</label>
              <input
                required
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={currentUser.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group mt-1 text-start text-primary">
              <label>Password</label>
              <input
                required
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Input Your New Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="form-group mt-1 text-start text-primary">
              <label>Confirm Password</label>
              <input
                required
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Your New Password"
                onChange={(e) => setCpassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              class="btn btn-dark mb-3 mt-4"
              style={{
                width: "100%",
                backgroundColor: "#F6734A",
                borderBlock: "none",
                borderRadius: "12px",
              }}
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
