// @ts-nocheck
import React, { useState } from 'react';

const CurrencyExchange = () => {
    const currencies = ["AUD", "PKR", "USD", "CNY"]
    const [base, setBase] = useState("USD")
    const [other, setOther] = useState("EUR");
    const [value, setValue] = useState(0);
    const [converted, setConverted] = useState(0)
    
    return (
        <div>
            <div>
                <select onChange={()=>setBase} name="base" value={base}>{currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}</select>
                <input onChange={handleInputChange} type="number" value={value}/>
            </div>
            <div>
                <select onChange={handleInputChange} name="other" value={base}>{currencies.map(currency => <option key={currency} value={currency}>{currency}</option>)}</select>
                <input onChange={handleInputChange} type="number" value={converted}/>
            </div>

        </div>
    );
    
}

export default CurrencyExchange;
