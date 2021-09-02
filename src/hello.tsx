// src/components/StatefulHello.tsx

import "./hello";
import * as React from "react";

import Clock from "./clock";
import { Mood } from "./mood";
import "./hello.css";
import Friends from "./Components/friends";
import Example from "./Components/counter";
import {LoginControl } from "./Components/Greetings";
import Pokemons from "./Components/pokemon";
export interface Props {
  name:string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, {currentEnthusiasm:number}> {
  constructor(props: Props) {
    super(props);
    
    this.state = { currentEnthusiasm: 1};
  }
  
  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  componentDidUpdate(){
    console.log(this.state.currentEnthusiasm);
  }
  render() {
   
    const { name } = this.props;
    
    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">

        <h1>hello {this.props.name}{getExclamationMarks(this.state.currentEnthusiasm)}</h1>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
         <LoginControl/> 
         <Mood />
         <Clock />
         <Example/>
         <Friends/>
         <Pokemons/>
       


       
         
      </div>

    );
  }

  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
    console.log(this.state.currentEnthusiasm);
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars +1).join('!');
}
