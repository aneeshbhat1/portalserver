import React, { Component } from 'react'

export default class Schedule extends Component {
  render () {
  	console.log(this);
    return (
     	<div>
      <section className="white-bg blog page-section-ptb"> 
        <div className="container">
          <div className="row">
            <div className="container">
              <ul className="timeline">
                <li className="entry-date"> <span> October 2015 </span></li> 
                {/* =========================================== */}
                <li>
                  <div className="timeline-badge primary"><a>21 <span>Dec</span></a></div>
                  <div className="timeline-panel">
                    <div className="blog-entry post-2">
                      <div className="entry-title mt-30 mb-20">
                        <i className="fa fa-file-video-o" />
                        <h4>Mobile development</h4>
                      </div>
                      <div className="entry-meta">
                        <a href=""><i className="fa fa-user" /> By the Shiva</a>
                        <a href=""><i className="fa fa-comments-o" /> 5 Comments</a>
                        <a href=""><i className="fa fa-folder-open" /> Design/Graphics</a>
                      </div>
                      <div className="entry-content mt-20 mb-30">
                        <p>Lorem ipsum dolor sit amet  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt pharetra.</p>
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
                            <li><a href=""><i className="fa fa-facebook" /></a></li>
                            <li> <a href=""><i className="fa fa-twitter" /></a></li>
                            <li><a href=""><i className="fa fa-dribbble" /></a></li>
                            <li><a href=""><i className="fa fa-vimeo" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* =========================================== */}
                <li className="timeline-inverted">
                  <div className="timeline-badge primary"><a>21 <span>Dec</span></a></div>
                  <div className="timeline-panel">
                    <div className="blog-entry post-2">
                      <div className="entry-title mt-30 mb-20">
                        <i className="fa fa-file-audio-o" />
                        <h4>Sourcebits mobile app</h4>
                      </div>
                      <div className="entry-meta">
                        <a href=""><i className="fa fa-user" /> By the Shiva</a>
                        <a href=""><i className="fa fa-comments-o" /> 5 Comments</a>
                        <a href=""><i className="fa fa-folder-open" /> Design/Graphics</a>
                      </div>
                      <div className="entry-content mt-20 mb-30">
                        <p>Lorem ipsum dolor sit amet  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt pharetra.</p>
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
                            <li><a href=""><i className="fa fa-facebook" /></a></li>
                            <li> <a href=""><i className="fa fa-twitter" /></a></li>
                            <li><a href=""><i className="fa fa-dribbble" /></a></li>
                            <li><a href=""><i className="fa fa-vimeo" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* =========================================== */}
                <li>
                  <div className="timeline-badge primary"><a>21 <span>Dec</span></a></div>
                  <div className="timeline-panel">
                    <div className="blog-entry post-1">
                      
                      <div className="entry-title mt-30 mb-20">
                        <i className="fa fa-th" />
                        <h4>IBM Mobility Services</h4>
                      </div>
                      <div className="entry-meta">
                        <a href=""><i className="fa fa-user" /> By the Shiva</a>
                        <a href=""><i className="fa fa-comments-o" /> 5 Comments</a>
                        <a href=""><i className="fa fa-folder-open" /> Design/Graphics</a>
                      </div>
                      <div className="entry-content mt-20 mb-30">
                        <p>Lorem ipsum dolor sit amet  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt pharetra.</p>
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
                            <li><a href=""><i className="fa fa-facebook" /></a></li>
                            <li> <a href=""><i className="fa fa-twitter" /></a></li>
                            <li><a href=""><i className="fa fa-dribbble" /></a></li>
                            <li><a href=""><i className="fa fa-vimeo" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* =========================================== */}
                <li className="timeline-inverted">
                  <div className="timeline-badge primary"><a>21 <span>Dec</span></a></div>
                  <div className="timeline-panel">
                    <div className="blog-entry post-1">
                      <div className="blog-entry-you-tube">
                        <div className="js-video [youtube, widescreen]">
                          <iframe title="youtube" src="https://www.youtube.com/embed/GnABUxgUsDs" frameBorder={0}></iframe>
                        </div>
                      </div>
                      <div className="entry-title mt-30 mb-20">
                        <i className="fa fa-youtube" />
                        <h4>Speech-to-Speech Translation</h4>
                      </div>
                      <div className="entry-meta">
                        <a href=""><i className="fa fa-user" /> By the Shiva</a>
                        <a href=""><i className="fa fa-comments-o" /> 5 Comments</a>
                        <a href=""><i className="fa fa-folder-open" /> Design/Graphics</a>
                      </div>
                      <div className="entry-content mt-20 mb-30">
                        <p>Lorem ipsum dolor sit amet  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt pharetra.</p>
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
                            <li><a href=""><i className="fa fa-facebook" /></a></li>
                            <li> <a href=""><i className="fa fa-twitter" /></a></li>
                            <li><a href=""><i className="fa fa-dribbble" /></a></li>
                            <li><a href=""><i className="fa fa-vimeo" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* =========================================== */}
                <li>
                  <div className="timeline-badge primary"><a>21 <span>Dec</span></a></div>
                  <div className="timeline-panel">
                    <div className="blog-entry post-1">
                      <div className="blog-entry-vimeo">
                        <div className="js-video [vimeo, widescreen]">
                          <iframe title="vimeo" src="http://player.vimeo.com/video/155052941" frameBorder={0}  />
                        </div>
                      </div>
                      <div className="entry-title mt-30 mb-20">
                        <i className="fa fa-vimeo-square" />
                        <h4>Salesforce development</h4>
                      </div>
                      <div className="entry-meta">
                        <a href=""><i className="fa fa-user" /> By the Shiva</a>
                        <a href=""><i className="fa fa-comments-o" /> 5 Comments</a>
                        <a href=""><i className="fa fa-folder-open" /> Design/Graphics</a>
                      </div>
                      <div className="entry-content mt-20 mb-30">
                        <p>Lorem ipsum dolor sit amet  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt pharetra.</p>
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
                            <li><a href=""><i className="fa fa-facebook" /></a></li>
                            <li> <a href=""><i className="fa fa-twitter" /></a></li>
                            <li><a href=""><i className="fa fa-dribbble" /></a></li>
                            <li><a href=""><i className="fa fa-vimeo" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* =========================================== */}
                <li className="timeline-inverted">
                  <div className="timeline-badge primary"><a>21 <span>Dec</span></a></div>
                  <div className="timeline-panel">
                    <div className="blog-entry post-1">
                      <div className="blog-entry-quote">
                        <blockquote className="entry-quote">
                          <i className="fa fa-quote-left" /> 
                          <p>Lorem ipsum dolor sit amet  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt pharetra.</p>
                          <div className="quote-author text-right">
                            <a href>- Parthiban</a>
                          </div>
                        </blockquote>
                      </div>
                      <div className="entry-title mt-30 mb-20">
                        <i className="fa fa-quote-left" />
                        <h4>ReactJS development</h4>
                      </div>
                      <div className="entry-meta">
                        <a href=""><i className="fa fa-user" /> By the Shiva</a>
                        <a href=""><i className="fa fa-comments-o" /> 5 Comments</a>
                        <a href=""><i className="fa fa-folder-open" /> Design/Graphics</a>
                      </div>
                      <div className="entry-content mt-20 mb-30">
                        <p>Lorem ipsum dolor sit amet  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt pharetra.</p>
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
                            <li><a href=""><i className="fa fa-facebook" /></a></li>
                            <li> <a href=""><i className="fa fa-twitter" /></a></li>
                            <li><a href=""><i className="fa fa-dribbble" /></a></li>
                            <li><a href=""><i className="fa fa-vimeo" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* =========================================== */}
                <li>
                  <div className="timeline-badge primary"><a>21 <span>Dec</span></a></div>
                  <div className="timeline-panel">
                    <div className="blog-entry post-1">
                      <div className="entry-title mt-30 mb-20">
                        <i className="fa fa-file-text-o" />
                        <h4>Mobile Salesforce Develeopent</h4>
                      </div>
                      <div className="entry-meta">
                        <a href=""><i className="fa fa-user" /> By the Shiva</a>
                        <a href=""><i className="fa fa-comments-o" /> 5 Comments</a>
                        <a href=""><i className="fa fa-folder-open" /> Design/Graphics</a>
                      </div>
                      <div className="entry-content mt-20 mb-30">
                        <p>Lorem ipsum dolor sit amet  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt pharetra.
                          <br />
                          <br />
                          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. 
                          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. 
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
                            <li><a href=""><i className="fa fa-facebook" /></a></li>
                            <li> <a href=""><i className="fa fa-twitter" /></a></li>
                            <li><a href=""><i className="fa fa-dribbble" /></a></li>
                            <li><a href=""><i className="fa fa-vimeo" /></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* =========================================== */}
                <li className="entry-date-bottom"> <a href="">Load more...</a></li> 
                {/* =========================================== */}
                <li className="clearfix" style={{float: 'none'}} />
              </ul>
            </div>
          </div>
        </div>  
      </section>

     	
     	</div>
    )
  }
}