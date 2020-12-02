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
        <Route exact path="/" component={Home}/>
        <Route path="/wall" component={Wall}/>
        <Route path="/dialogs" component={Dialogs}/>
      </div>
    )
  }
}