import React, { useState } from "react";

const CustomerProfile = ({ id }) => {
  const [recordedId, setRecordedId] = useState([]);

  return <div>{id ? <p>Customer {id} profile</p> : null}</div>;
};

export default CustomerProfile;
