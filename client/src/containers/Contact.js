import React, { Component } from "react"
import { connect } from "react-redux"

class Contact extends Component {
  render() {
    return (
      <div>
        Contact
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(Contact)
