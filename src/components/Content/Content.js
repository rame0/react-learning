import React, {Component} from "react";
import c from './Content.module.css'
import {Dialogs} from "./Dialogs/Dialogs";
import {Wall} from "./Wall/Wall";
import {Route} from "react-router-dom";
import {Home} from "./home/Home";

export class Content extends Component {
  render () {
    return (
      <div className={c.content}>
        <img className={c.top_image} src="http://www.briangreen.com/wp-content/uploads/2014/05/cropped-IMG_07461.jpg"
             alt="main"/>
        <Route exact path="/" component={Home}/>
        <Route path="/wall" component={Wall}/>
        <Route path="/dialogs" component={Dialogs}/>
      </div>
    )
  }
}