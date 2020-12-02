import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {Content} from "./components/Content/Content";
import {Footer} from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Sidebar/>
        <Content/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}


export default App;
