import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "../actions"

import Header from "./Header"
import Home from "./Home"

import Speaker from "./Training/Speaker"
import Topic from "./Training/Topic"
import SoftskillTopic from "./SoftskillTopic"
import PageNotFound from "./PageNotFound"
import Footer from "./Footer"
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
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/training/speakers" component={Speaker} />
              <Route exact path="/training/topics" component={Topic} />
              <Route exact path="/topics/softskills" component={SoftskillTopic} />
              <Route exact path="/speakers" component={Speaker} />
              <Route component={PageNotFound} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
