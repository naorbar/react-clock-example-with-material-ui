import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

class Clock extends Component {

  constructor (props) {
      super(props);
      this.state = {
        time: new Date().toUTCString()
      };
  }

  updateClock() {
    console.log("Updating clock with timerId= " + this.state.timerId + " and clockId=" + this.props.clockId);
    //var newTime = ;
    this.setState({
        time: new Date().toUTCString()
    });
  }

  componentWillMount() {
    var timerId = setInterval(() => this.updateClock(), this.props.interval);
    this.setState({
        timerId: timerId
    });
  }

  render() {
    return (
      <div className="Clock">
        <div>{this.state.time}</div>
        <Tooltip title="This is a material-ui tooltip">
          <Button variant="contained" color="primary" onClick={() => this.updateClock()}>CLICK</Button>
        </Tooltip>
      </div>
    );
  }


}

export default Clock;
