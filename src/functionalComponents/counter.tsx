import React, { useState, useEffect } from 'react';
import { Calculator } from './temperatureCalculator';

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(document.title = `You  ${count} times`);
    
  },[count]);

  return (
    <div>
      <p>Lasdsadsadas {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <Calculator/>
    </div>
  );
}