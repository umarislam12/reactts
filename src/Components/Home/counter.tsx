// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Calculator } from './temperatureCalculator';
import PT from 'prop-types'
export default function Example() {
  let [count, setCount] = useState(0);
  
  
  useEffect(() => {
    const counter=localStorage.getItem("count");
    if(counter!==null){
      count=parseInt(count)
    }
    if(count===10){
      throw Error
    }
    console.log(document.title = `You  ${count} times which is less than 10`);
   
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
