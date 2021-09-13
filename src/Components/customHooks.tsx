// @ts-nocheck
import {useState,useEffect} from 'react';

const useSignupForm = (validate,signup,submitForm) => {
    const [inputs, setInputs] = useState({
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      chec:"",
      
    });
    const [error,setErrors]=useState({})
    const[isSubmitting, setIsSubmitting]=useState(false);
    const handleSubmit = (event) => {
        if (event) {
          event.preventDefault();
        }
        setErrors(validate(inputs))
        setIsSubmitting(true);
        console.log(isSubmitting);
       signup();
      }
    useEffect(() => {
      if(Object.keys(error).length===0 && isSubmitting){
console.log(submitForm);
        submitForm();
        
      }
      
    }, [error]);
      
    const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        
      }
  return {inputs,handleInputChange,handleSubmit,error}
}
export default useSignupForm;