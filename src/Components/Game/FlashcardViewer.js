import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

export default class FlashcardViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFront: true,
      cardnumber: 0,
    };
   
  }
  render() {
   var front = this.props.cards.map((card, i) => (
      <div key={i}> {card.front}</div>
    ));
  
    const back = this.props.cards.map((card, i) => (
      <div key={i}>{card.back}</div>
    ));
   
    return (
      <div>
        <h1>i am viewer</h1>
        {this.state.cardFront ? (
          <Card>
            <CardContent onClick={this.switchCard}>
              <Typography gutterBottom variant="h5" component="div">
                Front
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {front[this.state.cardnumber]}
              </Typography>
            </CardContent>
            <CardActions onClick={this.moveToNext}>
              <Button size="small">Next Card</Button>
            </CardActions>
          </Card>
        ) : (
          <Card >
            <CardContent onClick={this.switchCard}>
              <Typography gutterBottom variant="h5" component="div">
                Back
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
              {back[this.state.cardnumber]}
              </Typography>
            </CardContent>
            <CardActions  onClick={this.moveToNext}>
              <Button size="small">Next Card</Button>
            </CardActions>
          </Card>
        )}

        <br />
        <button onClick={this.props.switchMode}> Go to editor</button>
      </div>
    );
  }
  switchCard = () => {
    this.setState((state) => ({
      cardFront: !state.cardFront,
    }));
  };
  moveToNext=()=>{
    // if(this.state.cardnumber<)
    this.setState(state=>({
      cardnumber:state.cardnumber+1
    }))
    console.log(this.state.cardnumber)
  }
  moveToPrevious=()=>{
    
    this.setState(state=>({
      cardnumber:state.cardnumber-1
    }))
    console.log(this.state.cardnumber)
  }
}
