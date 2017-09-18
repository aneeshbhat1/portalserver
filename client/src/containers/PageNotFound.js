import React, { Component } from "react"
import { connect } from "react-redux"

class PageNotFound extends Component {
  render() {
    return (
      <section className="error-404 white-bg page-section-ptb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="error-block text-center clearfix">
                <h1 className="text-blue mb-40">Ooopps :(</h1>
                <p>The Page you were looking for, couldn't be found.</p>
              </div>   
              <br /> 
              <div className="error-search-box">
                <p className="mb-50">Can't find what you looking for? Take a moment and do a search below or start from our <a className="link" href="">Home Page </a></p>
              </div>     
            </div>
          </div>
        </div>
      </section>

    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(PageNotFound)
