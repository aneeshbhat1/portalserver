import React, { Component } from "react"
import { connect } from "react-redux"

//import footerLogo from "../image/logo.png"

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="footer-widget mt-60">
            <div className="container">
              <div className="row">
              <div className="col-md-6">
                <img src="//mediakey1.ef.com/sitecore/__/~/media/universal/logo/global-footer/2016/00.svg" alt=""/>
              </div>
                <div className="col-lg-6 col-md-6">
                  <p className="text-white mt-30 text-right">
                    © EF Education First 2017. All rights reserved.
                  </p>
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
