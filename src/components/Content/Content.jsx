import React, {Component} from "react";
import c from './Content.module.css'
import {Wall} from "./Wall/Wall";
import {Route} from "react-router-dom";
import {Home} from "./home/Home";
import {Dialogs} from "./Dialogs/Dialogs";

export class Content extends Component {
  render () {
    return (
      <div className={c.content}>
        <Route exact path="/" component={Home}/>
        <Route path="/wall" render={() => <Wall posts={this.props.state.wallPage.posts}/>}/>
        <Route path="/dialogs" render={() => <Dialogs data={this.props.state.dialogsPage}/>}/>
      </div>
    )
  }
}