import React, {useRef } from 'react';

export function App(props) {
  const _default = useRef();
  //_default.current.style.display = "block";
  function openCity(evt) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.querySelectorAll(".tablinks li");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(evt.currentTarget.innerText).style.display = "block";
  evt.currentTarget.className += " active";
}
  return (
    <>
      <div className="tab">
        <ul className="tablinks">
          <li  onClick={openCity}>London</li>
          <li  onClick={openCity}>Paris</li>
          <li  onClick={openCity}>Tokyo</li>
        </ul>
      </div>

      <div id="default" ref={_default} className="tabcontent">
        <p style={{textAlign: "center"}}>Select conversation to start chatting</p>
      </div>

      <div id="London" className="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" className="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p> 
      </div>

      <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>

    </>
  );
}

// Log to console
console.log('Hello console')
