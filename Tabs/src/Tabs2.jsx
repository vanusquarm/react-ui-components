import React, { useState } from 'react';
/**
 * Created by sylvan quarm on 6/26/2023.
 * https://github.com/vanusquarm/react-ui-components
 */
export default function Tabs(props) { 

  const [selectedTab, setSelectedTab] = useState(1);
  

  const tabList = [
    {"id":1,"name":"London","details":"London is the capital tab of England."},
    {"id":2,"name":"Paris","details":"Paris is the capital tab of France."},
    {"id":3,"name":"Tokyo","details":"Tokyo is the capital tab of Japan."}
  ]

  const tab = tabList.filter(tab => tab.id === selectedTab)[0];

  return (
 
    <div className='container'>
      <div className="tab">
        {tabList.map((tab, i) => {

          return <div key={i} onClick={() => setSelectedTab(tab.id)} className={(tab.id === selectedTab) ? "active":""}>{tab.name}</div>
        })
        }
      </div>
      
      <div className="tab-panel">
        
        {<div>
            <h3>{tab.name}</h3>
            <p>{tab.details}</p>
        </div> }
      </div>      
      
    </div>
   
  );
}
