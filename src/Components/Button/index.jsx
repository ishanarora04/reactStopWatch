import React from "react";
import PropTypes from "prop-types";
import './Button.css'

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onClick} className={this.props.className} type={this.props.type||'button'}>{this.props.label}</button>
      </div>
    );
  }
}

Button.propsTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string
};
