// @ts-nocheck
import React,{useState} from 'react';
const useSignupForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const handleSubmit = (event) => {
        if (event) {
          event.preventDefault();
        }
        callback();
      }
      const handleInputChange = (event) => {
        event.persist();
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
      }
  return {inputs,handleSubmit,handleInputChange}
}
export default useSignupForm;