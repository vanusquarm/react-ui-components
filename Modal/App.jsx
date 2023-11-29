import React, {useState} from 'react';
/**
 * Created by sylvan quarm on 12/26/2023.
 * https://github.com/vanusquarm/react-ui-components/accordion/
 */

export function App(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='App'>
      <h2>Modal Example</h2>

      <button id="myBtn" onClick={() => setShowModal(curr => !curr)}>Open Modal</button>

      {showModal && <div id="myModal" className="modal">

        <div className="modal-content">
          <span className="close" onClick={() => setShowModal(curr => !curr)}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>

      </div>}
    </div>
  );
}
