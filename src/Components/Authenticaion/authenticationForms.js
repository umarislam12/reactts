import React,{useState} from "react";
import Signup from "./signup";
import Signin from './signin';
const Authenticationforms = () => {
  const [isSubmitted, setIsSubmitted]=useState(false)
function submitForm(){
  setIsSubmitted(true);
}
  return ( <div>
   { (isSubmitted===false)?
<Signup submitForm={submitForm} />:<Signin/>}
  </div> );
}
 
export default Authenticationforms;