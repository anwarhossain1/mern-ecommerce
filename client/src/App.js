import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/index";
import Homepage from "./pages/Homepage/Index";
import ProductDescription from "./pages/ProductDescription/index";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Route path="/" component={Homepage} exact />
        <Route path="/product/:id" component={ProductDescription} />
      </BrowserRouter>
    </div>
  );
}

export default App;
