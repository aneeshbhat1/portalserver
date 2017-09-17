import React, { Component } from "react"
import { connect } from "react-redux"

class InfrastructureTopic extends Component {
  render() {
    return (
      <div>
        Infra Topic
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(InfrastructureTopic)
