import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../custom_modules/css/plugins-css.css"
import "../custom_modules/css/mega-menu/mega_menu.css"
import "../custom_modules/css/default.css"
import "../custom_modules/css/style.css"
import "../custom_modules/css/responsive.css"
import "../custom_modules/css/shortcodes.css"
import "../custom_modules/css/custom.css"
import Particles from "react-particles-js"
import { connect } from "react-redux"
import * as actions from "../actions"

function whichStage(data) {
  if (data === 0) {
    return (
      <div>
        <RegisterData />
      </div>
    )
  }
  if (data === 1) {
    return (
      <div>
        <PreviewRegisteredData />
      </div>
    )
  } else {
    return (
      <div>
        <SuccessMessage />
      </div>
    )
  }
}
class Parent extends React.Component {
  constructor(props, context) {
    super(props, context)
    const attendees = props.attendees
    let activeState = 0
    if (props.auth) {
      for (let i = 0; i < attendees.length; i++) {
        if (attendees[i]._id === props.auth._id) {
          activeState = 2
        }
      }
    }

    this.state = {
      active: activeState,
      handlerNext: "Enroll Here",
      handlerBack: "Back"
    }
    this.handleClickIncrement = this.handleClickIncrement.bind(this)
    this.handleClickDecrement = this.handleClickDecrement.bind(this)
  }

  handleClickIncrement() {
    if (this.state.active === 1) {
      this.props.postRegistrationEvent(this.props.eventId)
    }
    this.setState({
      active: this.state.active + 1
    })
    if (this.state.active + 1 === 1) {
      this.setState({ handlerNext: "Confirm", handlerBack: "Back" })
    } else if (this.state.active > 1) {
      debugger
      this.setState({ active: 2 })
      this.setState({ handlerNext: "Confirm", handlerBack: "Back" })
    }
  }
  handleClickDecrement() {
    this.setState({
      active: this.state.active - 1
    })
    if (0 >= this.state.active - 1) {
      this.setState({ handlerNext: "Enroll Here", handlerBack: "Back" })
    }
  }
  render() {
    return (
      <div>
        {whichStage(this.state.active)}
        <div className="form_registration_button">
          {this.state.active > 0 && this.state.active < 2 ? (
            <a
              onClick={this.handleClickDecrement}
              className="button button-black mb-20 text-center btn-back col-md-3"
            >
              <i className="fa fa-arrow-left" />
              <span>{this.state.handlerBack} </span>
            </a>
          ) : null}
          {this.state.active >= 0 && this.state.active < 2 ? (
            <a
              onClick={this.handleClickIncrement}
              className="button button-black mb-20 text-center btn-frwd col-md-3"
            >
              <span>{this.state.handlerNext} </span>
              <i className="fa fa-handshake-o" />
            </a>
          ) : null}
        </div>
      </div>
    )
  }
}
class RegisterData extends React.Component {
  render() {
    return (
      <div className="bg-7 contact-3-info bg-opacity-black-80 h170">
        <div className="clearfix">
          <h2 className="text-white">Quick Register</h2>
        </div>
      </div>
    )
  }
}

class PreviewRegisteredData extends React.Component {
  render() {
    return (
      <div className="bg-7 contact-3-info bg-opacity-black-80 h300">
        <div className="clearfix">
          <p className="text-white">Confirm your fields</p>
          <div className="contact-form clearfix">
            <div className="section-field full-width">
              <i className="fa fa-user" />
              <input
                type="text"
                placeholder="Name*"
                name="name"
                className="placeholder"
              />
            </div>
            <div className="section-field full-width">
              <i className="fa fa-envelope-o" />
              <input
                type="text"
                placeholder="Email*"
                name="name"
                className="placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
class SuccessMessage extends React.Component {
  render() {
    return (
      <div className="alerts-and-callouts">
        <div className="bs-callout bs-callout-success">
          <h4>You Have Successfully Registered</h4> Please check your email for
          further process.
        </div>
      </div>
    )
  }
}

class ParticlesRunner extends React.Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "#000000"
              },
              polygon: {
                nb_sides: 10
              }
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 200,
              color: "#e1e1e1",
              opacity: 0.4,
              width: 2
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "bubble"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 800,
                line_linked: {
                  opacity: 0.5
                }
              },
              bubble: {
                distance: 800,
                size: 10,
                duration: 2,
                opacity: 0.5,
                speed: 60
              },
              repulse: {
                distance: 100,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }}
      />
    )
  }
}
class Banner extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      active: 0
    }
  }
  componentDidMount() {
    this.props.fetchTrainings()
  }

  renderUpcomingEvent() {
    switch (this.props.eventList) {
      case null:
        return
      case false:
        return
      default:
        return (
          <section className="banner">
            <div className="col-md-6">
              <div className="owl-carousel-1">
                <div className="item">
                  <div className="slider-contents slide-1 text-center">
                    <h2 className="text-white text-uppercase">
                      {this.props.eventList[0].Name}
                    </h2>
                    <p className="text-white">
                      We are a creative company, who works with passion and love
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 register-2 col-md-offset-2 pad-t-140">
              <Parent
                attendees={this.props.eventList[0].Attendees}
                auth={this.props.auth}
                eventId={this.props.eventList[0]._id}
                postRegistrationEvent={this.props.postRegistration}
              />
            </div>
          </section>
        )
    }
  }
  render() {
    return (
      <div className="particle_css_abs">
        <div className="bgColour">
          <ParticlesRunner />
        </div>
        {this.renderUpcomingEvent()}
      </div>
    )
  }
}

function mapStateToProps({ eventList, auth }) {
  return { eventList, auth }
}

export default connect(mapStateToProps, actions)(Banner)
