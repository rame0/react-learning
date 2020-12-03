import ReactDOM from "react-dom";
import React from "react";
import {App} from "./App";


export let renderUI = (state, addPost, updatePostText) => {

  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostText={updatePostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}