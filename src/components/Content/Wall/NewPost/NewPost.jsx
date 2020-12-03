import React, {Component} from "react";

import css from './NewPost.module.css'

export class NewPost extends Component {
  textarea = React.createRef();

  onChangeText = (textarea) => {
    let text = textarea.current.value;
    this.props.updatePostText(text);
  }

  render () {
    return (
      <div className={css.new_post}>
        <textarea className={css.message} onChange={() => {
          this.onChangeText(this.textarea)
        }} ref={this.textarea} value={this.props.newPostText}/>
        <button className={css.submit} onClick={this.props.addPost}>Отправить
        </button>
      </div>
    )
  }
}