import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const style = require('./style.json');

class Buttons extends Component {
  render() {
    return ( 
      <Button component={Link} to="/About">About</Button>
    )
  }
}
export default withStyles(style)(Buttons);