import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter basename="/react-learning">
      <div className="App">
        <Header/>
        <Sidebar/>
        <Content state={props.state}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}


export default App;
