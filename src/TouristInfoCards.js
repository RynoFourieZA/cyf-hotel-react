import React from "react";

function TouristInfoCards() {
  return (
    <div className="card">
      <img
        src="https://pbs.twimg.com/media/E1mPZrSXEAY-XzR?format=png&name=small"
        className="card-img-top"
      />
      <div className="card-body">
        <p>
          Glasgow Life delivers services on behalf of Glasgow City Council to
          both citizens and visitors to the city, providing opportunities
          through culture, sport and learning
        </p>
        <a href="#" className="btn btn-primary">
          More Information
        </a>
      </div>
    </div>

    // {/* <table class="table">
    //   <thead class="thead-dark">
    //     <tr>
    //       <th scope="col">#</th>
    //       <th scope="col">First</th>
    //       <th scope="col">Last</th>
    //       <th scope="col">Handle</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row">1</th>
    //       <td>Mark</td>
    //       <td>Otto</td>
    //       <td>@mdo</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">2</th>
    //       <td>Jacob</td>
    //       <td>Thornton</td>
    //       <td>@fat</td>
    //     </tr>
    //     <tr>
    //       <th scope="row">3</th>
    //       <td>Larry</td>
    //       <td>the Bird</td>
    //       <td>@twitter</td>
    //     </tr>
    //   </tbody>
    // </table> */}
  );
}

export default TouristInfoCards;
