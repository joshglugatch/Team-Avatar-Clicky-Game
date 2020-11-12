import React from "react";
import "./Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header(props) {
  return (
    <header className="header">
      <h1>Welcome Last Airbender Fans!</h1>
      <br/>
      <h4 className="text-center text-white">Can you click all the images without repeating one?</h4>
      <br/>
      <h3 className="text-center text-white">{props.message}</h3>
    </header>
  );
}

export default Header;
