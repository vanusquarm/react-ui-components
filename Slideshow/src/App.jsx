import React, {useEffect} from 'react';
import snowtopsImage from "./img_snowtops.jpg"
import lightsImage from "./img_lights.jpg"
import mountainsImage from "./img_mountains.jpg"
import forestImage from "./img_forest.jpg"


export function App(props) {
  let slideIndex = 0;
  function plusDivs(n) {
    slideIndex += n; // increment or decrement
 
    let slides = document.getElementsByClassName("mySlides");
    [...slides].map(item => item.style.display = "none");  // clear screen
    
    slideIndex = (slideIndex < 0) ? slides.length - 1: slideIndex % slides.length; 
 
    slides[slideIndex].style.display = "block";  // render a slide
    
  }
  useEffect(() => plusDivs(slideIndex),[]);
  return (
    <div className='App'> 
      <div>
        <img className="mySlides" src={snowtopsImage}/>
        <img className="mySlides" src={lightsImage}/>
        <img className="mySlides" src={mountainsImage}/>
        <img className="mySlides" src={forestImage}/>

        <button onClick={() => plusDivs(-1)}>&#10094;</button> 
        <button onClick={() => plusDivs(1)}>&#10095;</button>
      </div>
    </div>
  );
}

// Log to console
console.log('Hello consol')