import React, { useState, useEffect } from 'react';
import { Calculator } from './temperatureCalculator';
import PT from 'prop-types'
export default function Example() {
  const [count, setCount] = useState(0);
 
  
  useEffect(() => {
    if(count===10){
      throw Error
    }
    console.log(document.title = `You  ${count} times which is less than 5`);
    
  },[count]);
  
  return (
    <div>
      <p>counter {count} times</p>
      <button  onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <Calculator/>
    </div>
  );
}
