
import React from "react";
import InvoiceHeader from "./invoiceHeader";
import SaleLine from "./saleLine";

import styled, { createGlobalStyle, css } from 'styled-components';
export interface InvoiceProps {
  primary:boolean;
}

const Button = styled.a<InvoiceProps>`
display: inline-block;
margin: 0.5rem 1rem;
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;

padding: 0.25em 1em;

;
${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`
 
const Invoice = () => {
  return ( <div>
        <Button primary href="/docs"
        >
        Print
        </Button>
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