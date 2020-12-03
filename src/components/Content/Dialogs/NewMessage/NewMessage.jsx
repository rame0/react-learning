import React from "react";
import css from "./NewMessage.module.css";

export const NewMessage = (props) => {
  let textarea = React.createRef();

  let sendMessage = () => {
    let text = textarea.current.value;
    alert(text);
  }
  return (
    <div className={css.new_message}>
      <textarea className={css.message} ref={textarea}/>
      <button className={css.submit} onClick={sendMessage}>Отправить</button>
    </div>
  )
}