import React from 'react';
import css from './Dialogs.module.css';


export class Dialogs extends React.Component {
  constructor (props) {
    super(props);

    this.messages = [
      'asdf1',
      'asdf2',
      'asdf3',
      'asdf4',
      'asdf5',
    ]
  }

  add (text) {
    this.messages.push(text);
    console.log(text);
  }

  render () {

    return (
      <div className={css.dialog_grid}>
        <div className={css.dialogs}>
          <div className={css.dialog} onClick={() => this.add('123456')}>Вася</div>
          <div className={css.dialog + ' ' + css.dialog__active}>Петя</div>
        </div>
        <div className={css.messages}>
          {this.messages.map(message => {
            return <div className={css.message}>{message}</div>
          })}
        </div>
      </div>
    );
  }
}