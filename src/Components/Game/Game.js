import React, { Component } from "react";
import dayjs from "dayjs";
export class Game extends Component {
  constructor(props) {
    //const tim= setInterval(alert("Time Out"),10000);
    console.log();
    super(props);
    this.state = {
      num1: Math.ceil(Math.random() * 100),
      num2: Math.floor(Math.random() * 100),

      response: "",
      score: 0,
      time: {},
      seconds: 50,
      incorrect:false
    };
    this.timer = 0;
    // this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }
  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    this.timer = setInterval(this.countDown, 1000);
  }

  // startTimer() {
  //   if (this.timer == 0 && this.state.seconds > 0) {
  //     this.timer = setInterval(this.countDown, 1000);
  //   }
  // }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }
  render() {
    if (this.state.score >= 5) {
      return this.renderWin();
    } else {
      return this.renderGame();
    }
  }
  renderGame() {
    return (
      <div>
        {/* <button onClick={this.startTimer}>Start</button> */}
        <h1>
          Time left m: {this.state.time.m} s: {this.state.time.s}
        </h1>
        {/* {this.state.time.m>0 && this.state.time.s>0 ? ( */}
          <div>
            <h2 className={this.state.incorrect?"wrong":""}>
              {this.state.num1}+{this.state.num2}{" "}
            </h2>
            <input
              onChange={this.updateResponse}
              value={this.state.response}
              onKeyPress={this.checkResult}
            />
            <div> score:{this.state.score}</div>
          </div>
        {/* ):( */}
          <div>
            <h1>Sorry timed out</h1>
          </div>
        {/* )} */}
      </div>
    );
  }
  renderWin() {
    return (
      <div>
        <h1>Congartulations you win</h1>
      </div>
    );
  }
  updateResponse = (event) => {
    this.setState({ response: event.target.value });
  };
  checkResult = (event) => {
    //console.log("entering result of game",event)
    if (event.key === "Enter") {
      const answer = parseInt(this.state.response);
      if (answer === this.state.num1 + this.state.num2) {
      //  do something if answer is right
        this.setState((state) => ({
          score: state.score + 1,
          num1: Math.ceil(Math.random() * 10) + state.score,
          num2: Math.ceil(Math.random() * 10),
          response: "",
          wrong:false
        }));
      } else {
        //do something else if answer is wrong
        this.setState((state) => ({ response: "",incorrect:true }));
      }
    }
  };
}

export default Game;
