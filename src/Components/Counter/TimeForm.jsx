import React from "react";
import PropTypes from "prop-types";
import InputForm from "../Input";
import Button from "../Button";

export default class TimeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="flex-row center">
      <span className="countdown end-align">Countdown(mins): </span>
      <InputForm
        name="minutes"
        value={this.props.minutes}
        disabled={this.props.isActive}
        handleChange={this.props.handleChange}
        className="flex-auto"
      ></InputForm>
      <Button label={this.props.isActive ? 'Reset' : 'Start'} className={this.props.isActive ? 'button': 'submit'} type={this.props.isActive ? 'button': 'submit'} onClick={this.props.isActive ? this.props.onClick : undefined}></Button>
    </form>
    );
  }
}

TimeForm.propsTypes = {
  minutes: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};