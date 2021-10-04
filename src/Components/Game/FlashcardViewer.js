import React, { Component } from "react";
import { Card,CardContent,Typography } from "@material-ui/core";

export default class FlashcardViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardFront: true,
      cardnumber: 1,
    };
  }
  render() {
    
    return (
      <div>
        <h1>i am viewer</h1>
        <Card>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
     
        </Typography>
        </CardContent>
        </Card>
        <br />
        <button onClick={this.props.switchMode}> Go to editor</button>
      </div>
    );
  }
}
