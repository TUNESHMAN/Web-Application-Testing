import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  incrementBalls = () => {
    this.setState({
      balls: this.state.balls + 1
    });
  };

  incrementStrikes = () => {
    this.setState({
      strikes: this.state.strikes + 1
    });
  };

  foulControl = () => {
    if (this.state.strikes === 0) {
      //  block of code to be executed if condition1 is true
      this.setState({
        strikes: this.state.strikes + 1
      });
    } else if (this.state.strikes === 1) {
      //  block of code to be executed if the condition1 is false and condition2 is true
      this.setState({
        strikes: this.state.strikes + 1
      });
    } else if (this.state.strikes === 2) {
      //  block of code to be executed if the condition1 is false and condition2 is false
      this.setState({
        strikes: this.state.strikes + 0
      });
    // } else if (this.state.strikes > 2) {
    //   this.setState({
    //     strikes: this.state.strikes === 0
    //   });
    }
  };

  hitControl=()=>{
      this.setState({
        balls: this.state.balls === 0,
        strikes: this.state.strikes ===0

      })
  }

  render() {
    return (
      <div>
        <h1>BALLS ⏩{this.state.balls}</h1>
        <h1>STRIKES ⏩ {this.state.strikes}</h1>
        <button
          onClick={() => {
            this.incrementBalls();
          }}
        >
          BALLS
        </button>
        <button
          onClick={() => {
            this.incrementStrikes();
          }}
        >
          STRIKES
        </button>
        <button
          onClick={() => {
            this.foulControl();
          }}
        >
          FOUL
        </button>
        <button onClick={()=>{this.hitControl()}}>HIT</button>
      </div>
    );
  }
}

export default Counter;
