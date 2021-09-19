import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/index";
import Homepage from "./pages/Homepage/Index";
import ProductDescription from "./pages/ProductDescription/index";
import { BrowserRouter, Route } from "react-router-dom";
import Cartpage from "./pages/CartPage/Index";
import LoginPage from "./pages/Auth/LoginPage";
import Registration from "./pages/Auth/Registration";
import Orders from "./pages/Orders/Index";
import OrdersDescription from "./pages/OrdersDescription/Index";
import Profile from "./pages/Profile/Index";
import Admin from "./pages/Admin/Index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Route path="/" component={Homepage} exact />
        <Route path="/product/:id" component={ProductDescription} />
        <Route path="/cartdetails" component={Cartpage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={Registration} />
        <Route path="/orders" component={Orders} />
        <Route
          path="/ordersdescription/:orderid"
          component={OrdersDescription}
        />
        <Route path="/profile" component={Profile} />
        <Route path="/admin" component={Admin} />
      </BrowserRouter>
    </div>
  );
}

export default App;
