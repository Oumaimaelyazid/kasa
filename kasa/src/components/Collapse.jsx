import React, { useEffect, useState } from "react";
import arrowUp from "../assets/arrow-up.png";

const Collapse = ({ title, content }) => {
  const [isVisible, setVisible] = useState(false);
  const [collapseHeight, setCollapseHeight] = useState("51px");

  useEffect(() => {
    if (isVisible) {
      setCollapseHeight("200px");
    } else {
      setCollapseHeight("51px");
    }
  }, [isVisible]);

  const toggleCollapse = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="collapse" style={{ height: collapseHeight }}>
      <button className="collapse-header" onClick={toggleCollapse}>
        {title}
        <img
          className={`collapse-icon ${isVisible ? "rotate" : ""}`}
          src={arrowUp}
          alt="Fleche"
        />
      </button>

      <div className="collapse-content">
        <p>{content}</p>
      </div>
    </div>
  );
};
export default Collapse;
