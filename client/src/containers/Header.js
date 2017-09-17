import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../custom_modules/css/plugins-css.css';
import '../custom_modules/css/mega-menu/mega_menu.css';
import '../custom_modules/css/default.css';
import '../custom_modules/css/style.css';
import '../custom_modules/css/responsive.css';
import '../custom_modules/css/custom.css';
import '../custom_modules/css/font-awesome-4.7.0/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap.js';

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
        <header id="header" className="header">
          <nav className="navbar mega-menu">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                 <NavLink  exact to="/"><img id="" src={require('../image/logo.png')} alt="logo" /></NavLink>
                </div>
                <div id="navbar" className="navbar-collapse collapse ">
                  <ul className="nav navbar-nav navbar-right menu-links">
                    <li><NavLink  exact to="/"><i className="fa fa-home" /> Home </NavLink></li>
                    <li><NavLink  exact to="/topics/technology"><i className="fa fa-bullhorn fa-indicator" /> Technology</NavLink></li>
                    <li><NavLink  to="/topics/infrastructure"><i className="fa fa-calendar fa-indicator" /> Infrastructure</NavLink></li>
                    <li className="dropdown disabled">
                              <a className="dropdown-toggle" data-toggle="dropdown" href=""><i className="fa fa-rss fa-indicator" /> Blog
                              <span className="caret"></span></a>
                              <ul className="dropdown-menu">
                                <li><a href="">Blog 1-1</a></li>
                                <li><a href="">Blog 1-2</a></li>
                                <li><a href="">Blog 1-3</a></li>
                              </ul>
                            </li>
                    <li><NavLink  to="/contact"><i className="fa fa-envelope-o fa-indicator" /> Contact</NavLink></li>
                  </ul>
                </div>{/*/.nav-collapse */}
              </div>
            </nav>
          </header>
      </div>
    )
  }
}
function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(Header)
