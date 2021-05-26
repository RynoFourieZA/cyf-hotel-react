import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import SearchResults from "./SearchResults";
import "./App.css";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />
      <TouristInfoCards />
      <Footer />
    </div>
  );
};

export default App;
