import React from "react";
/**
 * Created by sylvan quarm on 6/26/2023.
 */
export function App() {
  
  const sections = [
    {summary: "section 1", detail: "Lorem ipsum dolor sit amet, consectetur adipisicing elit"},
    {summary: "section 2", detail: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
    {summary: "section 3", detail: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
  ]

  function showDetails(e){
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
