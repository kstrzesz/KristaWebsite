import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import AllButtons from './AllButtons';
const style = require('./style.json');


class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>

    <Grid
      justify="space-between" // Add it here :)
      container 
      spacing={24}
    >
      <Grid item xs={8} />
      <Grid item xs={4}>
        <div>
          <AllButtons />
        </div>
      </Grid>
      
    </Grid>
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