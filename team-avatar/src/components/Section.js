import React from "react";
import "../styles/Section.css";
import Aang from "./images/aangImg200.jpg"
import Appa from "./images/appaImg200.jpg"
import Azula from "./images/azulaImg200.jpg"
import Bumi from "./images/bumiImg200.jpg"
import Iroh from "./images/irohImg200.jpg"
import Jet from "./images/jetImg200.jpg"
import Katara from "./images/kataraImg200.jpg"
import Momo from "./images/momoImg200.jpg"
import Sokka from "./images/sokkaImg200.jpg"
import Suki from "./images/sukiImg200.jpg"
import Toph from "./images/tophImg200.jpg"
import Zuko from "./images/zukoImg200.jpg"
 
// By importing the Section.css file, it is added to the DOM whenever this component loads
function Section() {
  return (
    <section className="section container">
      
      
        
          <div className="row">
            <div className="image m-3 col" ><img className="clickMe" src={Aang} alt=""/></div>
            <div className="image m-3 col" ><img className="clickMe" src={Appa} alt=""/></div>
            <div className="image m-3 col" ><img className="clickMe" src={Azula} alt=""/></div>
            <div className="image m-3 col" ><img className="clickMe" src={Bumi} alt=""/></div>
          </div>
          <div className="row">
            <div className="image m-3 col" ><img className="clickMe" src={Iroh} alt=""/></div>
            <div className="image m-3 col" ><img className="clickMe" src={Jet} alt=""/></div>
            <div className="image m-3 col" ><img className="clickMe" src={Katara} alt=""/></div>
            <div className="image m-3 col" ><img className="clickMe" src={Momo} alt=""/></div>
          </div>
          <div className="row">
            <div className="image m-3 col" ><img className="clickMe" src={Sokka} alt=""/></div>
            <div className="image m-3 col" ><img className="clickMe" src={Suki} alt=""/></div>
            <div className="image m-3 col" ><img className="clickMe" src={Toph} alt=""/></div>
            <div className="image m-3 col" ><img className="clickMe" src={Zuko} alt=""/></div>
          </div>
          
      
    </section>
  );
}

export default Section;
