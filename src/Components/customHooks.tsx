// @ts-nocheck
import React,{useState} from 'react';
const useSignupForm = (validate) => {
    const [inputs, setInputs] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      chec:"",
      
    });
    const [error,setErrors]=useState({})
    
    const handleSubmit = (event) => {
        if (event) {
          event.preventDefault();
        }
        setErrors(validate(inputs))
       // callback();
      }
    
      const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        
      }
  return {inputs,handleInputChange,handleSubmit,error}
}
export default useSignupForm;