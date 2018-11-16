import React, { Component } from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

class AllButtons extends Button {
  render() {
    return(
      <div>
        <Button className='HomePageButtons'>about</Button>
      </div>
    )
  }
}
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Krista Strzeszkowski </h1>
        <div>
        </div>
        <AllButtons />
      </div>
    )
  }
}
export default Home;