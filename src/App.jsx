import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar/>
        <Content data={props.data}/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}


export default App;
