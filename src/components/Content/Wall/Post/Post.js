import React, {Component} from "react";

import p from './Post.module.css'

export class Post extends Component {
  render () {
    return (
      <div className={p.post}>
        <img className={p.avatar}
             src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8b/8b9ee61bfc794161bea076bbfb01b3bcb279cb84_medium.jpg"
             alt="avatar"/>
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