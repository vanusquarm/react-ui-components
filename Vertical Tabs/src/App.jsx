import React, {useEffect} from 'react';

export default function App(props) {
  var i, tabcontent, tablinks, getCName;
  function openCity(evt, cityName) {
  
    [...tabcontent].map((item) => item.style.display = "none");
    [...tablinks].map((item) => item.className = item.className.replace(" active", ""))
    getCName(cityName);
    evt.currentTarget.className += " active";
  }

  useEffect(() => {
      tabcontent = document.getElementsByClassName("tabcontent");
      tablinks = document.getElementsByClassName("tablinks");
      getCName = (CName) => {
        return document.getElementById(CName).style.display = "block";
      }
      document.getElementById("defaultOpen").click();
    }
    ,[])

  return (
    <div className='container'>
      <div className="tab">
        <li className="tablinks" onClick={(e) => openCity(e, "London")} id="defaultOpen">London</li>
        <li className="tablinks" onClick={(e) => openCity(e, "Paris")}>Paris</li>
        <li className="tablinks" onClick={(e) => openCity(e, "Tokyo")}>Tokyo</li>
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
    </div>
  );
}

// Log to console
console.log('Hello console')
