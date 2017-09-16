import React, { Component } from "react"
import { connect } from "react-redux"

class SoftskillTopic extends Component {
  render() {
    return (
      <div>
        soft Topic
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(SoftskillTopic)
