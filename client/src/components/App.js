import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "../actions"

import Header from "./Header"
import Sessions from "./Sessions"

const Dashboard = () => <div>Dashboard</div>
// const Sessions = () => <div>Sessions</div>
const Landing = () => <h2>Landing</h2>

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/sessions" component={Sessions} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
