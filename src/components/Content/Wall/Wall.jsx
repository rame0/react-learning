import React, {Component} from "react";
import {Post} from "./Post/Post";
import {NewPost} from "./NewPost/NewPost";
import css from "./Wall.module.css";
import profileHead from '../../../media/profile_head.jpg'

export class Wall extends Component {
  constructor (props) {
    super(props);

    this.posts = [
      {text: "Текст записи 100", likes: 5},
      {text: "Запись 23", likes: 50},
      {text: "Запись 1", likes: 100},
    ];
  }

  render () {
    return (
      <div>
        <img className={css.profileImage} src={profileHead} alt="main"/>
        <div className={css.profileInfo}>
          profile information
        </div>
        <div className={css.wallBlock}>
          <h3>Добавить Сообщение на стену</h3>
          <NewPost/>

          <h3>Стена</h3>

          {this.posts.map(post => {
            return <Post message={post.text}/>
          })}
        </div>
      </div>
    )
  }
}