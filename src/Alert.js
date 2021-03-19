import React, { Component } from 'react';
import './styles/App.css';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
    };
  };

  render() {
    return (
      <div className='Alert'>
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#323edd';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#B73DBA';
  }

  getStyle = () => {
    return {
      color: this.color,
      fontStyle: 'bold',
    };
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = '#ec0101';
  }
}

export { InfoAlert, WarningAlert, ErrorAlert };
