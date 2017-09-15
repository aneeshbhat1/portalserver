/*eslint-disable no-unused-vars*/
import React, { Component } from 'react'
import {Banner} from '../helpers/banner.js'
import client1 from '../../image/clients/01.png';
import client2 from '../../image/clients/02.png';
import Particles from 'react-particles-js';

class HomeExtends extends React.Component {
  render() {
    return (
    	<Particles params={{
    			particles: {
    				"number": {
				      "value": 50,
				      "density": {
				        "enable": true,
				        "value_area": 800
				      }
				    },
				    "color": {
				       "value": "#ffffff"
				    },
				    "shape": {
			          "type": "circle",
			          "stroke": {
			            "width": 10,
			            "color": "#000000"
			          },
			          "polygon": {
			            "nb_sides": 10
			          }
			        },
			        "opacity": {
		              "value": 0.5,
		              "random": false,
		              "anim": {
		                "enable": false,
		                "speed": 1,
		                "opacity_min": 0.1,
		                "sync": false
		              }
		            },
    				line_linked: {
    				  "enable": true,
				      "distance": 200,
				      "color": "#e1e1e1",
				      "opacity": 0.4,
				      "width": 2
    				},
    				"move": {
				      "enable": true,
				      "speed": 5,
				      "direction": "none",
				      "random": false,
				      "straight": false,
				      "out_mode": "bounce",
				      "bounce": false,
				      "attract": {
				        "enable": false,
				        "rotateX": 600,
				        "rotateY": 1200
				      }
				    }
    			},
    			"interactivity": {
    			    "detect_on": "canvas",
    			    "events": {
    			      "onhover": {
    			        "enable": true,
    			        "mode": "repulse"
    			      },
    			      "onclick": {
    			        "enable": true,
    			        "mode": "bubble"
    			      },
    			      "resize": true
    			    },
    			    "modes": {
    			      "grab": {
    			        "distance": 800,
    			        "line_linked": {
    			          "opacity": 1
    			        }
    			      },
    			      "bubble": {
    			        "distance": 800,
    			        "size": 10,
    			        "duration": 2,
    			        "opacity": 0.8,
    			        "speed": 60
    			      },
    			      "repulse": {
    			        "distance": 100,
    			        "duration": 0.4
    			      },
    			      "push": {
    			        "particles_nb": 4
    			      },
    			      "remove": {
    			        "particles_nb": 2
    			      }
    			    }
    			  },
    			  "retina_detect": true,
    		}}/>
    );
  }
};

export default class Home extends Component {
  render () {
    return (
      <div>
      	<div className="particle_css_abs">
      	<Banner/>
      	<div className="bgColour">
      		<HomeExtends/>
      	</div>
      	</div>        
        <section className="ovr-hid page-section-ptb-20 bg-blue-gradient book-clusters">
	        <div className="container">
	          <div className="row">
	            <div className="col-lg-12 col-md-12">
	              <div className="section-title-1 text-center">
	                <h1 className="text-white">Where can I get some?</h1>
	                <div className="title-line" />
	              </div>
	            </div>
	          </div>
	          <div className="row">
	            <div className="col-lg-6 col-md-6 text-white">
	              <div className="custom-content">
	                <h3 className="text-white">We know the secret of ultimate success</h3>
	                <b>Start now! Your big opportunity may be right where you are! </b>
	                <p className="mt-30 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing eli. Vero quod conseqt quibusdam enim expedita sed quia nesciunt incidunt accusamus necessitatibus modi adipisci officia libero accusantium esse hic obcaecati.
	                  <br />
	                  <br /> Roin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
	                <a href="" className="button mt-20"><span>Learn More</span><i className="fa fa-hand-o-right" /></a>
	              </div>
	            </div>
	            <div className="col-lg-6 col-md-6">
	              <div className="js-video [youtube, widescreen]">
	                <iframe title="Data" src="https://www.youtube.com/embed/XxVg_s8xAms?ecver=2" frameBorder={0} allowFullScreen />
	              </div>
	            </div>
	          </div>
	        </div>
	        <div className="container">
	          <div className="row">
	            <div className="col-lg-6 col-md-6">
	              <div className="clients-box mb-30 clearfix">
	                <div className="clients-photo">
	                  <img src={client1} alt="" />
	                </div>
	                <div className="clients-info">
	                  <h4>Lorem ipsum dolor sit amet</h4>
	                  <a href=""> URL <i className="fa fa-link" />More details</a>
	                  <p>Lorem ipsum dolor sit amet of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
	                </div>
	              </div>
	            </div>
	            <div className="col-lg-6 col-md-6">
	              <div className="clients-box mb-30 clearfix">
	                <div className="clients-photo">
	                  <img src={client2} alt="" />
	                </div>
	                <div className="clients-info">
	                  <h4>Lorem ipsum dolor sit amet</h4>
	                  <a href=""> URL <i className="fa fa-link" />More details</a>
	                  <p>Lorem ipsum dolor sit amet of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </section>
      </div>
    )
  }
}