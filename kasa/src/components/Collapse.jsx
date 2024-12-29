import React, { useEffect, useState } from "react";
import arrowUp from "../assets/arrow-up.png";

const Collapse = ({ title, content, className, isOpen, onToggle }) => {
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight("200px");
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className={`collapse ${className || ""}`}>
      <button className="collapse-header" onClick={onToggle}>
        {title}
        <img className={`collapse-icon`} src={arrowUp} alt="Fleche" />
      </button>

      <div className={`collapse-content`} style={{ maxHeight: height }}>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default Collapse;
