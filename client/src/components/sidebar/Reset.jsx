import React from 'react'
import APIHandler from '../../../api/APIHandler'
import useTshirt from '../../context/useTshirt'

const Reset = () => {

    const {tshirts, setTshirts} = useTshirt()

   const handleClick = async () => {
       try {
           APIHandler.get("/tshirts")
           .then((dbResponse) => {
            setTshirts((prevValue) => dbResponse.data);
            })
            .catch((e) => console.error(e));
       } catch (error) {
           
       }
   }
    
  return (
    <div>
    <button onClick={handleClick}>Reset</button>
    </div>
  )
}

export default Reset