import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </React.Fragment>
    )
  }
}

export default App;