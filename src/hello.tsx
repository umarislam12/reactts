// src/components/StatefulHello.tsx

import "./hello";
import * as React from "react";

import Clock from "./clock";
import { Mood } from "./Components/Home/mood";
import "./hello.css";
import Friends from "./Components/Home/friends";
import Example from "./Components/Home/counter";
import {LoginControl } from "./Components/Home/Greetings";
import Pokemons from "./Components/Home/pokemon";
import styled from 'styled-components';
export interface Props {
  name:string;
  enthusiasmLevel?: number;
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
   divy = styled.div`
  color: ${props => props.theme.colors.main};
`;
  render() {
 
    
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
