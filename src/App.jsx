import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

export class App extends Component {
  render () {
    return (
      <BrowserRouter basename="/react-learning">
        <div className="App">
          <Header/>
          <Sidebar/>
          <Content store={this.props.store} dispatch={this.props.dispatch}/>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

