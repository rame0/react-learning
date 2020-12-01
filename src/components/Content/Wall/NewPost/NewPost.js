import React, {Component} from "react";

import css from './NewPost.module.css'

export class NewPost extends Component {
  render () {
    return (
      <div className={css.new_post}>
        <textarea className={css.message}/>
        <button className={css.submit}>Отправить</button>
      </div>
    )
  }
}