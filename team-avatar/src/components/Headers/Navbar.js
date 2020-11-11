import React from "react";
import "./Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads



function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top p-3">
      <nav className="inline-text mt-3 ml-5">
        <h2>Avatar: The Last Match Game</h2>
      </nav>

    <nav className="collapse navbar-collapse mr-5" id="navbarText">
      <ul className="navbar-nav ml-md-auto">
        
        <li className="nav-item mr-2">
          <h3>Score: {props.score}  |</h3>
        </li>
        <li className="nav-item">
          <h3>High Score: {props.highscore}</h3>
        </li>
      </ul>
      <nav className="px-3"></nav>
    </nav>
  </nav>
  );
}

export default Navbar;
