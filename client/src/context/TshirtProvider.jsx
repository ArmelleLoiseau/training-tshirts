import { useState, useEffect } from "react";
import TshirtContext from "./TshirtContext";
import APIHandler from "../../api/APIHandler";

const TshirtProvider = ({ children }) => {
  const [tshirts, setTshirts] = useState([]);

  useEffect(() => {
    APIHandler.get("/tshirts")
      .then((dbResponse) => {
        setTshirts((prevValue) => dbResponse.data);
      })
      .catch((e) => console.error(e));
  }, []);

  const tValues = {
    tshirts,
    setTshirts,
  };

  return (
    <TshirtContext.Provider value={tValues}>{children}</TshirtContext.Provider>
  );
};

export default TshirtProvider;
