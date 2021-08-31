import React, { useState, useEffect } from 'react';
import pokemon from '../pokemon.json';
export default function Pokemons() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(document.title = `You  ${count} times`);
    
  },[count]);

  return (
    <div>
       <table width="100%">
          <thead>
              <tr>
                <th>name</th>
                <th>name</th>
              </tr>
          </thead>
          <tbody>
            {pokemon.slice(0,20).map(poke=>(
                <tr key={poke.id}> 
                <td style={{textAlign:"center"}}>{poke.name.english}</td>
                <td style={{textAlign:"center"}}>{poke.type.join(", ")}</td>

              </tr>

            ))}
            
          </tbody>
          <tfoot></tfoot>
          </table>  
    </div>
  );
}