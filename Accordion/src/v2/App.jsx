import React, {useState, useEffect} from "react";
/**
 * Created by sylvan quarm on 6/26/2023.
 * https://github.com/vanusquarm/react-ui-components/accordion/
 */

const items = [
  {
    summary: 'Accordion Item 1',
    details: 'Content for Accordion Item 1',
  },
  {
    summary: 'Accordion Item 2',
    details: 'Content for Accordion Item 2',
  },
  {
    summary: 'Accordion Item 3',
    details: 'Content for Accordion Item 3',
  },
];

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex ? 'active' : '';

    return (
      <div key={index}>
        <div className={`summary ${isActive}`} onClick={() => onTitleClick(index)}>
          {item.summary}
        </div>
        <div className={`details ${isActive}`}>
          {item.details}
        </div>
      </div>
    );
  });

  return <div className="summary">{renderedItems}</div>;
}



export function App() {
  return (
    <div>
      <h1>Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
}
