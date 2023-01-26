import React, {useEffect, useRef} from 'react';

export function App(props) {
  const defaultTab = useRef();

  let openPage = (e, pageName,color) => {
    var tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    [...tabcontent].map(item => item.style.display = "none");

    tablinks = document.getElementsByClassName("tablink");
    [...tablinks].map(item => item.style.backgroundColor = ""); 
    
    document.getElementById(pageName).style.display = "block";
    e.currentTarget.style.background = color;
  }
  useEffect(() => { defaultTab.current.click();}, [])

  return (
    <div className='App'>
      <button className="tablink" onClick={e => openPage(e, 'Home', 'red')}>Home</button>
      <button className="tablink" onClick={e => openPage(e, 'News', 'green')} ref={defaultTab}>News</button>
      <button className="tablink" onClick={e => openPage(e, 'Contact', 'blue')}>Contact</button>
      <button className="tablink" onClick={e => openPage(e, 'About', 'orange')}>About</button>

      <div id="Home" className="tabcontent">
        <h3>Home</h3>
        <p>Home is where the heart is..</p>
      </div>

      <div id="News" className="tabcontent">
        <h3>News</h3>
        <p>Some news e fine day!</p> 
      </div>

      <div id="Contact" className="tabcontent">
        <h3>Contact</h3>
        <p>Get in touch, or swing by for a cup of coffee.</p>
      </div>

      <div id="About" className="tabcontent">
        <h3>About</h3>
        <p>Who we are and what we do.</p>
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console')