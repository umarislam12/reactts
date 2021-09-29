 //@ts-nocheck
import { useLocation, withRouter } from "react-router";
import queryString from 'query-string'
export interface PRODUCTS{
  category: string,
  price: string,
  stocked: boolean,
  name: string,
}
interface IProps{
  filterText:string;
  inStockOnly:boolean;
  products:any;
  key:any;
}

 function ProductRow (props:IProps){
const{price, category,stocked}=props.products;
//const query=new URLSearchParams(props.location.search);
const qs=queryString.parse(props.location.search)
console.log("URL serch params in product row", qs.name)
  
    //const product = products;
    const name = props.products.stocked ?
      props.products.name :
      <span style={{color: 'red'}}>
        {props.products.name}
      </span>;  
      const parsed={};
      parsed.name=name;
      parsed.category=category;
      parsed.price=price;
      console.log(parsed)
      const stringified = queryString.stringify(parsed);
      console.log("stringified in product",stringified);
const handleClick=()=>{
  
props.history.push(`${props.match.url}/${props.products.name}?${stringified}`)
}
    return (
      
  
      <tr onClick={handleClick} style={{cursor:'pointer'}}>
         
        <td>{props.products.name}</td>
        <td>{props.products.price}</td>
      </tr>
     
    );
  }

export default withRouter(ProductRow)