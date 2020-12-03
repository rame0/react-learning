import React, {Component} from "react";

import css from './NewPost.module.css'

export class NewPost extends Component {
  textarea = React.createRef();

  onPostAdd = () => {
    this.props.store.dispatch({type: 'ADD-POST'});
  }
  onChangeText = () => {
    let action = {
      type: 'UPDATE-NEW-POST-TEXT',
      text: this.textarea.current.value
    };
    this.props.store.dispatch(action);
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