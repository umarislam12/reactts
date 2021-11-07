import React,{useState} from "react";
import Signup from "./signup";
import Signin from './signin';
const Authenticationforms = () => {
  const [isSubmitted, setIsSubmitted]=useState(false)
function submitForm(){
  setIsSubmitted(true);
}
  return ( <div>
  
<Signin/>
  </div> );
}
 
export default Authenticationforms;