// @ts-nocheck
import { connect } from 'react-redux';
import * as React from 'react';
// import PRODUCT from "../../routing/enter"
import ProductTable from './productTable';
import SearchBar from './searchBar';
//import {filterProducts,toggleStockOnly} from "../../redux/productSlice"
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
   
    console.log(this.props.prods);
  return(<div>
    <ThemeContext.Provider value="dark">
        <SearchBar
        filterText={this.state.filterText}
        inStockOnly={this.state.inStockOnly}
        onFilterTextChange={this.handleFilterTextChange}
        onInStockChange={this.handleInStockChange}
        />
          <ProductTable  
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}/>
      </ThemeContext.Provider>
   </div>
  )};
}
// const mapStateToProps = (state:any) => ({
//   prods: state.products
// });
// export default connect(mapStateToProps,{filterProducts,toggleStockOnly})(FilterableProductTable);