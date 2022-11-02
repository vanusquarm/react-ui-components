import React,{ useRef } from 'react';

export function App(props) {
  const x = useRef();
  function myFunction() {
    if (x.current.className === "topnav") {
      x.current.className += " responsive";
    } else {
      x.current.className = "topnav";
    }
  }
  return (
    <div className="topnav" id="myTopnav" ref={x}>
      <a href="#home" className="active">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <a href="#" className="icon" onClick={myFunction}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

// Log to console
console.log('Hello console')
