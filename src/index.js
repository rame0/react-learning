import './index.css';
import reportWebVitals from './reportWebVitals';
import {addPost, state, updatePostText} from "./redux/state";
import {renderUI} from "./render";

renderUI(state, addPost, updatePostText)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
