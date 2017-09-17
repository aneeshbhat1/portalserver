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
    return {
      date: formattedDate.getDate(),
      shortMonth: shortMonths[formattedDate.getMonth()]
    }
  }

  renderTimeLineContent() {
    switch (this.props.eventList) {
      case null:
        return
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
                          <i className="fa fa-file-audio-o" />
                          <h4>{event.Name}</h4>
                        </div>
                        <div className="entry-meta">
                          <a href="">
                            <i className="fa fa-user" /> By the Shiva
                          </a>
                          <a href="">
                            <i className="fa fa-comments-o" /> 5 Comments
                          </a>
                          <a href="">
                            <i className="fa fa-folder-open" /> Design/Graphics
                          </a>
                        </div>
                        <div className="entry-content mt-20 mb-30">
                          <p>
                            Lorem ipsum dolor sit amet of Lorem Ipsum. Proin
                            gravida nibh vel velit auctor aliquet. Aenean
                            sollicitudin, lorem quis bibendum auctor, nisi elit
                            consequat ipsum, nec sagittis sem nibh id elit. Duis
                            sed odio sit amet nibh vulputate cursus a sit amet
                            mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                            odio tincidunt pharetra.
                          </p>
                        </div>
                        <div className="entry-share clearfix">
                          <a className="button-small pull-left" href="">
                            <span>Read More</span>
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
                )
              })}
              {/* =========================================== */}
              <li className="entry-date-bottom disabled">
                {" "}
                <a href="">Load more...</a>
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
