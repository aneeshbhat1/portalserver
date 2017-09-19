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
            <a href="/auth/google"><i className="fa fa-google" aria-hidden="true"></i> Login with google</a>
          </li>
        )
      default:
        return (
            <li>
              <a href="/api/logout"><i className="fa fa-power-off" aria-hidden="true"></i> Logout</a>
            </li>
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
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href=""><i className="fa fa-rss fa-binoculars" /> Training
                      <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><NavLink  exact to="/training/speakers"><i className="fa fa-bullhorn fa-indicator" /> Speaker</NavLink></li>
                        <li><NavLink  exact to="/training/topics"><i className="fa fa-bullhorn fa-suitcase" /> Topics</NavLink></li>
                      </ul>
                    </li>
                    <li className="dropdown disabled">
                              <a className="dropdown-toggle" data-toggle="dropdown" href=""><i className="fa fa-rss fa-indicator" /> Blog</a>
                            </li>
                    <li className="disabled"><a><i className="fa fa-envelope-o fa-indicator" /> Contact</a></li>
                    {this.renderContent()}
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
export default connect(mapStateToProps,null, null, {
  pure: false
})(Header)
