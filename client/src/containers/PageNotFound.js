import React, { Component } from "react"
import { connect } from "react-redux"

class PageNotFound extends Component {
  render() {
    return (
      <div>
        Page Not Found
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(PageNotFound)
