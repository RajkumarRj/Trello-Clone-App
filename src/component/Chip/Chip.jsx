import React from "react";
import { X } from "react-feather";

const Chip = (props) => {
  const { item, removelabel } = props;
  return (
    <div>
      <label style={{ backgroundColor: item.color, color: "#fff" }}>
        {item.text}
        {removelabel && <X onClick={() => removelabel(item)} />}
      </label>
    </div>
  );
};

export default Chip;
