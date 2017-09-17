import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.css"
import "../custom_modules/css/plugins-css.css"
import "../custom_modules/css/mega-menu/mega_menu.css"
import "../custom_modules/css/default.css"
import "../custom_modules/css/style.css"
import "../custom_modules/css/responsive.css"
import "../custom_modules/css/custom.css"
import Particles from "react-particles-js"
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
                  opacity: 1
                }
              },
              bubble: {
                distance: 800,
                size: 10,
                duration: 2,
                opacity: 0.8,
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
export class Banner extends Component {
  render() {
    return (
      <div className="particle_css_abs">
        <section className="banner">
          <div className="owl-carousel-1">
            <div className="item">
              <div className="slider-contents container slide-1 text-center">
                <h2 className="text-white text-uppercase">
                  How you can become a mobile app developer ?
                </h2>
                <p className="text-white">
                  We are a creative company, who works with passion and love
                </p>
                <a href="" className="button">
                  <span>Upcoming Events</span> <i className="fa fa-calendar" />
                </a>
                <a href="" className="button button-white">
                  <span>Discover more</span> <i className="fa fa-eye" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="bgColour">
          <ParticlesRunner />
        </div>
      </div>
    )
  }
}
