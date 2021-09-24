import React from 'react';
import { Route ,useParams} from 'react-router-dom';

export default function Product() {
const params=useParams()
console.log(params)
  return (
    <div className="container">
      
       {/* <Route
      path="/blog/:slug"
      render={({ match }) => {
        
        // Do whatever you want with the match...
        return <div>I am products inside route</div >;
      }}
    /> */}

    <p>I am product</p>
    </div>
  )
}
