import { useContext } from "react";
import TshirtContext from "./TshirtContext";

const useTshirt = () => {
  return useContext(TshirtContext);
};

export default useTshirt;
