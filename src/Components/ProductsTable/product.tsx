// @ts-nocheck
import queryString from 'query-string'

import React,{useState} from 'react';
import { useParams,withRouter,useLocation,useHistory} from 'react-router-dom';


// {location:{state:{price,stocked,category}}}
function Product(props) {
const params=useParams();
const location=useLocation()
console.log("use location.search in  products",location.search)
const qs=queryString.parse(props.location.search)
console.log("URL serch query in product", qs.name,qs.category,qs.price)
// console.log("props in product",props)
// const history=useHistory();
// console.log("I am history in product component",history);
//const {category,price}=history.location.state;
//  const [category, setCategory] = useState(history.location.state.category);
//  const [price, setPrice] = useState(history.location.state.price);
  return (
    <div className="container">
      <h1>{params.productName}</h1>
      <h1>i am{qs.category}</h1>
      <h2>I cost {qs.price}</h2>
    </div>
  )
}
export default withRouter(Product);