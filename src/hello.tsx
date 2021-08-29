// src/components/StatefulHello.tsx

import "./hello";
import * as React from "react";

import Clock from "./clock";
import { Mood } from "./mood";
import "./hello.css";
import Friends from "./functionalComponents/friends";
import Example from "./functionalComponents/counter";
import {LoginControl } from "./functionalComponents/Greetings";
import Pokemons from "./functionalComponents/pokemon";
export interface Props {
  name:string;
  enthusiasmLevel?: number;
}

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 };
  }
  
  onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm + 1);
  onDecrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
  
  render() {
    console.log(typeof this.state)
    const { name } = this.props;
    
    if (this.state.currentEnthusiasm <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <h1>hello umar{this.state.currentEnthusiasm}</h1>
         <LoginControl/> 
         <Mood />
         <Clock />
         <Friends/>
         <Example/>
         <Pokemons/>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>


       
         
      </div>

    );
  }

  updateEnthusiasm(currentEnthusiasm: number) {
    this.setState({ currentEnthusiasm });
  }
}

export default Hello;

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
