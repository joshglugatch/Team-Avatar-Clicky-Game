import React from "react";
import "./charactercard.css";

 
// By importing the Section.css file, it is added to the DOM whenever this component loads
function CharacterCard(props) {
  return (
    
      
        <div className="p-3 col" >
          <img className="clickMe" data-id={props.id} onClick={props.handleClick} src={props.image} alt={props.name}/>
        </div> 
      
    
  );
}

export default CharacterCard;
