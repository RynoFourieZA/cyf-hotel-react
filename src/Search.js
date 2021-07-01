import React, { useState } from "react";
import SearchButton from "./SearchButton";
import Heading from "./Heading";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  // console.log(search(searchInput));

  function handleSearchInput(event) {
    // console.log("Show me", event.target.value);
    return setSearchInput(event.target.value);
  }

  function handleOnSubmit(event) {
    event.preventDefault();

    search(searchInput);
  }

  return (
    <div className="search">
      <Heading />
      <div className="row search-wrapper">
        <div className="col">
          <form className="form-group search-box" onSubmit={handleOnSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Customer name"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
