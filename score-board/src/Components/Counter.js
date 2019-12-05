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

  increaseTwo =()=>{
      this.setState({
          strikes: this.state.strikes + 2
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
        <button onClick={()=>{this.increaseTwo()}}>FOUL</button>
        <button>HIT</button>
      </div>
    );
  }
}

export default Counter;
