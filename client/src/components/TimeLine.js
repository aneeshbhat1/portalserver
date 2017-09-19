import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../actions"

class TimeLine extends Component {
  componentDidMount() {
    this.props.fetchFutureEvents()
  }

  getShortDateAndMonth(date) {
    let shortMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ]
    let formattedDate = new Date(date)
    let hours = formattedDate.getHours()
    let minutes = formattedDate.getMinutes()
    let ampm = hours >= 12 ? "PM" : "AM"
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes
    let strTime = hours + ":" + minutes + " " + ampm
    return {
      date: (formattedDate.getDate() < 10 ? "0" : "") + formattedDate.getDate(),
      shortMonth: shortMonths[formattedDate.getMonth()],
      DD_MM_YYYY:
        (formattedDate.getDate() < 10 ? "0" : "") +
        formattedDate.getDate() +
        "-" +
        (formattedDate.getMonth() + 1 < 10 ? "0" : "") +
        (formattedDate.getMonth() + 1) +
        "-" +
        formattedDate.getFullYear() +
        " " +
        strTime
    }
  }
  getLevelOfEvent(level) {
    let levelCollection = ["Beginner", "Moderate", "Advanced"]
    return levelCollection[level]
  }
  renderTimeLineContent() {
    switch (this.props.eventList) {
      case null:
        return (
          <div>
            <section className="white-bg blog ">
              <div className="container">
                <div className="row">
                  <div className="container">
                    <ul className="timeline border-darked">
                      <li className="entry-date">
                        {" "}
                        <span> XXXXXX XXXX </span>
                      </li>
                      {/* =========================================== */}
                      <li>
                        <div className="timeline-badge primary">
                          <a>
                            21 <span>Dec</span>
                          </a>
                        </div>
                        <div className="timeline-panel">
                          <div className="blog-entry post-2">
                            <div className="entry-title mt-30 mb-20">
                              <i className="fa fa-file-video-o" />
                              <h4>XXXXXX XXXXXXXXXXXX</h4>
                            </div>
                            <div className="entry-meta">
                              <a href="">
                                <i className="fa fa-user" /> XX XXX XXXXX
                              </a>
                              <a href="">
                                <i className="fa fa-comments-o" /> X XXXXXXXXX
                              </a>
                              <a href="">
                                <i className="fa fa-folder-open" />{" "}
                                XXXXXXXXXXXXXXX
                              </a>
                            </div>
                            <div className="entry-content mt-20 mb-30">
                              <p>
                                Lorem ipsum dolor sit amet of Lorem Ipsum. Proin
                                gravida nibh vel velit auctor aliquet. Aenean
                                sollicitudin, lorem quis bibendum auctor, nisi
                                elit consequat ipsum, nec sagittis sem nibh id
                                elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum
                                velit. Nam nec tellus a odio tincidunt pharetra.
                              </p>
                            </div>
                            <div className="entry-share clearfix">
                              <a className="button-small pull-left" href="">
                                <span>XXXXX XXXX</span>
                                <i className="fa fa-hand-o-right" />
                              </a>
                              <div className="share small pull-right">
                                <a className="share-button" href="">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ul>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-facebook" />
                                    </a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="">
                                      <i className="fa fa-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-dribbble" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-vimeo" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* =========================================== */}
                      <li className="timeline-inverted">
                        <div className="timeline-badge primary">
                          <a>
                            21 <span>Dec</span>
                          </a>
                        </div>
                        <div className="timeline-panel">
                          <div className="blog-entry post-2">
                            <div className="entry-title mt-30 mb-20">
                              <i className="fa fa-file-audio-o" />
                              <h4>XXXXXXXXX XXXXX XXX</h4>
                            </div>
                            <div className="entry-meta">
                              <a href="">
                                <i className="fa fa-user" /> XX XXX XXXX
                              </a>
                              <a href="">
                                <i className="fa fa-comments-o" /> X XXXX
                              </a>
                              <a href="">
                                <i className="fa fa-folder-open" />{" "}
                                XXXXXX/XXXXXXX
                              </a>
                            </div>
                            <div className="entry-content mt-20 mb-30">
                              <p>
                                Lorem ipsum dolor sit amet of Lorem Ipsum. Proin
                                gravida nibh vel velit auctor aliquet. Aenean
                                sollicitudin, lorem quis bibendum auctor, nisi
                                elit consequat ipsum, nec sagittis sem nibh id
                                elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum
                                velit. Nam nec tellus a odio tincidunt pharetra.
                              </p>
                            </div>
                            <div className="entry-share clearfix">
                              <a className="button-small pull-left" href="">
                                <span>XXXX XXXXX</span>
                                <i className="fa fa-hand-o-right" />
                              </a>
                              <div className="share small pull-right">
                                <a className="share-button" href="">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ul>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-facebook" />
                                    </a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="">
                                      <i className="fa fa-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-dribbble" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-vimeo" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-badge primary">
                          <a>
                            21 <span>Dec</span>
                          </a>
                        </div>
                        <div className="timeline-panel">
                          <div className="blog-entry post-2">
                            <div className="entry-title mt-30 mb-20">
                              <i className="fa fa-file-video-o" />
                              <h4>XXXXXX XXXXXXXXXXXX</h4>
                            </div>
                            <div className="entry-meta">
                              <a href="">
                                <i className="fa fa-user" /> XX XXX XXXXX
                              </a>
                              <a href="">
                                <i className="fa fa-comments-o" /> X XXXXXXXXX
                              </a>
                              <a href="">
                                <i className="fa fa-folder-open" />{" "}
                                XXXXXXXXXXXXXXX
                              </a>
                            </div>
                            <div className="entry-content mt-20 mb-30">
                              <p>
                                Lorem ipsum dolor sit amet of Lorem Ipsum. Proin
                                gravida nibh vel velit auctor aliquet. Aenean
                                sollicitudin, lorem quis bibendum auctor, nisi
                                elit consequat ipsum, nec sagittis sem nibh id
                                elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum
                                velit. Nam nec tellus a odio tincidunt pharetra.
                              </p>
                            </div>
                            <div className="entry-share clearfix">
                              <a className="button-small pull-left" href="">
                                <span>XXXXX XXXX</span>
                                <i className="fa fa-hand-o-right" />
                              </a>
                              <div className="share small pull-right">
                                <a className="share-button" href="">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ul>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-facebook" />
                                    </a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="">
                                      <i className="fa fa-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-dribbble" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-vimeo" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* =========================================== */}
                      <li className="timeline-inverted">
                        <div className="timeline-badge primary">
                          <a>
                            21 <span>Dec</span>
                          </a>
                        </div>
                        <div className="timeline-panel">
                          <div className="blog-entry post-2">
                            <div className="entry-title mt-30 mb-20">
                              <i className="fa fa-file-audio-o" />
                              <h4>XXXXXXXXX XXXXX XXX</h4>
                            </div>
                            <div className="entry-meta">
                              <a href="">
                                <i className="fa fa-user" /> XX XXX XXXX
                              </a>
                              <a href="">
                                <i className="fa fa-comments-o" /> X XXXX
                              </a>
                              <a href="">
                                <i className="fa fa-folder-open" />{" "}
                                XXXXXX/XXXXXXX
                              </a>
                            </div>
                            <div className="entry-content mt-20 mb-30">
                              <p>
                                Lorem ipsum dolor sit amet of Lorem Ipsum. Proin
                                gravida nibh vel velit auctor aliquet. Aenean
                                sollicitudin, lorem quis bibendum auctor, nisi
                                elit consequat ipsum, nec sagittis sem nibh id
                                elit. Duis sed odio sit amet nibh vulputate
                                cursus a sit amet mauris. Morbi accumsan ipsum
                                velit. Nam nec tellus a odio tincidunt pharetra.
                              </p>
                            </div>
                            <div className="entry-share clearfix">
                              <a className="button-small pull-left" href="">
                                <span>XXXX XXXXX</span>
                                <i className="fa fa-hand-o-right" />
                              </a>
                              <div className="share small pull-right">
                                <a className="share-button" href="">
                                  <i className="fa fa-share-alt" />
                                </a>
                                <ul>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-facebook" />
                                    </a>
                                  </li>
                                  <li>
                                    {" "}
                                    <a href="">
                                      <i className="fa fa-twitter" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-dribbble" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="">
                                      <i className="fa fa-vimeo" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* =========================================== */}
                      <li className="entry-date-bottom">
                        {" "}
                        <a className="disabled" href="">
                          Load more...
                        </a>
                      </li>
                      {/* =========================================== */}
                      <li className="clearfix" style={{ float: "none" }} />
                    </ul>
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
          <div className="container">
            <ul className="timeline">
              <li className="entry-date">
                {" "}
                <span> Upcoming events </span>
              </li>
              {this.props.eventList.map((event, index) => {
                return (
                  <li
                    key={index}
                    className={index % 2 === 0 ? "" : "timeline-inverted"}
                  >
                    <div className="timeline-badge primary">
                      <a>
                        {this.getShortDateAndMonth(event.EventDate).date}{" "}
                        <span>
                          {
                            this.getShortDateAndMonth(event.EventDate)
                              .shortMonth
                          }
                        </span>
                      </a>
                    </div>
                    <div className="timeline-panel">
                      <div className="blog-entry post-2">
                        <div className="entry-title mt-30 mb-20">
                          <i className="fa fa-calendar" />
                          <h4>{event.Name}</h4>
                        </div>
                        <div className="entry-meta">
                          <div className="row">
                            <div className="col-md-12">
                              <span className="tooltip-content-2">
                                {" "}
                                Date and Time :
                                {
                                  this.getShortDateAndMonth(event.EventDate)
                                    .DD_MM_YYYY
                                }
                              </span>
                            </div>
                          </div>
                          <div className="">
                            <a>
                              <i className="fa fa-map-marker" /> Venue:{" "}
                              {event.Venue}
                            </a>
                            <a>
                              <i className="fa fa fa-clock-o" /> Duration({event.DurationType}) :{" "}
                              {event.Duration}
                            </a>
                            <a>
                              <i className="fa fa-binoculars" /> Level:{" "}
                              <mark>{event.Level}</mark>
                            </a>
                          </div>
                        </div>  
                        <div className="entry-content mt-20 mb-30">
                          <p>{event.DetailedDescription}</p>
                        </div>
                        <div className="entry-share clearfix">
                          <a className="button-small pull-left" href="">
                            <span className="disabled">Read More</span>
                            <i className="fa fa-hand-o-right" />
                          </a>
                          <div className="share small pull-right" style={{display:'none'}}>
                            <a className="share-button" href="">
                              <i className="fa fa-share-alt" />
                            </a>
                            <ul>
                              <li>
                                <a href="">
                                  <i className="fa fa-facebook" />
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a href="">
                                  <i className="fa fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <i className="fa fa-dribbble" />
                                </a>
                              </li>
                              <li>
                                <a href="">
                                  <i className="fa fa-vimeo" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
              {/* =========================================== */}
              <li className="entry-date-bottom disabled">
                {" "}
                <a href="" className="disabled">
                  Load more...
                </a>
              </li>
              {/* =========================================== */}
              <li className="clearfix" style={{ float: "none" }} />
            </ul>
          </div>
        )
    }
  }
  render() {
    return (
      <section className="white-bg blog page-section-ptb">
        <div className="container">
          <div className="row">{this.renderTimeLineContent()}</div>
        </div>
      </section>
    )
  }
}

function mapStateToProps({ eventList }) {
  return { eventList }
}

export default connect(mapStateToProps, actions)(TimeLine)
