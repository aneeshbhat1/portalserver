import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../actions"
import { Banner } from "../components/Banner"
// import client1 from "../image/clients/01.png"
// import client2 from "../image/clients/02.png"

import TimeLine from "../components/TimeLine"

class Home extends Component {
  state = { eventMonth: "" }
  componentDidMount() {
    this.props.fetchQuote()
  }

  renderQuoteContent() {
    switch (this.props.quote) {
      case null:
        return
      case false:
        return
      default:
        return <div>{this.props.quote.text}</div>
    }
  }
  render() {
    return (
      <div>
       <Banner />
        {/*Quote: {this.renderQuoteContent()}*/}
        {/*Future Events: {this.renderTimeLineContent()}*/}
        <TimeLine />
      </div>
    )
  }
}

function mapStateToProps({ auth, quote }) {
  return { auth, quote }
}

export default connect(mapStateToProps, actions)(Home)
