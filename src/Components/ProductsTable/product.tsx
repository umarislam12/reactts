// @ts-nocheck


import { useParams,withRouter,useLocation} from 'react-router-dom';


// {location:{state:{price,stocked,category}}}
function Product() {
const params=useParams();
const location=useLocation()
console.log("use location in products",location)
console.log("params in product",params)

 
  return (
    <div className="container">
      <h1>{params.productName}</h1>
      <h1>i am{location.state.category}</h1>
      <h2>I cost {location.state.price}</h2>

      
      

  
    </div>
  )
}
export default withRouter(Product);