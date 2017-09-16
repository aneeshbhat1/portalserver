import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { connect } from "react-redux"
import * as actions from "../actions"

import Header from "./Header"
import Home from "./Home"
import Footer from "./Footer"
import TechnologyTopic from "./TechnologyTopic"
import InfrastructureTopic from "./InfrastructureTopic"
import SoftskillTopic from "./SoftskillTopic"
import Speakers from "./Speakers"
import Contact from "./Contact"

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
            <Route exact path="/" component={Home} />
            <Route exact path="/topics/technology" component={TechnologyTopic} />
            <Route exact path="/topics/infrastructure" component={InfrastructureTopic} />
            <Route exact path="/topics/softskills" component={SoftskillTopic} />
            <Route exact path="/speakers" component={Speakers} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
