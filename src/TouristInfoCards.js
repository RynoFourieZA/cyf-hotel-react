import React from "react";

function TouristInfoCards() {
  return (
    <div className="card-group">
      <div className="card">
        <img
          src="https://peoplemakeglasgow.com/images/Things_to_do/Top_attractions/Main-image-995.JPG"
          className="card-img-top"
          alt="Glasgow Tower"
        />
        <div className="card-body">
          <h5 className="card-title">Glasgow Visitor Information</h5>
          <p className="card-text">
            Glasgow Life delivers services on behalf of Glasgow City Council to
            both citizens and visitors to the city, providing opportunities
            through culture, sport and learning.
          </p>
          <a
            href="https://peoplemakeglasgow.com/images/Things_to_do/Top_attractions/Main-image-995.JPG"
            className="btn btn-primary"
          >
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://eu-assets.simpleview-europe.com/manchester2016/imageresizer/?image=%2Fdmsimgs%2FVisit_Manchester_-_new_train_image_Marketing_-_1220x619_-_Fleet_1450125440.jpg&action=ProductDetailFullWidth2"
          className="card-img-top"
          alt="TransPennie Express"
        />
        <div className="card-body">
          <h5 className="card-title">Manchester Visitor Information</h5>
          <p className="card-text">
            Whatever brings you to Manchester, Visit Manchester is here to make
            sure that you get the most out of your trip. When you’re in the
            city, make sure to drop by our Visitor Information Centre. Here you
            can get tourist information on how to best shape your visit, as well
            as maps, merchandise and discounted tickets to some of the most
            popular attractions and tourist spots.{" "}
          </p>
          <a href="https://visitmanchester.com" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/kew-gardens/kew-gardens-bridge.jpg?mw=640&hash=18C6FCF8FA6D06AE21D27B34E9F2BACB167B60B1"
          className="card-img-top"
          alt="101 things to do outdoors in London"
        />
        <div className="card-body">
          <h5 className="card-title">London Visitor Information</h5>
          <p className="card-text">
            Welcome to London! Discover the best of London with Visit London,
            the official guide to England’s exciting capital. Find things to do
            in London, from iconic sightseeing spots and fun-filled days out to
            top restaurants, theatre and unmissable London events. If you’re not
            able to visit just yet, plan ahead to make the most of your next
            visit.
          </p>
          <a href="https://visitlondon.com" className="btn btn-primary">
            More information
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
