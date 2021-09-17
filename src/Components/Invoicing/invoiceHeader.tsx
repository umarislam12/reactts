


export interface InvoiceHeaderProps {
  
}
 
 const InvoiceHeader = () => {
  return ( <div><header>

  
			<h1 className="inh1">Invoice</h1>
			<address contentEditable suppressContentEditableWarning={true}>
				<p>Jonathan Neal</p>
				<p>101 E. Chapman Ave<br/>Orange, CA 92866</p>
				<p>(800) 555-1234</p>
			</address>
			{/* <span className="img"><img alt="" src="http://www.jonathantneal.com/examples/invoice/logo.png"/><input type="file" accept="image/*"/></span> */}
	
      </header> 
      
   
	
      
      
      </div>);
}
 
export default InvoiceHeader;