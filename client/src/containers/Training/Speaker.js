import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../../actions"

class Speakers extends Component {
  componentDidMount() {
    this.props.fetchSpeakers()
  }
  renderSpeakerContent() {
    switch (this.props.speakerList) {
      case null:
        return (
           <div>
             <section className="white-bg pad-135-t transition">
               <div className="container">
                 <div className="row">
                   <div className="col-lg-12 col-md-12">
                     <div className="section-title-1 text-center">
                       <h1 className="text-blue"><span className="border-animated border-center" style={{width: '200px'}} ></span></h1>
                       <p><span className="border-animated border-center" style={{width: '600px'}} ></span></p>
                       <h1 className="mt-10"><span className="border-animated border-center" style={{width: '350px'}} ></span></h1>
                       <h1 className="mt-10"><span className="border-animated border-center" style={{width: '400px'}} ></span></h1>
                       <h1 className="mt-10"><span className="border-animated border-center" style={{width: '300px'}} ></span></h1>
                       <h1 className="mt-10"><span className="border-animated border-center" style={{width: '250px'}} ></span></h1>
                     </div>
                   </div>
                 </div>
                 <div className="team-2">
                   <div className="row">
                     <div className="col-lg-3 col-md-3 col-sm-6 mar-10">
                       <div className="team-2-box">
                         <span className="border-animated border-center" style={{width: '600px', height: '270px'}} ></span>
                       </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-6 mar-10">
                       <div className="team-2-box">
                         <span className="border-animated border-center" style={{width: '600px', height: '270px'}} ></span>
                       </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-6 mar-10">
                       <div className="team-2-box">
                         <span className="border-animated border-center" style={{width: '600px', height: '270px'}} ></span>
                       </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-6 mar-10">
                       <div className="team-2-box">
                         <span className="border-animated border-center" style={{width: '600px', height: '270px'}} ></span>
                       </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-6 mar-10">
                       <div className="team-2-box">
                         <span className="border-animated border-center" style={{width: '600px', height: '270px'}} ></span>
                       </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-6 mar-10">
                       <div className="team-2-box">
                         <span className="border-animated border-center" style={{width: '600px', height: '270px'}} ></span>
                       </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-6 mar-10">
                       <div className="team-2-box">
                         <span className="border-animated border-center" style={{width: '600px', height: '270px'}} ></span>
                       </div>
                     </div>
                     <div className="col-lg-3 col-md-3 col-sm-6 mar-10">
                       <div className="team-2-box">
                         <span className="border-animated border-center" style={{width: '600px', height: '270px'}} ></span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>
           </div>
          )
      case false:
        return
      default:
        return (
          <div>
            <section className="white-bg pad-135-t transition">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="section-title-1 text-center">
                      <h1 className="text-blue">Speakers</h1>
                      <div className="title-line" />
                      <p>Learn from the greatest.</p>
                    </div>
                  </div>
                </div>
                <div className="team-2">
                  <div className="row">
                    {this.props.speakerList.map((speaker, index) => {
                      return (
                        <div
                          className="col-lg-3 col-md-3 col-sm-6 mar-10"
                          key={index}
                        >
                          <div className="team-2-box">
                            <img
                              className="img-responsive"
                              src={require("../../image/speaker/01.jpg")}
                              alt=""
                            />
                            <div className="team-overlay text-center">
                              <div className="info">
                                <h5 className="text-white">{speaker.Name}</h5>
                                <span>{speaker.Domain}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          </div>
        )
    }
  }
  render() {
    return <div>{this.renderSpeakerContent()}</div>
  }
}

function mapStateToProps({ speakerList }) {
  return { speakerList }
}
export default connect(mapStateToProps, actions)(Speakers)
