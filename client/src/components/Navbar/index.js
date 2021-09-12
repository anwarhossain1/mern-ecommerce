import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Index() {
  const dispatch = useDispatch();
  const addtocartreducer = useSelector((state) => state.addToCartReducer);
  const { cartItems } = addtocartreducer;
  const loginUser = JSON.parse(localStorage.getItem("currentUser"));
  console.log(loginUser);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <a className="navbar-brand" href="#">
              .amarbazarr
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {loginUser ? (
                // <li className="nav-item text-white mt-2">
                //   <a>{loginUser.name}</a>
                // </li>
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    {loginUser.email}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/profile">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/orders">
                        Orders
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item">Logout</a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/login"
                  >
                    Login
                  </a>
                </li>
              )}

              <li className="nav-item">
                <a className="nav-link" href="/cartdetails">
                  <i class="fas fa-cart-plus"></i>
                  {cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
