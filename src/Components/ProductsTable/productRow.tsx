 //@ts-nocheck
import { withRouter } from "react-router";

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

// console.log("props in product row", props)
  
    //const product = products;
    const name = props.products.stocked ?
      props.products.name :
      <span style={{color: 'red'}}>
        {props.products.name}
      </span>;
const handleClick=()=>{
props.history.push(`${props.match.url}/${props.products.name}`,{price,category,stocked})
}
    return (
    
      <tr onClick={handleClick} style={{cursor:'pointer'}}>
         
        <td>{props.products.name}</td>
        <td>{props.products.price}</td>
      </tr>
    
    );
  }

export default withRouter(ProductRow)