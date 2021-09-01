import React from 'react';
interface Iprop{
  category:string
}
interface IState{
 
}
export default class ProductCategoryRow extends React.Component<Iprop,IState> {
  render() {
    const category = this.props.category;
    return (
      <div>
      <tr>
        <th style={{width:"2"}}>
          {category}
        </th>
      </tr>
      </div>
    );
  }
}