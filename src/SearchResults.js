import React, { useState } from "react";
import moment from "moment";
import "./App.css";

// var a = moment([2007, 0, 29]);
// var b = moment([2007, 0, 28]);
// a.diff(b, 'days') // 1
// console.log("a-b", a.diff(b, 'days'));

function SearchResults({ bookings }) {
  const [color, setColor] = useState([]);

  function onClickColor(id) {
    if (color.includes(id)) {
      setColor(color.filter(el => el !== id));
    } else {
      setColor(color.concat(id));
    }
  }

  moment(bookings.checkInDate);
  moment(bookings.checkOutDate);
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col" className="checkInDate">
            Check in date
          </th>
          <th scope="col" className="checkOutDate">
            Check out date
          </th>
          <th scope="col" className="nightStayed">
            Night stayed
          </th>
        </tr>
      </thead>
      <tbody>
        {bookings.map((dataEl, index) => {
          // Storing  dates in a variable, adding the moments.js library and using the .diff() to compare dates
          return (
            <tr
              key={index}
              style={
                color.includes(dataEl.id)
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "white" }
              }
              onClick={() => onClickColor(dataEl.id)}
            >
              <th scope="row">{dataEl.id}</th>
              <td>{dataEl.title}</td>
              <td>{dataEl.firstName}</td>
              <td>{dataEl.surname}</td>
              <td>{dataEl.email}</td>
              <td>{dataEl.roomId}</td>
              <td>{dataEl.checkInDate}</td>
              <td>{dataEl.checkOutDate}</td>
              <td>
                {moment(dataEl.checkOutDate).diff(
                  moment(dataEl.checkInDate),
                  "days"
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SearchResults;
