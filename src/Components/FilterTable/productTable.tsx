import * as React from 'react';
import ProductRow from './productRow';

import ProductCategoryRow from './productCategoryRow';
export interface PRODUCTS{
  category: string,
  price: string,
  stocked: boolean,
  name: string,
}
interface IProps{
  filterText:string;
  inStockOnly:boolean;
  products:[]
}




export default class ProductTable extends React.Component <IProps> {
  render(){

    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows :any = [];
    let lastCategory:any = null;
    this.props.products.forEach((product:any)=>{
      if(product.name.indexOf(filterText)===-1){
        return
      }
      if(inStockOnly&&!product.stocked){
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
        rows.push(
          <ProductRow
          filterText={filterText}
          inStockOnly={inStockOnly}
            products={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
    }
    
    )
    return (
      <div style={{ height: 400, width: '100%' }}>
     <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      </div>
    );
  }
  
}