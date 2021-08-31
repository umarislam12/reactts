import * as React from 'react';

import ProductTable from './productTable';
import SearchBar from './searchBar';



export default class FilterableProductTable extends React.Component {
  constructor(props:any){
    super(props);
    this.state = {filterText: '', inStockOnly: false}
  }
  render(){
  return(<div>
    <SearchBar/>
   <ProductTable/>
   </div>
  )};
}