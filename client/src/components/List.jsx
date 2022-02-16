import React, {useEffect} from "react";
import APIHandler from "../../api/APIHandler";
import useTshirt from "../context/useTshirt";

const List = () => {
    const {tshirts} = useTshirt()
 
    if(!tshirts.length) return <p>Loading...</p>
  return <div className="list">
  {tshirts.map(t => {
      return (
          <div key={t._id} className="tshirt-card">
              <h3>{t.name}</h3>
              <img src={t.picture} alt={`T-shirt ${t.name}`} />
              <span>{t.price} &euro;</span>
          </div>
      )
  })}
  </div>;
};

export default List;
