import React from "react";
/**
 * Created by sylvan quarm on 6/26/2023.
 */
export function App() {

  function clickMe(e){
    e.currentTarget.classList.toggle("active");
    e.currentTarget.nextElementSibling.classList.toggle("active");
  }
    
  return (
  <>            
      <h2>Accordion</h2>

      <button className="summary" onClick={(e) => clickMe(e)}>Section 1</button>
      <div className="details">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="summary" onClick={(e) => clickMe(e)}>Section 2</button>
      <div className="details">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>

      <button className="summary" onClick={(e) => clickMe(e)}>Section 3</button>
      <div className="details">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </>
  );
}
