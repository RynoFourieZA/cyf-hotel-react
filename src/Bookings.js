import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const search = searchVal => {
    const newBookings = bookings;

    // console.info("TO DO!", searchVal);
    let filterBookings = newBookings.filter(customer => {
      if (
        searchVal.toLowerCase() === customer.firstName.toLowerCase() ||
        searchVal.toLowerCase() === customer.surname.toLowerCase()
      ) {
        return customer;
      }
    });

    setBookings(filterBookings);
  };

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
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
