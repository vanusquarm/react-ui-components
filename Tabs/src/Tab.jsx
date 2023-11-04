import React, { useEffect, useState } from 'react';
import TabBody from './TabBody';
import TabHeader from './TabHeader';
/**
 * Created by sylvan quarm on 6/26/2023.
 * https://github.com/vanusquarm/react-ui-components
 */
export default function Tab(props) { // Refactor name to Tab and Tab to TabsHeader

  const [selectedTab, setSelectedTab] = useState(1);

  const cities = [
    {"id":1,"name":"London","details":"London is the capital tab of England."},
    {"id":2,"name":"Paris","details":"Paris is the capital tab of France."},
    {"id":3,"name":"Tokyo","details":"Tokyo is the capital tab of Japan."}
  ]

  return (
 
    <div className='container'>
      <div className="tab">
        {cities.map((tab, i) => {
          const isActive = tab?.id === selectedTab;
          return <TabHeader key={i} isActive={isActive} tab={tab} setSelectedTab={setSelectedTab}/>
        })
        }
      </div>
      
      <div className="tabcontent">
        <TabBody tabId={selectedTab} /> 
      </div>      
      
    </div>
   
  );
}
