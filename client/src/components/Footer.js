import React, { Component } from "react"
import { connect } from "react-redux"

class Footer extends Component {
  render() {
    return (
      <div>
        Footer
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(Footer)
