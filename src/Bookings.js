import React from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
import Data from "./data/fakeBookings.json";

const Bookings = () => {
  console.log("The Bookings component: ", Data);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults data={Data} />
      </div>
    </div>
  );
};

export default Bookings;
