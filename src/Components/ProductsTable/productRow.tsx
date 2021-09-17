// @ts-nocheck

import React from "react";

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

export default class ProductRow extends React.Component<IProps> {
  render() {
    const product = this.props.products;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
     
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    
    );
  }
}
