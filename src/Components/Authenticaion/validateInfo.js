

export default function validateInfo(inputs){
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
        error.password="first naam is required"
    }
   return error;
}