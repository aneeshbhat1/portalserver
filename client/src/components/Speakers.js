import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../actions"

class Speakers extends Component {
  componentDidMount() {
    this.props.fetchSpeakers();
  }
  renderSpeakerContent(){
    switch (this.props.speakerList) {
      case null:
        return
      case false:
        return
      default:
        return (
          <div>
            {this.props.speakerList.Name}
          </div>
        )
    }
  }
  render() {
    return (
      <div>
        Speaker name: {this.renderSpeakerContent()}
      </div>
    )
  }
}

function mapStateToProps({ speakerList }) {
  return { speakerList }
}
export default connect(mapStateToProps, actions)(Speakers)
