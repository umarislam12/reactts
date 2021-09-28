
import GoogleLogin from 'react-google-login';
// or



const responseGoogle = (response) => {
  console.log(response);
}


export default function GoogleLoginComponent() {
  return (
    <div>
       <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login with Google"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  )
}
