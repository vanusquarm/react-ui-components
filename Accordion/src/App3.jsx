import React from "react";
import { sections } from "./data";

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
          <>
            <button key={i} className="accordion" onClick={(e) => showDetails(e)}>{section.summary}</button>
            <div className="panel"> <p>{section.detail}</p> </div>
          </>
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
