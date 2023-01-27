import React from 'react';

export function App(props) {
  function openCity(evt, cityName) {
    var tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    [...tabcontent].map(item => item.style.display = "none");
    
    tablinks = document.getElementsByClassName("tablinks");
    [...tablinks].map(item => item.className = item.className.replace(" active", ""));
    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  return (
    <div className='App'>
      <h2>Hover Tabs</h2>
      <p>Move the mouse over a button inside the tabbed menu:</p>

      <div className="tab">
        <button className="tablinks" onMouseOver={e => openCity(e, 'London')}>London</button>
        <button className="tablinks" onMouseOver={e => openCity(e, 'Paris')}>Paris</button>
        <button className="tablinks" onMouseOver={e => openCity(e, 'Tokyo')}>Tokyo</button>
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

      <div className="clearfix"></div>
    </div>
  );
}

// Log to console
console.log('Hello console')