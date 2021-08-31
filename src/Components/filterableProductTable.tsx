// @ts-nocheck
import * as React from 'react';

import ProductTable from './productTable';
import SearchBar from './searchBar';

// type PRODUCTS={
//   category: string,
//   price: string,
//   stocked: boolean,
//   name: string,
// }

export default class FilterableProductTable extends React.Component <{}, {products:PRODUCTS}>{
  constructor(props:any){
    super(props);
    //this.state = {filterText: '', inStockOnly: false}
  }
  render(){
  return(<div>
    <SearchBar/>
   <ProductTable />
   </div>
  )};
}