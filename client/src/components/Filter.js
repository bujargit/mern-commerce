import { useState } from "react";
import { useDispatch } from "react-redux";
import { filteredProducts } from "../actions/productActions";

const Filter = () => {
  const [searchKey, setSearchKey] = useState("");
  const [sort, setSort] = useState("popular");
  const [category, setCategory] = useState("all");

  const dispatch = useDispatch();

  return (
    <div className="filter__wrapper">
      <div className="row justify-content-center">
        <div className="col-md-2">
          <input
            value={searchKey}
            onChange={(e) => {
              searchKey(e.target.value);
            }}
            type="text"
            placeholder="search products"
            className="form-control"
          />
        </div>
        <div className="col-md-2">
          <select
            className="form-control"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="popular">Popular</option>
            <option value="htl">High to Low</option>
            <option value="lth">Low to High</option>
          </select>
        </div>
        <div className="col-md-2">
          <select
            className="form-control"
            calue={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="mobiles">Mobiles</option>
            <option value="games">Games</option>
          </select>
        </div>
        <div className="col-md-2">
          <button
            className="btn"
            onClick={() => {
              dispatch(filteredProducts(searchKey, sort, category));
            }}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
