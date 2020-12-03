import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {NewMessage} from "./NewMessage/NewMessage";

class ContactItem extends React.Component {
  render () {
    let path = "/dialogs/" + this.props.id
    return (
      <NavLink to={path} className={css.dialog} activeClassName={css.dialog__active}>{this.props.name}</NavLink>
    )
  }
}

class MessageItem extends React.Component {
  render () {
    return <div className={css.message}>{this.props.message}</div>
  }
}

export class Dialogs extends React.Component {
  render () {
    return (
      <div className={css.dialog_grid}>
        <div className={css.dialogs}>
          {this.props.data.contacts.map(item => {
            return <ContactItem name={item.name} id={item.id} key={item.id}/>
          })}
        </div>
        <div className={css.messages}>
          {this.props.data.messages.map(msg => {
            return <MessageItem message={msg.message} key={msg.id}/>
          })}

          <NewMessage/>
        </div>
      </div>
    );
  }
}