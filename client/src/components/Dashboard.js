import React, { Component } from "react"
import { connect } from "react-redux"

class Dashboard extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <h2>Sorry, you are unauthorized to view this content, Please login!</h2>
        )
      default:
        return (
          <h2>Dashboard</h2>
        )
    }
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(Dashboard)
