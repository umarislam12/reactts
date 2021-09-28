// @ts-nocheck
import { connect } from 'react-redux';
import * as React from 'react';
// import PRODUCT from "../../routing/enter"
import ProductTable from './productTable';
import SearchBar from './searchBar';

import {toggleStock} from "../../redux/productSlice";

export interface PRODUCTS{
  category: string,
  price: string,
  stocked: boolean,
  name: string,
}
export interface IProps{ 
  products:[]
}
  
interface IState{
  filterText:string;
  inStockOnly:boolean;
}
export const ThemeContext = React.createContext('light');

export class FilterableProductTable extends React.Component <IProps, IState>{

  
  constructor(props:any){
    super(props);
    this.state= {filterText: '', inStockOnly: false}
   
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }
 
  handleFilterTextChange(filterText:any) {
    
    this.setState({
      filterText: filterText
    });
  }
  handleInStockChange(inStockOnly:any) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }
  
  render(){
    // const {prods} = this.props.prods;
    console.log("I have",this?.props?.prods?.instock);
  return(<div>
    <ThemeContext.Provider value="dark">
        <SearchBar
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        onFilterTextChange={this.handleFilterTextChange}
        onInStockChange={this.handleInStockChange}
        />
          <ProductTable  
          productId={this.props.productId}
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
      </ThemeContext.Provider>
      
      <h1>we have{this.props?.prods}</h1>
      <h1>we have{this.props?.todos}</h1>
      <button onClick={this.props.prods}>toggleme</button>
   </div>
  )};
}
const mapStateToProps = (state) => {
  // const {prods}=state;
  console.log("We have in filterable product table",state);
  return{
    prods:state?.prods,
    todos:state.todos


}
}
// const mapDispatchToProps=dispatch=>{

// return {
//   //filterProducts:(e)=>dipatch(filterProducts(e)),
  
//   toggleStock:(e)=>dispatch(toggleStock(e))
// }
// }
export default connect(mapStateToProps)(FilterableProductTable);