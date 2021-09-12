import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterProducts } from "../../app/actions/productActions";

const Index = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");
  const [category, setCatagory] = useState("all");

  const dispatch = useDispatch();
  console.log(search + sort + category);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-2 mt-4 ml-2">
          <input
            type="text"
            placeholder="Search Products"
            className="form-control"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className="col-md-2 mt-4 ml-2">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
            }}
          >
            <option value="popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </select>
        </div>
        <div className="col-md-2 mt-4 ml-2">
          <select
            className="form-control"
            value={category}
            onChange={(e) => {
              setCatagory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashions">Fashions</option>
            <option value="mobiles">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </div>
        <div className="col-md-1 mt-4">
          <button
            className="btn"
            style={{
              width: "150px",
              backgroundColor: "gray",
              color: "whitesmoke",
            }}
            onClick={() => {
              dispatch(filterProducts(search, sort, category));
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
