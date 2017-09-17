import React, { Component } from "react"
import { connect } from "react-redux"

import footerLogo from '../image/logo.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer page-section-pt">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-logo">
                  <img id="logo-footer" className="pb-20" src={footerLogo} alt="" />
                  <p className="text-white pb-10"> Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<a href> BOOK EVENT NOW!</a></p>
                </div>
                <ul className="addresss-info">
                  <li><i className="fa fa-map-marker" />
                    <p>Salarpuria Cambridge Mall
                    </p><p>
                    </p></li>
                  <li><i className="fa fa-phone" />080 6559 0546</li>
                  <li><i className="fa fa-envelope-o" />support@ef.com</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="recent-post footer-hedding">
                  <h4 className="text-blue mb-30 mt-10">Recent Posts</h4>
                  <div className="recent-post mb-30">
                    <div className="recent-post-image">
                      <img src="images/portfolio/small/01.jpg" alt="" />
                    </div>
                    <div className="recent-post-info">
                      <a href="">Lorem ipsum dolor sit...</a>
                      <span><i className="fa fa-calendar" /> September 30, 2015</span>
                    </div>
                  </div>
                  <div className="recent-post mb-30">
                    <div className="recent-post-image">
                      <img src="images/portfolio/small/02.jpg" alt="" />
                    </div>
                    <div className="recent-post-info">
                      <a href="">Adipisicing elit beatae...</a>
                      <span><i className="fa fa-calendar" /> September 30, 2015</span>
                    </div>
                  </div>
                  <div className="recent-post mb-30">
                    <div className="recent-post-image">
                      <img src="images/portfolio/small/03.jpg" alt="" />
                    </div>
                    <div className="recent-post-info">
                      <a href="">Sunt odio atque nostr... </a>
                      <span><i className="fa fa-calendar" /> September 30, 2015</span>
                    </div>
                  </div>
                  <div className="recent-post">
                    <div className="recent-post-image">
                      <img src="images/portfolio/small/04.jpg" alt="" />
                    </div>
                    <div className="recent-post-info">
                      <a href="">Soluta eius architecto....</a>
                      <span><i className="fa fa-calendar" /> September 30, 2015</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-Newsletter footer-hedding mt-20">
                  <h4 className="text-blue mb-20">Newsletter</h4>
                  <p className="text-white mb-20">Subscribe to our newsletter.</p>
                  <div className="input-group divcenter">
                    <span className="input-group-addon"><i className="fa fa-envelope-o" /></span>
                    <input type="email" placeholder="Enter your Email" className="form-control" />
                    <span className="input-group-btn">
                      <button type="submit" className="btn btn-icon"><i className="fa fa-paper-plane" /></button> 
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-useful-link footer-hedding mb-20">
                  <h4 className="text-blue mb-30 mt-10">Useful Link</h4>
                  <ul>
                    <li><a href="">LEARN A LANGUAGE</a></li>
                    <li><a href="">LEARN ENGLISH ONLINE</a></li>
                    <li><a href="">LANGUAGE SOLUTION COMPANY</a></li>
                    <li><a href="">ACADEMIC YEAR ABROAD</a></li>
                    <li><a href="">INTERNATIONAL PRIVATE SCHOOL</a></li>
                  </ul>
                </div>
                <div className="tags footer-hedding">
                  <h4 className="text-blue">Tagcloud</h4>
                  <ul>
                    <li><a href="">Sprachreisen</a></li>
                    <li><a href="">Study Abroad</a></li>
                    <li><a href="">Learn Language</a></li>
                    <li><a href="">Gap Year Abroad</a></li>
                    <li><a href="">Student Exchange</a></li>
                    <li><a href="">English Test Guide</a></li>
                    <li><a href="">English Grammar</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-widget mt-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <p className="text-white mt-15"> © Copyright <span id="copyright"> </span> <a href=""> EF </a> All Rights Reserved </p>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="footer-widget-social">
                    <ul>
                      <li><a href="" data-tooltip="facebook"><i className="fa fa-facebook" /></a></li>
                      <li><a href="" data-tooltip="twitter"><i className="fa fa-twitter" /></a></li>
                      <li><a href="" data-tooltip="Linkedin"><i className="fa fa-linkedin" /> </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(Footer)
