import React, {Component} from "react";

import p from './Post.module.css'
import avatar from "../../../../media/avatar_1.jpg"

export class Post extends Component {
  render () {
    return (
      <div className={p.post}>
        <img className={p.avatar} src={avatar} alt="avatar"/>
        <div className={p.name}>
          Иван Иванович
        </div>
        <div className={p.text}>
          {this.props.message}
        </div>
      </div>
    )
  }
}