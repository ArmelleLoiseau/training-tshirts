import React from "react";
import useTshirt from "../../context/useTshirt";
import "./colors.css";

const colors = () => {
  const { tshirts, setTshirts } = useTshirt();

  let allColors = tshirts.map((t) => t.color);
  const colors = [...new Set(allColors)];

  const filterColors = (value) => {
    return tshirts.filter((tee) => tee.color === value);
  };

  const handleClick = (e) => {
    const color = e.target.style.backgroundColor;
    setTshirts(filterColors(color));
  };

  return (
    <div>
      <h3>Colors</h3>
      <div className="color-container">
        {colors.map((color, i) => {
          return (
            <div
              key={i}
              style={{ backgroundColor: color }}
              className="color-box"
              onClick={handleClick}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default colors;
