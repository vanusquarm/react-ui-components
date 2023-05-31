import React from "react";
import { sections } from "./data";
/**
 * Created by sylvan quarm on 6/26/2023.
 */
function Accordion({sections}) {

  function showDetails(e) {
    e.currentTarget.classList.toggle("active");
    e.currentTarget.nextElementSibling.classList.toggle("active");
 
  }
    
  return (
    <>            
      <h2>Accordion</h2>
      
      {sections.map((section, i) => {
          
        return (
          <div key={i}>
            <button className="accordion" onClick={(e) => showDetails(e)}>{section.summary}</button>
            <div className="panel"> <p>{section.detail}</p> </div>
          </div>
        );
      })}

    </>
  );
}

export function App() {
  return (
    <Accordion sections={sections}/>
  );
}
