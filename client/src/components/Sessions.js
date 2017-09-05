import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Sessions extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <h2>
            Sorry, you are unauthorized to view this content, Please login!
          </h2>
        )
      default:
        return (
          <div>
            <h2>Sessions</h2>
            <Link to={"/dashboard"}>Dashboard</Link>
          </div>
        )
    }
  }
  render() {
    return <div>{this.renderContent()}</div>
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(Sessions)
