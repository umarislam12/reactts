import React from "react";
import  dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'
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
   
  
    console.log(dayjs);   
    // console.log(location.pathname)
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
        <p>date is {dayjs(this.state.date).format('DD/MM/YYYY')}</p>
      </div>
    );
  }
}
export default Clock;