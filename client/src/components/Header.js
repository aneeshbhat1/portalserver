import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        )
      default:
        return (
          <div>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </div>
        )
    }
  }
  render() {
    return (
      <div>
        <h2>Learnopedia</h2>
        <Link to="/">Home</Link>
        <Link to="/topics/technology">Technology</Link>
        <Link to="/topics/infrastructure">Infrastructure</Link>
        <Link to="/topics/softskills">SoftSkills</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/contact">Contact</Link>
        <ul>{this.renderContent()}</ul>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(Header)
