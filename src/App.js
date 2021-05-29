import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
// import SearchResults from "./SearchResults";
import "./App.css";
import Footer from "./Footer";
import Restaurant from "./Restaurant";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <Restaurant />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;
