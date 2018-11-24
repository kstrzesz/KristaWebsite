import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
const style = require('./style.json');

class Buttons extends Component {
  render() {
    const { classes } = this.props
    return (
      <React.Fragment> 
        <Button className={classes.allButtons} component={Link} to="/About">about</Button>
        <Button className={classes.allButtons} component={Link} to="/Projects">projects</Button>
        <Button className={classes.allButtons} component={Link} to="/Blog">blog</Button>
        <Button className={classes.allButtons} component={Link} to="/Feedback">feedback</Button>
      </React.Fragment>
    )
  }
}
export default withStyles(style)(Buttons);