import React, {Component} from "react";
import sb from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

export class Sidebar extends Component {
  render () {
    return (
      <nav className={sb.sidebar}>
        <div className={sb.item}>
          <NavLink to='' activeClassName={sb.active}>Home</NavLink>
        </div>
        <div className={sb.item}>
          <NavLink to='/wall' activeClassName={sb.active}>Wall</NavLink>
        </div>
        <div className={sb.item}>
          <NavLink to='/dialogs' activeClassName={sb.active}>Dialogs</NavLink>
        </div>
      </nav>
    )
  }
}