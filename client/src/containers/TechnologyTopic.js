import React, { Component } from "react"
import { connect } from "react-redux"

const posts = [
   {
      "speakerName" : "Mark Smith",
      "speakerPosition" : "Web Developer",
      "image" : "01",
      "link" : "marksmith"
   },
   {
      "speakerName" : "Mark Smith",
      "speakerPosition" : "Web Developer",
      "image" : "01",
      "link" : "marksmith"
   },
   {
      "speakerName" : "Mark Smith",
      "speakerPosition" : "Web Developer",
      "image" : "01",
      "link" : "marksmith"
   },
   {
      "speakerName" : "Mark Smith",
      "speakerPosition" : "Web Developer",
      "image" : "01",
      "link" : "marksmith"
   },
   {
      "speakerName" : "Mark Smith",
      "speakerPosition" : "Web Developer",
      "image" : "01",
      "link" : "marksmith"
   },
   {
      "speakerName" : "Mark Smith",
      "speakerPosition" : "Web Developer",
      "image" : "01",
      "link" : "marksmith"
   },
   {
      "speakerName" : "Mark Smith",
      "speakerPosition" : "Web Developer",
      "image" : "01",
      "link" : "marksmith"
   },
   {
      "speakerName" : "Mark Smith",
      "speakerPosition" : "Web Developer",
      "image" : "01",
      "link" : "marksmith"
   }
];
function Blog(props) {
  const content = props.posts.map((post,index) =>
    <div className="col-lg-3 col-md-3 col-sm-6 mar-10" key={index}>
      <div className="team-2-box">
        <img className="img-responsive" src={require('../image/speaker/01.jpg')} alt="" />
        <div className="team-overlay text-center"> 
          <div className="info">
            <h5 className="text-white">{post.speakerName}</h5>
            <span>{post.speakerPosition}</span>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      {content}
    </div>
  );
}

class TechnologyTopic extends Component {
  render() {
    return (
      <div>
         <section className="white-bg pad-135-t">
           <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="section-title-1 text-center">
                    <h1 className="text-blue">Speakers</h1>
                    <div className="title-line" />
                    <p>List of people who matter in our Company</p>
                  </div>
                </div>
              </div>
              <div className="team-2">
                <div className="row">
                  <Blog posts={posts} />
                </div>
              </div>
            </div>
        </section>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}
export default connect(mapStateToProps)(TechnologyTopic)
