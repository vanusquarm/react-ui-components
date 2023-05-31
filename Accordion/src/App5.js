import React, {useState, useEffect} from "react";
import { getSections } from "./api/app";
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
  const [sections, setSections] = useState([]);
  useEffect(() => { 
    getSections().then(json => {
      let newSections = json.results.map(result => (
        {"summary": result.name.first, "detail": (result.name.title +" "+ result.name.first +" "+ result.name.last)} 
      ));
      setSections(prevSections => [...prevSections, ...newSections]);
    })}, []);

  return (
    <Accordion sections={sections}/>
  );
}
