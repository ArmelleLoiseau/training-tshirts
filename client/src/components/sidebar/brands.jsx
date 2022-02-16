import React from 'react'
import useTshirt from '../../context/useTshirt'

const brands = () => {
    const {tshirts, setTshirts} = useTshirt()
    let filteredBrands = [];

   
    // uniquify the array of brands
    // const filteredBrands = allBrands.filter((brand, idx) => allBrands.indexOf(brand) === idx)
    const allBrands = tshirts.map(t => {return t.brand})
    filteredBrands = [...new Set(allBrands)];
    
    // get tshirts by their brand
    const filterTshirt = (value) => {
       return tshirts.filter(t => t.brand === value)
    }

    // handle click event => filter tshirts
    const handleClick = (e) => {
        e.preventDefault;
        const value = e.target.value;
        setTshirts(filterTshirt(value))
    }


    return (
    <div>
    <h3>brands
    {filteredBrands.map((brand, i) => {
        return (
            <div key={i} >
                <input type="radio" name="brand" value={brand} id={brand} onChange={handleClick}/>
                <label htmlFor={brand}>{brand}</label>
            </div>
        )
    })}
    </h3>
    </div>
  )
}

export default brands