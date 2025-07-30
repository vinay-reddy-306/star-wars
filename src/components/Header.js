import React from "react";

const Header = ({ label }) => {
  return (
    <th style={{ cursor: "pointer" }}>
      {label}
    </th>
  );
};


export default Header;