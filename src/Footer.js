import React from "react";

function Footer() {
  let footerArr = [
    "123 Fake Street, London",
    "E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <footer
      className="card-body"
      className="footer-container"
      class="d-flex justify-content-center"
    >
      <ul>
        {footerArr.map((nameEl, index) => (
          <li class="card-text" key={index}>
            {" "}
            {nameEl}
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
