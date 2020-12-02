import React from 'react';
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

class ContactItem extends React.Component {
  render () {
    let path = "/dialogs/" + this.props.id,
      className = css.dialog + ' ' + css.dialog__active;
    return (
      <NavLink to={path} className={className}>{this.props.name}</NavLink>
    )
  }
}

class MessageItem extends React.Component {
  render () {
    return <div className={css.message}>{this.props.message}</div>
  }
}

export class Dialogs extends React.Component {
  constructor (props) {
    super(props);

    this.contacts = [
      {id: 2, name: 'Аня',},
      {id: 3, name: 'Вася',},
      {id: 4, name: 'Петя',},
      {id: 5, name: 'Света',},
      {id: 6, name: 'Эльвира',},
    ]
    this.messages = [
      {id: 1, user: 2, message: 'Привет 1', date: '30/01/2020'},
      {id: 2, user: 2, message: 'Привет 2', date: '30/01/2020'},
      {id: 3, user: 3, message: 'Привет 3', date: '30/01/2020'},
      {id: 4, user: 4, message: 'Привет 4', date: '30/01/2020'},
      {id: 4, user: 4, message: 'Привет 5', date: '30/01/2020'},
      {id: 5, user: 5, message: 'Привет 6', date: '30/01/2020'},
      {id: 6, user: 6, message: 'Привет 7', date: '30/01/2020'},
    ]
  }

  render () {

    return (
      <div className={css.dialog_grid}>
        <div className={css.dialogs}>
          {this.contacts.map(item => {
            return <ContactItem name={item.name} id={item.id}/>
          })}
        </div>
        <div className={css.messages}>
          {this.messages.map(msg => {
            return <MessageItem message={msg.message}/>
          })}
        </div>
      </div>
    );
  }
}