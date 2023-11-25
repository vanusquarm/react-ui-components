import React, { useEffect, useState } from 'react';
import TabsBody from './TabsBody';
import TabsHeader from './TabsHeader';
/**
 * Created by sylvan quarm on 6/26/2023.
 * https://github.com/vanusquarm/react-ui-components
 */
export default function Tabs(props) { // Refactor name to Tab and Tab to TabsHeader

  const [selectedTab, setSelectedTab] = useState(1);
  

  const cities = [
    {"id":1,"name":"London","details":"London is the capital tab of England."},
    {"id":2,"name":"Paris","details":"Paris is the capital tab of France."},
    {"id":3,"name":"Tokyo","details":"Tokyo is the capital tab of Japan."}
  ]

  const tabBody = cities.filter(tab => tab.id === selectedTab)[0];

  return (
 
    <div className='container'>
      <div className="tab">
        {cities.map((tab, i) => {

          return <div key={i} onClick={() => setSelectedTab(tab.id)} className={(tab.id === selectedTab) ? "active":""}>{tab.name}</div>
        })
        }
      </div>
      
      <div className="tabcontent">
        
        {<div>
            <h3>{tabBody.name}</h3>
            <p>{tabBody.details}</p>
        </div> }
      </div>      
      
    </div>
   
  );
}
