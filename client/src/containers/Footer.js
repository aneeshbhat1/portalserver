import React, { Component } from "react"
import { connect } from "react-redux"

import footerLogo from "../image/logo.png"

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="footer-widget mt-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <p className="text-white mt-15">
                    {" "}
                    © Copyright <span id="copyright"> </span>{" "}
                    <a href=""> EF </a> All Rights Reserved{" "}
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
