import React, { useState, useRef, useEffect } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setActiveIndex(null);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => document.body.removeEventListener("click", onBodyClick);
  }, []);

  const onTitleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });
  return (
    <div ref={ref}>
      <div className="ui styled accordion">{renderedItems}</div>
    </div>
  );
};

export default Accordion;
