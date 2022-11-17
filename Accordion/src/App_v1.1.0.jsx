import React, {useRef, useEffect} from "react";
import "./App.css"

export default function App() {
  //state is managed by redux hence no component state specified
  function clickMe(e){
    e.currentTarget.classList.toggle("active");
    let panel = e.currentTarget.nextElementSibling;
    panel.style.display = (panel.style.display === "block")? "none": "block";
 
  }
  // json data from database
  let response = {data: [{"subject":"Maths","details":""},{"subject":"Science","details":""},{"subject":"English","details":""},{"subject":"Chemistry","details":""},{"subject":"Biology","details":""},{"subject":"Physics","details":""}]}
  
  //Parsing response to extract useful data
  let subjects = response.data.map(item => item.subject);
  //let details = 

  //Data decoration using html
  let subjectsState = subjects.map(subject => (
    // return this component. 
    // Alternatively, you can create a functional component and import
    <>
      <button className="accordion" onClick={(e) => clickMe(e)}>{subject}</button>
      <div className="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </>
  ));
    
  return (
  <>            
     {subjectsState}
    </>
  );
}
