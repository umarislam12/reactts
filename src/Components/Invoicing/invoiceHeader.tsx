import React from "react";
import './invoiceHeader.css'

export interface InvoiceHeaderProps {
  
}
 
 const InvoiceHeader = ({},{}) => {
  return ( <div><header>

  
			<h1>Invoice</h1>
			<address contentEditable>
				<p>Jonathan Neal</p>
				<p>101 E. Chapman Ave<br/>Orange, CA 92866</p>
				<p>(800) 555-1234</p>
			</address>
			<span><img alt="" src="http://www.jonathantneal.com/examples/invoice/logo.png"/><input type="file" accept="image/*"/></span>
	
      </header> 
      
   
	
      
      
      </div>);
}
 
export default InvoiceHeader;