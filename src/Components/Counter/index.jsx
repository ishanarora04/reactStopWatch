import React from "react";
import Button from "../Button";
import TimeForm from "./TimeForm";
import TimeDisplay from "./TimeDisplay";
import './Counter.css';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      setTime: 0,
      leftTime: 0,
      isPaused: false,
      timerId: undefined,
      speed: 1,
      isActive: false,
    };
  }

  start = () => {
    this.setState({ isPaused: false, isActive: true });
    this.timerId = setInterval(this.timer, Math.round(1000 / this.state.speed));
    this.setState({ timerId: this.timerId });
  };

  handleChange = (event) => {
    const { value } = event.target;
    const minutes = parseInt(value, 10) || 0;
    this.setState({
      setTime: minutes * 60,
      leftTime: minutes * 60,
    });
  };

  reset = () => {
    if (this.state.isActive) {
      this.clearTimer();
      this.setState({
        leftTime: 0,
        isPaused: false,
        isActive: false,
      });
    }
  };

  pause = () => {
    if (this.state.isActive && !this.state.isPaused) {
      this.clearTimer();
      this.setState({
        isPaused: true,
      });
    }
  };

  resume = () => {
    if (this.state.isActive && this.state.isPaused) {
      this.setState(
        {
          isPaused: false,
        },
        () => {
          this.start();
        }
      );
    }
  };

  speedup = async (value) => {
    if (this.state.isActive) {
      this.pause();
      this.setState({ speed: value }, () => {
        this.start();
      });
    }
  };

  timer = () => {
    if (!this.state.isPaused) {
      var newCount = this.state.leftTime - 1;
      if (newCount >= 0) {
        this.setState({ leftTime: newCount });
      } else {
        this.clearTimer();
      }
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.start();
  };

  clearTimer = () => {
    const timerId = this.state.timerId;
    if (timerId) {
      this.setState(
        {
          timerId: null,
        },
        () => {
          clearInterval(timerId);
        }
      );
    }
  };

  displayText = () => {
    const { leftTime, setTime } = this.state;
    if (this.state.isActive) {
      if (leftTime === 0 && setTime > leftTime) {
        return "Time's Up!";
      }
      if (leftTime > 0 && leftTime <= setTime / 2) {
        return "More than halfway there!";
      }
    }
    return false;
  };

  render() {
    return (
      <div className="flex-column container">
        <TimeForm
          handleChange={this.handleChange}
          onSubmit={this.handleSubmit}
          label="Start"
          minutes="100"
          onClick={this.reset}
          isActive={this.state.isActive}
        />

        {this.displayText() && (
          <div>
            <h1>{this.displayText()}</h1>
          </div>
        )}

      <div className="flex-row text-center">
        <TimeDisplay
          time={this.state.leftTime}
          isActive={this.state.isActive}
        />

        <Button
          className="pause"
          onClick={this.state.isPaused ? this.resume : this.pause}
          label={this.state.isPaused ? "RESUME" : "PAUSE"}
        ></Button>
      </div>

        <div className="flex-row center">
          <Button
            onClick={() => {
              this.speedup(1);
            }}
            label="1X"
            className="btn"
          ></Button>
          <Button
            onClick={() => {
              this.speedup(1.5);
            }}
            label="1.5X"
            className="btn"
          ></Button>
          <Button
            onClick={() => {
              this.speedup(2);
            }}
            label="2X"
            className="btn"
          ></Button>
        </div>
      </div>
    );
  }
}
