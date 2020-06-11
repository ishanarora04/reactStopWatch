import React from "react";
import PropTypes from "prop-types";
import "./Counter.css";

export default class TimeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  convert_to_hh_mm_format = () => {
    let seconds = this.props.time % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let minutes = parseInt(this.props.time / 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  };

  render() {
    let time = this.props.time;
    let remainingTime = this.convert_to_hh_mm_format();

    let className = "default";
    if (this.props.isActive && time > 0) {
      if (time < 20) {
        className = "red";
      }

      if (time < 10) {
        className = "blink red";
      }
    }

    return (
      <div>
        <h1 className={className}>{remainingTime}</h1>
      </div>
    );
  }
}

TimeDisplay.propsTypes = {
  time: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
};
