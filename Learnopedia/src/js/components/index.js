import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Route, BrowserRouter, NavLink, Redirect, Switch } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Dashboard from './protected/Dashboard'
import Schedule from './protected/Schedule'
import contact from './protected/contact'
import {Footer} from '../helpers/Footer.js'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import '../../custom_modules/css/plugins-css.css';
import '../../custom_modules/css/mega-menu/mega_menu.css';
import '../../custom_modules/css/default.css';
import '../../custom_modules/css/style.css';
import '../../custom_modules/css/responsive.css';
import '../../custom_modules/css/custom.css';
import '../../custom_modules/css/font-awesome-4.7.0/css/font-awesome.css';
import 'bootstrap/dist/js/bootstrap.js';
import { connect } from 'react-redux';
import {  activateGeod, closeGeod, userName } from '../../redux';

function PrivateRoute ({component: Component, authed,location,...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}
function PublicRoute ({component: Component, authed,location, ...rest}) {
  debugger;
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to={location.pathname} />}
    />
  )
}
function validateUser(checkData){
    if(checkData.authed === false && checkData.loading === false){
      window.location = "https://www.google.co.in";
    }else if(checkData.loading === true && checkData.authed === false){
      return true;
    } else if(checkData.loading === true && checkData.authed === true){
      return false;
    }
}
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: false,
      loading: true,
      location: window.location.pathname
    }
  }
  componentDidMount () {
    var self = this;
    axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    //console.log(this);
    var dataUser = {"user": this.props.username};
    axios.post('http://localhost/AD/AD.php', dataUser )
    .then(function (response) {
      var data = response.data.valid;
      if(data){
        self.setState({
          authed: true,
          loading: false,
          path: '',
          userDetails: dataUser
        })  
      }else{
        self.setState({
         authed: false,
         loading: false,
         userDetails: dataUser
       })
      }
    })
    .catch(function (error) {
      self.setState({
         authed: false,
         loading: false
       })
    });

  }

  componentWillUnmount () {
    this.removeListener()
  }

  componentWillReceiveProps() {
   // debugger;
  }

  render() {
    return validateUser(this.state) === true ? 
    <div id="preloader">
        <div className="clear-loading"><img id="logo_img" src={require('../../image/loader_ef_logo.png')} alt="logo" /></div>
        <div className="clear-loading loading-effect"> <span></span> </div>
    </div>
     : (
      <div>
     {/* <h1>{this.props.geod.user || 'Working'}</h1>
              {this.props.geod.user ?
                <button onClick={this.props.closeGeod}>
                  Exit Geod
                </button> :
                <button onClick={() => this.props.activateGeod({ user: 12345 })}>
                  Click Me!
                </button>
             }*/}
        <BrowserRouter {...this.props}>
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
                     <NavLink  exact to="/"><img id="" src={require('../../image/logo.png')} alt="logo" /></NavLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse ">
                      <ul className="nav navbar-nav navbar-right menu-links">
                        <li><NavLink  exact to="/"><i className="fa fa-home" /> Home </NavLink></li>
                        <li><NavLink  exact to="/dashboard"><i className="fa fa-bullhorn fa-indicator" /> Speaker</NavLink></li>
                        <li><NavLink  to="/schedule"><i className="fa fa-calendar fa-indicator" /> Schedule</NavLink></li>
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
                        <li>
                          {this.state.authed
                            ? <a href="/"><i className="fa fa-user fa-indicator" /> Logout </a>
                            : <NavLink  to="/login"><i className="fa fa-user fa-indicator" /> Login</NavLink>
                          }
                        </li>
                      </ul>
                    </div>{/*/.nav-collapse */}
                  </div>
                </nav>
              </header>
                <Switch>
                  <Route path='/' exact component={Home} />
                    <PublicRoute authed={this.state.authed} path='/login' name="login" component={Login} />
                    <PrivateRoute data="" authed={this.state.authed} path='/dashboard' component={Dashboard} />
                    <PrivateRoute data="" authed={this.state.authed} path='/schedule' component={Schedule} />
                    <PrivateRoute data="" authed={this.state.authed} path='/contact' component={contact} />
                  <Route render={() => <h3>No Match</h3>} />
                </Switch>
                <Footer/>  
              </div>       
          </BrowserRouter>
      </div>
    );
  }
}
// AppContainer.js
const mapStateToProps = (state, ownProps) => (
  { geod: state.geod, username : userName }
  );
const mapDispatchToProps = {  activateGeod, closeGeod };
const AppContainer = connect( mapStateToProps,mapDispatchToProps)(App);
export default AppContainer;  