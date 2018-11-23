import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AllButtons from './AllButtons';
const style = require('./style.json');


class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <div className={classes.AllButtons}><AllButtons /></div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1 className={classes.heading}>
          krista <br/> strzeszkowski
        </h1>
      </div>
    )
  }
}
export default withStyles(style)(Home);