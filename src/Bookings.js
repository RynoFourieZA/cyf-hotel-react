import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  console.log("First render: ", useEffect);
  console.log("The Bookings component: ", bookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };
  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        console.log("This is my data: ", data); //checking what my json file is
        setBookings(data);
      });
  }, []);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults bookings={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
