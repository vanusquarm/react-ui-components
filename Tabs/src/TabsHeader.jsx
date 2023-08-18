import { navigate } from '@reach/router';
/**
 * Created by sylvan quarm on 6/26/2023.
 * https://github.com/vanusquarm/react-ui-components
 */

export default function TabSummary({isActive, tab, setSelectedTab}){
    
  function openTab(evt, tabId) {   // alternative: obtain the id from the event object
    navigate(`/cities/${tabId}`); // create a dynamic URL. Alternative: create list items with attached Links (static)
    setSelectedTab(tabId);
  }

  return(
    <div className={isActive ? "active" : ""} onClick={(e) => openTab(e, tab.id)} >{tab.name}</div>
  );

}
