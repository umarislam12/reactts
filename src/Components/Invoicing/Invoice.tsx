
import React from "react";
import InvoiceHeader from "./invoiceHeader";
import SaleLine from "./saleLine";
export interface InvoiceProps {
  
}
 
const Invoice = () => {
  return ( <div>
    <InvoiceHeader/>
    <SaleLine/>
    <aside>
			<h1><span contentEditable>Additional Notes</span></h1>
			<div contentEditable>
				<p>A finance charge of 1.5% will be made on unpaid balances after 30 days.</p>
			</div>
		</aside>
  </div> );
}
 
export default Invoice;