import React, { Component } from "react";

export default class FlashcardEditor extends Component {
  constructor(props){
    super(props);
    this.state={
      front:"",
      back:""
    }
  
  }
  render() {
    const rows = this.props.cards.map((card, i) => (
      <tr key={i} >
        <td>{card.front}</td>
        <td>{card.back}</td>
        <td>
          <button data-index={i} 
          // onClick={()=>this.deleteCard(i)}
          onClick={this.deleteCard}
          >Delete</button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h1>I am editor</h1>

        <table>
          <tbody>
          <tr>
            <th>Frnt card</th>
            <th>Back card</th>
            <th>Delete</th>
          </tr>
          {rows}
          </tbody>
        </table>
        <input name="front"onChange={this.handleChange} placeholder="front of card" value={this.state.front}/>
        <input name="back" onChange={this.handleChange} placeholder="back of card" value={this.state.back}/>
        <button onClick={this.addCard} >Add card</button>

        <br />
        <button onClick={this.props.switchMode}>Go to viewer</button>
      </div>
    );
  }
  handleChange=(e)=>{
    this.setState({

      [e.target.name]:e.target.value

    })
    
  }
  addCard=(e)=>{
    this.props.addCard(this.state.front,this.state.back)
    this.setState({
      front:"",
      back:""
    })
  }
  //OR
  // handleChange=(e)=>{
  //   if(e.target.name==="front"){
  //     this.setState({

  //       front:e.target.value
  
  //     })
  //   }
    
    
  // }
  deleteCard=(event)=> {
   
    console.log("delete card in card editor",this.props)
    // this.props.deleteCard(i);
    this.props.deleteCard(event.target.dataset.index)
  }

}
