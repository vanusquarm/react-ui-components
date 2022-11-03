import React, {useState} from "react";
import "./App.css";

function App() {
  const [topnav, settopnav] = useState("topnav");
  function myFunction() {
    settopnav((topnav === "topnav") ? "topnav responsive" : "topnav");
  }
  
  return (
    <>
      <div className={topnav} id="myTopnav" >
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
        </a>
</div>


    </>
  );
}

export default App;
