import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../actions"

class Home extends Component {
  componentDidMount() {
    this.props.fetchQuote();
    this.props.fetchFutureEvents();
  }
  renderQuoteContent(){
    switch (this.props.quote) {
      case null:
        return
      case false:
        return
      default:
        return (
          <div>
            {this.props.quote.text}
          </div>
        )
    }
  }
  renderTimeLineContent(){
    switch (this.props.eventList) {
      case null:
        return
      case false:
        return
      default:
        return (
          <div>
            {this.props.eventList.Name}
          </div>
        )
    }
  }
  render() {
    return (
      <div>
        Quote: {this.renderQuoteContent()}
        Future Events: {this.renderTimeLineContent()}
      </div>
    )
  }
}

function mapStateToProps({ auth, quote, eventList  }) {
  return { auth, quote, eventList }
}


export default connect(mapStateToProps, actions)(Home)
