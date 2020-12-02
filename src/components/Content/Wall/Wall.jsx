import React, {Component} from "react";
import {Post} from "./Post/Post";
import {NewPost} from "./NewPost/NewPost";
import css from "./Wall.module.css";
import profileHead from '../../../media/profile_head.jpg'

export class Wall extends Component {
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

          <Post message="Пост 1"/>
          <Post message="Пост 2"/>
          <Post message="Пост 2"/>
        </div>
      </div>
    )
  }
}