import React from "react";
class Clock extends React.Component <{}, { date: Date }>{
  constructor(props:any) {
    super(props);
    this.state = {date: new Date()};
  }
  

  render() {
    return (
      <div>
   
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default Clock;