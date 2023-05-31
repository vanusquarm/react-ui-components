import React, {useState, useEffect} from "react";
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
  useEffect(() => getSections(), []);

  const getSections = () => {
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(json => {
      let newSections = json.results.map(result => (
        {"summary": result.name.first, "detail": (result.name.title +" "+ result.name.first +" "+ result.name.last)} 
      ))
      setSections([...sections, ...newSections])
    })
  }

  return (
    <Accordion sections={sections}/>
  );
}
