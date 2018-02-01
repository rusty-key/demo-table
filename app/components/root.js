import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import StaticTable from './staticTable/staticTable'

class StaticTable extends React.Component {
  render() {
    return (<div></div>)
  }
}

class Root extends React.Component {
  render(props) {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={StaticTable} />
        </Switch>
      </Router>
    )
  }
}

export default Root
