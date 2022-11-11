import React from "react";

export function App() {

  function clickMe(e){
    e.currentTarget.classList.toggle("active");
    let panel = e.currentTarget.nextElementSibling;
    panel.style.display = (panel.style.display === "block")? "none": "block";
 
  }
  
    
  return (
  <>            
      <h2>Accordion</h2>

      <button className="accordion" onClick={(e) => clickMe(e)}>Section 1</button>
      <div className="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion" onClick={(e) => clickMe(e)}>Section 2</button>
      <div className="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="accordion" onClick={(e) => clickMe(e)}>Section 3</button>
      <div className="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </>
  );
}
