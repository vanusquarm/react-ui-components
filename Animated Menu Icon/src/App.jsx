import React from 'react';

export function App(props) {

  return (
    <div className='App'>
      <p>Click on the Menu Icon to transform it to "X":</p>
      <div className="container" onClick={e => e.currentTarget.classList.toggle("change")}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console')