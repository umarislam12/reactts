import React, { useState, useEffect } from 'react';
import { Calculator } from './temperatureCalculator';
import PropTypes from 'prop-types'
export default function Example() {
  const [count, setCount] = useState(0);
  Example.propTypes = {
   theme: PropTypes.string
  }
  
  useEffect(() => {
    if(count===5){
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
Example.propTypes = {
  theme: PropTypes.string
 }