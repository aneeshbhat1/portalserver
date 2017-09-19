import React, { Component } from "react"
import { connect } from "react-redux"

const posts = [
   {
      "TopicName" : "Mobile Development",
      "catagory" : "Catagory: Design/Dev",
      "image" : "01",
      "link" : "marksmith",
      "content" : "Sed hendrerit enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. eget purus vel mauris tinci dunt tincidunt Sed hendrerit enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. eget purus vel mauris tinci dunt tincidunt"
   },
   {
      "TopicName" : "Web Development",
      "catagory" : "Catagory: Design/Dev",
      "image" : "01",
      "link" : "marksmith",
      "content" : "Sed hendrerit enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. eget purus vel mauris tinci dunt tincidunt Sed hendrerit enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. et enim non justo posuere placerat. eget purus vel mauris tinci dunt tincidunt"
   }
];


function LearningTopicsMap(props) {
	function handleClick(pro, post) {
	    //e.preventDefault();

	    console.log('The link was clicked.' + pro);
	}
  const content = props.posts.map((post,index) =>
    <div className="col-lg-6 col-md-6 col-sm-6 team mb-20" onClick={() => handleClick(index, post)}  key={index}>
	    <div className="row">
	    	<div className="col-md-4">
	    		<img className="img-responsive mt-30 ml-10" src={require("../../image/topic/mobile.png")} alt=""/>
	    	</div>
	    	<div className="col-md-8">
	    		<div className="text-center">
	    		    <div className="team-description">
	    		        <h4>{post.TopicName}</h4>
	    		        <span>{post.catagory}</span>
                  <p><b>Duration:</b> 1hour 30minites</p>
                  <div className="tags"> <p><b>Tag:</b> </p>
                     <ul>
                      <li><a href="">Bootstrap</a></li>
                      <li><a href="">HTML5</a></li>
                      <li><a href="">Wordpress</a></li>
                    </ul>
                  </div>
                  <p><b>Level:</b> Beginner</p>
                  <p><b>Host:</b> Parthiban</p>
                  <p><b>About:</b> {post.content}</p>
                  <p><b>Seats left:  <span>10</span></b></p>
                  <p><b>Venue:</b> Dark Room</p>
	    		        {/*<a className="button-small pull-right"href=''><span>Enroll now</span><i className="fa fa-hand-o-right" /></a>*/}
	    		    </div>
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

 // data-toggle="modal" data-target="#myModal" // don' delete
class Topic extends Component {
  render() {
  	console.log(this.props)
    return (
      <section className="white-bg pad-135-t">
        <div className="container">
	        <div className="text-center">
	          <h1 className="text-blue">Learning Topic</h1>
	          <div className="title-line" />
	          <p>Sed hendrerit enim non justo posuere placerat. eget purus vel mauris tinci dunt tincidunt</p>
	        </div>
	        <LearningTopicsMap posts={posts} />
        </div>
        <div className="container">
        {/* Modal */}
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
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
export default connect(mapStateToProps)(Topic)
