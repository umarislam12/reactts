 // @ts-nocheck 

import { render } from '@testing-library/react';
import React,{useRef,useState,createRef} from 'react'
import { useEffect } from 'react';
import ContentEditable from 'react-contenteditable'

export default class MyComponent extends React.Component{
  constructor(props){
    super(props);
      this.txt=createRef();
      this.table=createRef();
      this.saleLineTable=createRef();
      this.linkPlus=createRef();
      this.totalTable=createRef();
    this.state={
      initialState:"<address ><p>Some Company<br/>c/o Some Guy</p></address>",
      initialTable:"<table ><tr> <th><span >Invoice #</span></th><td><span >101138</span></td></tr><tr><th><span >Date</span></th><td><span >January 1, 2012</span></td></tr><tr><th><span >Amount Due</span></th><td><span  >$</span><span>600.00</span></td></tr></table>",
      initialSaleLineTable:"<table ><thead><tr><th><span >Item</span></th><th><span >Description</span></th><th><span >Rate</span></th><th><span >Quantity</span></th><th><span >Price</span></th></tr></thead><tbody><tr  > <td><a >-</a><span contentEditable suppressContentEditableWarning={true}>Front End Consultation</span></td><td><span  >Experience Review</span></td><td><span data-prefix>$</span><span >150.00</span></td><td><span >4</span></td><td><span data-prefix>$</span><span>600.00</span></td></tr></tbody></table>",
      // initialLink:"<a onClick={addrows}>+</a>",
      initialTotalTable:"<table ><tbody><tr><th><span contentEditable suppressContentEditableWarning={true}>Total</span></th><td><span data-prefix>$</span><span>600.00</span></td></tr><tr><th><span contentEditable suppressContentEditableWarning={true}>Amount Paid</span></th><td><span data-prefix>$</span><span contentEditable suppressContentEditableWarning={true}>0.00</span></td></tr><tr ><th><span contentEditable suppressContentEditableWarning={true}>Balance Due</span></th><td><span data-prefix>$</span><span>600.00</span></td></tr></tbody></table>"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange= this.handleChange.bind(this);
  }


  //using useref
//   let initialState="<address ><p>Some Company<br/>c/o Some Guy</p></address>";
//   let initialtable="<table ><tr> <th><span >Invoice #</span></th><td><span >101138</span></td></tr><tr><th><span >Date</span></th><td><span >January 1, 2012</span></td></tr><tr><th><span >Amount Due</span></th><td><span  >$</span><span>600.00</span></td></tr></table>"
//   let initialSaleLineTable="<table ><thead><tr><th><span >Item</span></th><th><span >Description</span></th><th><span >Rate</span></th><th><span >Quantity</span></th><th><span >Price</span></th></tr></thead><tbody><tr  > <td><a >-</a><span contentEditable suppressContentEditableWarning={true}>Front End Consultation</span></td><td><span  >Experience Review</span></td><td><span data-prefix>$</span><span >150.00</span></td><td><span >4</span></td><td><span data-prefix>$</span><span>600.00</span></td></tr></tbody></table>"
//   let initialLink="<a onClick={addrows}>+</a>"
//   let initialTotalTable="<table ><tbody><tr><th><span contentEditable suppressContentEditableWarning={true}>Total</span></th><td><span data-prefix>$</span><span>600.00</span></td></tr><tr><th><span contentEditable suppressContentEditableWarning={true}>Amount Paid</span></th><td><span data-prefix>$</span><span contentEditable suppressContentEditableWarning={true}>0.00</span></td></tr><tr ><th><span contentEditable suppressContentEditableWarning={true}>Balance Due</span></th><td><span data-prefix>$</span><span>600.00</span></td></tr></tbody></table>"
//   const text = useRef(initialState);
//   const table = useRef(initialtable);
//   const saleLineTable=useRef(initialSaleLineTable);
//   const totalTable=useRef(initialTotalTable);

// const linkplus=useRef(initialLink);
  // console.log(text.current);
   // const compnay = useRef('company Or Person');
    //this.contentEditable = React.createRef();
    // const [address,setAddress]=useState(
    //   initialState
    
    // )
  

 handleChange = e => {
    // let nam=evt.target.name;
    // let val=e.target.value;
    console.log(e.target.tagName, 'some tag name');

    this.setState({
      ...this.state,
      initialState:e.target.value,
      })
    };
  handleTableChange = e => {
    // let nam=evt.target.name;
    // let val=e.target.value;
    console.log(e.target.value, 'some tag name');

    this.setState({
      ...this.state,
      initialTable:e.target.value,
      })
    };
    handleSaleLineChange = e => {
      // let nam=evt.target.name;
      // let val=e.target.value;
      console.log(e.target.value, 'some tag name');
  
      this.setState({
        ...this.state,
        initialSaleLineTable:e.target.value,
        })
      };
      handleLinkPlusChange = e => {
        // let nam=evt.target.name;
        // let val=e.target.value;
        console.log(e.target.value, 'some tag name');
    
        this.setState({
          ...this.state,
          initialLink:e.target.value,
          })
        };
        handleTotalTableChange = e => {
          // let nam=evt.target.name;
          // let val=e.target.value;
          console.log(e.target.value, 'some tag name');
      
          this.setState({
            ...this.state,
            initialTotalTable:e.target.value,
            })
          };
          // const inputEl = useRef(null);
          // addrows=()=>{
          //   saleLineTable.current.insertAdjacentHTML("afterend", "		<td><a ></a><span >Front End Consultation</span></td><td><a ></a><span >Experience Review</span></td><td><span data-prefix>$</span><a ></a><span >150.00</span></td><td><a ></a><span  >4</span></td><td> <span data-prefix>$</span><a ></a><span >600.00</span></td>");
          // }

handleSubmit=(e)=>{
e.preventDefault();
console.log(this.txt.current);
console.log(this.table.current);
// console.log(table.current);
// console.log(saleLineTable.current)
// console.log(linkplus.current)
// console.log(totalTable.current)
}
  render(){
    return (
    
      <form onSubmit={this.handleSubmit}> <article><h1 > Recipient</h1>
      
      {/* <input type='text' placeholder='Enter company or name'
            onChange={handleChange} name='companyOrNaem'/> */}
      <ContentEditable
             innerRef={this.txt}
              html={this.state.initialState} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
              className="meta"
             
            />
       <ContentEditable
              innerRef={this.table}
             html={this.state.initialTable} // innerHTML of the editable div
             disabled={false}       // use true to disable editing
             onChange={this.handleTableChange} // handle innerHTML change
             tagName='article' // Use a custom HTML tag (uses a div by default)
             className="meta"
            
             style={{"backgrounColor":"red"}}
             
           />
              <ContentEditable
             innerRef={this.saleLineTable}
             html={this.state.initialSaleLineTable} // innerHTML of the editable div
             disabled={false}       // use true to disable editing
             onChange={this.handleSaleLineChange} // handle innerHTML change
             tagName='article' // Use a custom HTML tag (uses a div by default)
             className="meta"
             style={{"backgrounColor":"red"}}
           />
           {/* <a onClick={this.addRow}>+</a> */}
            {/* <ContentEditable
             innerRef={this.linkPlus}
             html={this.state.initialLink} // innerHTML of the editable div
             disabled={false}       // use true to disable editing
             onChange={this.handleLinkPlusChange} // handle innerHTML change
             tagName='article' // Use a custom HTML tag (uses a div by default)
             className="meta"
             style={{"backgrounColor":"red"}}
           /> */}
              <ContentEditable
             innerRef={this.totalTable}
             html={this.state.initialTotalTable} // innerHTML of the editable div
             disabled={false}       // use true to disable editing
             onChange={this.handleTotalTableChange} // handle innerHTML change
             tagName='article' // Use a custom HTML tag (uses a div by default)
             className="meta"
             style={{"backgrounColor":"red"}}
           /> 
            </article>
           <button type="submit" >submit</button> 
      </form>
          
    )
  };}
