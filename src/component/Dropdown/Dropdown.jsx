import React, { useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  const dropdownRef = useRef();

  const handleClick = (e) => {
    if (
      dropdownRef &&
      !dropdownRef.current?.contains(e.target) &&
      props.onClose
    ) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [props.onClose]);
  return (
    <div
      ref={dropdownRef}
      className={`dropdown custom-scroll ${props.class ? props.class : ""}`}
    >
      {props.children}
    </div>
  );
};

export default Dropdown;
