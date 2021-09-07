 // @ts-nocheck 
import React, { useRef } from "react";


export interface SaleLineProps {
    
}

 
const SaleLine = () => {
	const inputEl = useRef(null);
	const addrows=()=>{
inputEl.current.insertAdjacentHTML("afterend", "		<td><a ></a><span contentEditable suppressContentEditableWarning={true}>Front End Consultation</span></td><td><a ></a><span contentEditable suppressContentEditableWarning={true}>Experience Review</span></td><td><span data-prefix>$</span><a ></a><span contentEditable suppressContentEditableWarning={true}>150.00</span></td><td><a ></a><span  contentEditable suppressContentEditableWarning={true}>4</span></td><td> <span data-prefix>$</span><a ></a><span contentEditable suppressContentEditableWarning={true}>600.00</span></td>");
	}
    return ( <div > 
			
			
           <article>
			<h1 className="inh1"> Recipient</h1>
			<address contentEditable suppressContentEditableWarning={true}>
				<p>Some Company<br/>c/o Some Guy</p>
			</address>
			<table className="meta">
				<tr>
					<th><span contentEditable suppressContentEditableWarning={true}>Invoice #</span></th>
					<td><span contentEditable suppressContentEditableWarning={true}>101138</span></td>
				</tr>
				<tr>
					<th><span contentEditable suppressContentEditableWarning={true}>Date</span></th>
					<td><span contentEditable suppressContentEditableWarning={true}>January 1, 2012</span></td>
				</tr>
				<tr>
					<th><span contentEditable suppressContentEditableWarning={true}>Amount Due</span></th>
					<td><span id="prefix" contentEditable suppressContentEditableWarning={true}>$</span><span>600.00</span></td>
				</tr>
			</table>
			<table className="inventory">
				<thead>
					<tr>
						<th><span contentEditable suppressContentEditableWarning={true}>Item</span></th>
						<th><span contentEditable suppressContentEditableWarning={true}>Description</span></th>
						<th><span contentEditable suppressContentEditableWarning={true}>Rate</span></th>
						<th><span contentEditable suppressContentEditableWarning={true}>Quantity</span></th>
						<th><span contentEditable suppressContentEditableWarning={true}>Price</span></th>
					</tr>
				</thead>
				<tbody>
					<tr ref={inputEl} > 
						<td><a className="cut">-</a><span contentEditable suppressContentEditableWarning={true}>Front End Consultation</span></td>
						<td><span contentEditable suppressContentEditableWarning={true}>Experience Review</span></td>
						<td><span data-prefix>$</span><span contentEditable suppressContentEditableWarning={true}>150.00</span></td>
						<td><span contentEditable suppressContentEditableWarning={true}>4</span></td>
						<td><span data-prefix>$</span><span>600.00</span></td>
					</tr>
				</tbody>
			</table>
			<a className="add" onClick={addrows}>+</a>
			<table className="balance">
				<tbody>
				<tr>
					<th><span contentEditable suppressContentEditableWarning={true}>Total</span></th>
					<td><span data-prefix>$</span><span>600.00</span></td>
				</tr>
				<tr>
					<th><span contentEditable suppressContentEditableWarning={true}>Amount Paid</span></th>
					<td><span data-prefix>$</span><span contentEditable suppressContentEditableWarning={true}>0.00</span></td>
				</tr>
				<tr >
					<th><span contentEditable suppressContentEditableWarning={true}>Balance Due</span></th>
					<td><span data-prefix>$</span><span>600.00</span></td>
				</tr>
				</tbody>
			</table>
		</article>
    </div> );
}
 
export default SaleLine;