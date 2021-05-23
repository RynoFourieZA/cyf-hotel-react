import React from "react";

function SearchResults(props) {
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room id</th>
          <th scope="col">Check in date</th>
          <th scope="col">Check out date</th>
          <th scope="col">Night stayed</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          {props.map((input, index) => (
            <td key={props.index}>{props.input}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default SearchResults;
