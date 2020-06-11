import React from "react";
import PropTypes from "prop-types";
import './Input.css'


export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.placeholder = `(Min)`;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name={this.props.name}
          value={this.propsvalue}
          className={this.props.className || "default"}
          placeholder={this.placeholder}
          onChange={this.props.handleChange}
          onBlur={this.props.handleChange}
          min="1"
          max="60"
          step="1"
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

InputForm.propsTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
};
