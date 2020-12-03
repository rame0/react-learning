import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {NewMessage} from "./NewMessage/NewMessage";

class ContactItem extends React.Component {
  render () {
    let path = "/dialogs/" + this.props.id
    return (
      <NavLink to={path} className={css.contact} activeClassName={css.contact__active}>{this.props.name}</NavLink>
    )
  }
}

class MessageItem extends React.Component {
  render () {
    return <div className={css.message}>
      <div className={css.messageText}>
        {this.props.message}
      </div>
      <div className={css.messageDate}>
        {this.props.date.toLocaleString()}
      </div>
    </div>
  }
}

export class Dialogs extends React.Component {
  render () {
    return (
      <div className={css.dialog_grid}>
        <div className={css.contacts}>
          {this.props.store.getState().dialogsPage.contacts.map(item => {
            return <ContactItem name={item.name} id={item.id} key={item.id}/>
          })}
        </div>
        <div className={css.messages}>
          {this.props.store.getState().dialogsPage.messages.map(msg => {
            return <MessageItem message={msg.message} key={msg.id} date={msg.date}/>
          })}

        </div>
        <div className={css.new_message}>
          <NewMessage store={this.props.store} dispatch={this.props.dispatch}/>
        </div>
      </div>
    );
  }
}