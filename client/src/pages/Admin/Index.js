import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import AddNewProduct from "./AddNewProduct/Index";
import OrderList from "./OrderList/Index";
import ProductList from "./ProductList/Index";
import UsersList from "./UsersList/Index";
const Index = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <ul className="nav justify-content-center mt-5 text-bg-black">
            <li>
              <Link
                to="/admin/userslist"
                style={{ textDecoration: "none", color: "white" }}
              >
                Users List
              </Link>
            </li>
            <li>
              <Link
                to="/admin/productlist"
                style={{ textDecoration: "none", color: "white" }}
              >
                Product List
              </Link>
            </li>
            <li>
              <Link
                to="/admin/orderlist"
                style={{ textDecoration: "none", color: "white" }}
              >
                Order List
              </Link>
            </li>
            <li>
              <Link
                to="/admin/addnewproduct"
                style={{ textDecoration: "none", color: "white" }}
              >
                Add New Product
              </Link>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/admin/userslist" active component={UsersList} />
              <Route path="/admin/productlist" component={ProductList} />
              <Route path="/admin/orderlist" component={OrderList} />
              <Route path="/admin/addnewproduct" component={AddNewProduct} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
