// @ts-nocheck
import { withRouter } from "react-router";
import React from "react";
import { Route } from "react-router";
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

 function ProductRow (props,{history}){
 console.log(props)
  
    //const product = products;
    const name = props.products.stocked ?
      props.products.name :
      <span style={{color: 'red'}}>
        {props.products.name}
      </span>;
const handleClick=()=>{
history.push(`/${props.producs.name}`)
}
    return (
    
      <tr onClick={handleClick}>
         
        <td>{props.products.name}</td>
        <td>{props.products.price}</td>
      </tr>
    
    );
  }

export default withRouter(ProductRow)