import React from "react";

function Footer() {
  let footerArr = [
    "123 Fake Street, London",
    "E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer className="card-body footer-container d-flex justify-content-center">
      <ul>
        {footerArr.map((nameEl, index) => (
          <li className="card-text" key={index}>
            {" "}
            {nameEl}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
