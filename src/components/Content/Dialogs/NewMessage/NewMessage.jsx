import React, {Component} from "react";
import css from "./NewMessage.module.css";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/state";

export class NewMessage extends Component {
  textarea = React.createRef();

  sendMessage () {
    this.props.dispatch(sendMessageActionCreator());
  }

  onChangeText = () => {
    let text = this.textarea.current.value
    this.props.dispatch(updateNewMessageActionCreator(text));
  }

  render () {
    return (
      <div className={css.new_message}>
        <textarea className={css.message} ref={this.textarea} onChange={this.onChangeText.bind(this)}
                  value={this.props.store.getState().dialogsPage.newMessageText}/>
        <button className={css.submit} onClick={this.sendMessage.bind(this)}>Отправить</button>
      </div>
    )
  }
}