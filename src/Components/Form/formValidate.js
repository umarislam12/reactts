export default function formValidate(inputs){
  let error={}
  if(!inputs.firstName.trim()){
      error.firstName="first name is required"
  }
  if(!inputs.lastName.trim()){
      error.lastName="last name is required"
  }
  if(!inputs.email.trim()){
      error.email="email is required"
  }
  if(!inputs.password ){
      error.password="password is required"
  }
  if(!inputs.ConfirmPassword ){
    error.ConfirmPassword="ConfirmPassword is required"
}
if(!inputs.image ){
  error.image="image is required"
}
if(!inputs.cnicvalue ){
  error.cnicvalue="CNIC number is required"
}
if(!inputs.phone ){
  error.phone="phone number is required"
}
if(!inputs.province ){
  error.province="province is required"
}
if(!inputs.game ){
  error.game="province is required"
}
if(!inputs.dobvalue ){
  error.dobvalue="date of birth is required"
}
if(!inputs.cnicDate ){
  error.cnicDate="cnic Date is required"
}
 return error;
}








