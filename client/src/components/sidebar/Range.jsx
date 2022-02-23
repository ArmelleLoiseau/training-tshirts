import React, { useState } from "react";
import useTshirt from "../../context/useTshirt";

const Range = () => {
  const { tshirts, setTshirts } = useTshirt();
  const maxPrice = Math.max(...tshirts.map((t) => t.price));

  const [inputPrice, setInputPrice] = useState(maxPrice);
  const [value, setValue] = useState(maxPrice);

  const filterPrice = (value) => {
    return tshirts.filter((t) => t.price >= value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    setInputPrice(e.target.value);
    setTshirts(filterPrice(e.target.value));
  };

  return (
    <div>
      <label htmlFor="price">Price max</label>
      <input
        type="range"
        min="0"
        max={maxPrice}
        value={value}
        id="price"
        name="price"
        onChange={handleChange}
      />
      <p>{inputPrice}&nbsp;€</p>
    </div>
  );
};

export default Range;
