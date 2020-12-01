import React, {Component} from "react";
import logo from "../../logo.svg";
import h from './Header.module.css'

export class Header extends Component {
  render () {
    return (
      <div className={h.header}>
        <img src={logo} className={h.logo} alt="logo"/>
      </div>
    );
  }
}
