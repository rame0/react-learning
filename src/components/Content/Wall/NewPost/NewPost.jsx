import React, {Component} from "react";

import css from './NewPost.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

export class NewPost extends Component {
  textarea = React.createRef();

  onPostAdd = () => {
    this.props.store.dispatch(addPostActionCreator());
  }
  onChangeText = () => {
    let text = this.textarea.current.value
    this.props.store.dispatch(updateNewPostTextActionCreator(text));
  }

  render () {
    return (
      <div className={css.new_post}>
        <textarea className={css.message} onChange={this.onChangeText} ref={this.textarea}
                  value={this.props.store.getState().wallPage.newPostText}/>
        <button className={css.submit} onClick={this.onPostAdd}>Отправить
        </button>
      </div>
    )
  }
}