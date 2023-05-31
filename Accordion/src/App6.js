import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSections } from "./store/actions/appActions";
/**
 * Created by sylvan quarm on 6/26/2023.
 */
function Accordion({sections}) {

  function showDetails(e) {
    e.currentTarget.classList.toggle("active");
    e.currentTarget.nextElementSibling.classList.toggle("active");
 
  }
    
  return (
    <>            
      <h2>Accordion</h2>
      
      {sections?.map((section, i) => {
          
        return (
          <div key={i}>
            <button className="accordion" onClick={(e) => showDetails(e)}>{section.summary}</button>
            <div className="panel"> <p>{section.detail}</p> </div>
          </div>
        );
      })}

    </>
  );
}

export function App() {
  const dispatch = useDispatch();                               // useSelector and useDispatch replaces const [state, setState] = useState()

  let sections = useSelector(store => store.appState.sections); // appState is provided by store via the reducer

  useEffect(() => {
    dispatch(getSections())                                    // similar to setSections
  }, [dispatch])
  

  return (
    <Accordion sections={sections}/>
  );
}
