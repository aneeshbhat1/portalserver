import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../../custom_modules/css/plugins-css.css';
import '../../custom_modules/css/mega-menu/mega_menu.css';
import '../../custom_modules/css/default.css';
import '../../custom_modules/css/style.css';
import '../../custom_modules/css/responsive.css';
import '../../custom_modules/css/custom.css';
export class Banner extends Component {
  render () {
    return (
      <section className="banner">
           <div className="owl-carousel-1">
             <div className="item">
               <div className="slider-contents container slide-1 text-center">
                 <h2 className="text-white text-uppercase">Let us learn together and laugh 
                 together and work together, confident that in the end we will triumph together in the right.
                 </h2>
                 <p className="text-white">We are a creative company, who works with passion and love</p>
                 <a href="" className="button"><span>Upcoming Events</span> <i className="fa fa-calendar" /></a>
                 <a href="" className="button button-white"><span>Discover more</span> <i className="fa fa-eye" /></a>
               </div>
             </div>
           </div>
       </section>
    )
  }
}
