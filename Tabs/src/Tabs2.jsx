import React, { useState } from 'react';
/**
 * Created by sylvan quarm on 6/26/2023.
 * https://github.com/vanusquarm/react-ui-components/Tabs/src/Tabs2.jsx
 */
export default function Tabs(props) { // Refactor name to Tab and Tab to TabsHeader

  const [selectedTab, setSelectedTab] = useState(null);
  

  const tabList = [
    {"id":1,"name":"London","details":"London is the capital tab of England."},
    {"id":2,"name":"Paris","details":"Paris is the capital tab of France."},
    {"id":3,"name":"Tokyo","details":"Tokyo is the capital tab of Japan."}
  ]

  return (
 
    <div className='container'>
      <div className="tab">
        {tabList.map((tab, index) => {

          return <div key={index} onClick={() => setSelectedTab(index)} className={(index === selectedTab) ? "active":""}>{tab.name}</div>
        })
        }
      </div>
      
      <div className="tab-panel">
        
        {<div>
            <h3>{tabList[selectedTab]?.name}</h3>
            <p>{tabList[selectedTab]?.details}</p>
        </div>}
      </div>      
      
    </div>
   
  );
}
