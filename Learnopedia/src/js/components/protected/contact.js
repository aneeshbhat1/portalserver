import React, { Component } from 'react'

export default class contact extends Component {
  render () {
    //console.log(this);
    return (
     <div className="page-section-ptb-100">
        <section className="white-bg contact-3 clearfix">
          <div className="co-plr">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9645051042316!2d77.62398261520882!3d12.974122090854218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae169eb48244cf%3A0x9c6a910800a67d04!2sEF+Education+First!5e0!3m2!1sen!2sin!4v1505473389548" width="100%" frameBorder={0} style={{border: 0}} allowFullScreen />
                  </div>       
                </div>
                <div className="col-lg-6 col-md-6"> 
                  <div className="bg-7 contact-3-info bg-blue-gradient">
                    <div className="clearfix">
                      <h2 className="text-white">Contact Us</h2>
                      <p className="text-white mb-50">We would like to hear from you! Please feel free to call or stop by our office.</p>
                      <div className="contact-form clearfix">
                        <div className="section-field">
                          <i className="fa fa-user" />
                          <input type="text" placeholder="Name*" name="name" className="placeholder" />
                        </div> 
                        <div className="section-field">
                          <i className="fa fa-envelope-o" />
                          <input type="email" placeholder="Email*" name="email" className="placeholder" />
                        </div>
                        <div className="section-field">
                          <i className="fa fa-file-text-o" />
                          <input className="web placeholder" type="text" placeholder="Web*" name="web" />
                        </div>
                        <div className="section-field textarea">
                          <i className="fa fa-pencil" />
                          <textarea className="input-message placeholder" placeholder="Comment*" rows={7} name="message" defaultValue={""} />
                        </div>
                        <a href="#" className="button mt-20">
                          <span>Send your message </span>
                          <i className="fa fa-paper-plane" />
                        </a>
                      </div>
                    </div>
                    {/* =================================== */}
                    <div className="get-in-touch mt-50 clearfix">
                      <h2 className="text-white">Get in Touch</h2>
                      <p className="mt-20 mb-30 text-white">Our office is open 8.30-5.30 Monday to Friday. Or send us an email by filling out the form below.</p>
                    </div>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4"> 
                        <div className="contact-add">
                          <i className="fa fa-map-marker" />
                          <p className="text-white">Middle East & Asia (Dubai)</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="contact-add">
                          <i className="fa fa-phone" />
                          <p className="text-white">+0097144462510</p>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="contact-add">
                          <i className="fa fa-envelope-o" />
                          <p className="text-white"> support@ef.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* =================================== */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="news-letter white-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h1 className="text-blue">News letter sign up</h1>
                <p>Keep up on our always evolving product features and technology. Enter your e-mail and subscribe to our newsletter.</p>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="section-field mt-30">
                  <div className="field-widget">
                    <i className="fa fa-envelope-o" />
                    <input type="text" placeholder="Email address..." name="name" className="placeholder" />
                    <a className="button-border pull-right" href="#">
                      <span>Sign up</span>
                    </a>
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