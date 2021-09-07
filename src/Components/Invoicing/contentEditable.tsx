 // @ts-nocheck 

import React,{useRef,useState} from 'react'
import ContentEditable from 'react-contenteditable'

export default function MyComponent () {
  
   
    const compnay = useRef('company Or Person');
    //this.contentEditable = React.createRef();
    const [address,setAddress]=useState({
      companyOrName:''
    }
    )
    // this.state = 
    //  {html1: "<address ><p>Some Company<br/>c/o Some Guy</p></address>",
    // html2:"<table ><tr> <th><span >Invoice #</span></th><td><span >101138</span></td></tr><tr><th><span >Date</span></th><td><span >January 1, 2012</span></td></tr><tr><th><span >Amount Due</span></th><td><span  >$</span><span>600.00</span></td></tr></table>"}
    // <table ><thead><tr><th><span >Item</span></th><th><span >Description</span></th><th><span >Rate</span></th><th><span >Quantity</span></th><th><span >Price</span></th></tr></thead><tbody><tr ref={inputEl} > <td><a >-</a><span contentEditable suppressContentEditableWarning={true}>Front End Consultation</span></td><td><span contentEditable suppressContentEditableWarning={true}>Experience Review</span></td><td><span data-prefix>$</span><span contentEditable suppressContentEditableWarning={true}>150.00</span></td><td><span contentEditable suppressContentEditableWarning={true}>4</span></td><td><span data-prefix>$</span><span>600.00</span></td></tr></tbody></table><a onClick={addrows}>+</a><table ><tbody><tr><th><span contentEditable suppressContentEditableWarning={true}>Total</span></th><td><span data-prefix>$</span><span>600.00</span></td></tr><tr><th><span contentEditable suppressContentEditableWarning={true}>Amount Paid</span></th><td><span data-prefix>$</span><span contentEditable suppressContentEditableWarning={true}>0.00</span></td></tr><tr ><th><span contentEditable suppressContentEditableWarning={true}>Balance Due</span></th><td><span data-prefix>$</span><span>600.00</span></td></tr></tbody></table>};
  

  const handleChange = evt => {
    let nam=evt.target.name;
    let val=evt.target.value;
    setValues((preVal)=>{
      return{...preVal,
        [nam]:val
      }

    })
    
  };

  
    return (
    <div>
      <form> <article><h1 > Recipient</h1>
      company.current
      <input type='text' placeholder='Enter company or name'
            onChange={handleChange} name='companyOrNaem'/>
      <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html1} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
              className="meta"
            />
             <ContentEditable
              innerRef={this.contentEditable}
              html={this.state.html2} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={this.handleChange} // handle innerHTML change
              tagName='article' // Use a custom HTML tag (uses a div by default)
              className="meta"
            />
            </article>
            
      </form>
          
    </div>)
  };
