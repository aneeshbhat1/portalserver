import React, { Component } from "react"
import { connect } from "react-redux"

class TechnologyTopic extends Component {
  render() {
    return (
      <div>
        Tech Topic
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(TechnologyTopic)
