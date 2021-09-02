import React from "react";


export interface SaleLineProps {
    
}
 
const SaleLine = () => {
    return ( <div>
           <article>
			<h1>Recipient</h1>
			<address contentEditable>
				<p>Some Company<br/>c/o Some Guy</p>
			</address>
			<table className="meta">
				<tr>
					<th><span contentEditable>Invoice #</span></th>
					<td><span contentEditable>101138</span></td>
				</tr>
				<tr>
					<th><span contentEditable>Date</span></th>
					<td><span contentEditable>January 1, 2012</span></td>
				</tr>
				<tr>
					<th><span contentEditable>Amount Due</span></th>
					<td><span id="prefix" contentEditable>$</span><span>600.00</span></td>
				</tr>
			</table>
			<table className="inventory">
				<thead>
					<tr>
						<th><span contentEditable>Item</span></th>
						<th><span contentEditable>Description</span></th>
						<th><span contentEditable>Rate</span></th>
						<th><span contentEditable>Quantity</span></th>
						<th><span contentEditable>Price</span></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><a className="cut">-</a><span contentEditable>Front End Consultation</span></td>
						<td><span contentEditable>Experience Review</span></td>
						<td><span data-prefix>$</span><span contentEditable>150.00</span></td>
						<td><span contentEditable>4</span></td>
						<td><span data-prefix>$</span><span>600.00</span></td>
					</tr>
				</tbody>
			</table>
			<a className="add">+</a>
			<table className="balance">
				<tr>
					<th><span contentEditable>Total</span></th>
					<td><span data-prefix>$</span><span>600.00</span></td>
				</tr>
				<tr>
					<th><span contentEditable>Amount Paid</span></th>
					<td><span data-prefix>$</span><span contentEditable>0.00</span></td>
				</tr>
				<tr>
					<th><span contentEditable>Balance Due</span></th>
					<td><span data-prefix>$</span><span>600.00</span></td>
				</tr>
			</table>
		</article>
    </div> );
}
 
export default SaleLine;