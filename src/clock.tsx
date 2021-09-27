//@ts-nocheck
import React from "react";
import dayjs from "dayjs";

class Clock extends React.Component<{}, { date: Date }> {
  timerID: number | undefined;
  constructor(props: any) {
    super(props);
    this.state = { date: new Date("september 23 2021 15:00"), shortLeave: "" };
  }
  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);

    var time = dayjs(this.state.date)
      .subtract(1, "day")
      .format("DD/MM/YYYY HH:mm")
      .toString();

    console.log(this.state.date);
    console.log(time);

    this.setState((state) => {
       localStorage.setItem("shortLeave", time);
    });

    // console.log(location.pathname)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  componentDidUpdate() {
    this.state.shortLeave = localStorage.getItem("shortLeave");
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h2>Time is: {this.state.date.toLocaleTimeString()}.</h2>
        <p>short leave was on: {this.state.shortLeave}</p>
      </div>
    );
  }
}
export default Clock;
