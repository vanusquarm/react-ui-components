import React,{ useRef } from 'react';

export function App(props) {
  const x = useRef();
  function myFunction() {
    x.current.className = (x.current.className === "topnav") ? "topnav responsive" : "topnav";
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
