// @ts-nocheck


import { useParams,withRouter,useLocation} from 'react-router-dom';


// {location:{state:{price,stocked,category}}}
function Product(props) {
const params=useParams();
const location=useLocation()
console.log("use location.search in products",location.search)
console.log("props in product",props)

 
  return (
    <div className="container">
      <h1>{params.productName}</h1>
      <h1>i am{location.state.category}</h1>
      <h2>I cost {location.state.price}</h2>

      
      

  
    </div>
  )
}
export default withRouter(Product);