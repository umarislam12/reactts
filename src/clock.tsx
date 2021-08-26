import React from "react";
class Clock extends React.Component <{}, { date: Date }>{
  timerID: number | undefined;
  constructor(props:any) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
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