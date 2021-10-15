// @ts-nocheck
import React, { useState,useEffect } from "react";

const CurrencyExchange = () => {
  const currencies = ["PKR", "CNY", "AED", "AMD"];
  const [base, setBase] = useState("EUR");
  const [other, setOther] = useState("PKR");
  const [value, setValue] = useState(0);
  const [converted, setConverted] = useState(0);
//   const handleInputChange =  (e) => {
//     /// console.log(e.target.value)
//    setValue(e.target.value);
//     recalculate();
//   };
useEffect(() => {

 recalculate()
}, [value,base,other])

  const recalculate = () => {
    const cal = parseFloat(value);
    console.log(cal)
    if (isNaN(cal)) {
      return;
    }
    // http://api.currencylayer.com/live?access_key=b113dd3aad838a617158f452c59b7bef& source = USD
    fetch(`http://data.fixer.io/api/latest?access_key=22109a26c619daf629f0fdee4aa0c806&format=1`)
      .then((response) => response.json())
      .then((data) => {
        setConverted(data.rates[other] * cal);
      }).catch((error)=>{console.log(error)})
      
  };
  return (
    <div>
      <div>
        <select
          onChange={(e) => setBase(e.target.value)}
          name="base"
          value={base}
        >
       
            <option value={base}>
              {base}
            </option>
          
        </select>
        <input type="number" onChange={(e) =>setValue(parseFloat(e.target.value))} value={value} />
      </div>
      <div>
        <select
          onChange={(e) => setOther(e.target.value)}
          name="other"
          value={other}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input  disabled={true} value={converted} />
      </div>
    </div>
  );
};

export default CurrencyExchange;
