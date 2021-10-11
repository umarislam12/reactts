export default function formValidate(inputs){
  let error={}
  if(!inputs.firstName.trim()){
      error.firstName="first naam is required"
  }
  if(!inputs.lastName.trim()){
      error.lastName="last naam is required"
  }
  if(!inputs.email){
      error.email="email is required"
  }
  if(!inputs.password ){
      error.password="password is required"
  }
 return error;
}

// cnicDate: "",
//     image:"",
//     cnicvalue: "",
//     phone: "",
//     province: "punjab",
//     game: "",

//     dobvalue: "",