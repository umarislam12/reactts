import * as React from "react";
export function LoginButton(props:any) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

export function LogoutButton(props:any) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
export class LoginControl extends React.Component<{},{isLoggedIn:boolean}> {
  constructor(props:any) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: true};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
export function Greeting(props:any) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
function UserGreeting(props:any) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props:any) {
  return <h1>Please sign up.</h1>;
}