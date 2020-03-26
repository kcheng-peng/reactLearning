import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import Example from "./third";
// import WordAdder from "./wordAdder";
//import Parent from "./portal/parent"
//import AutoFocusTextInput from "./ref/autoFocusTextInput";
//import CustomTextInput from "./ref/customTextInput";
//import MouseTracker from "./render-props/mouseTracker";
import NameForm from "./uncontrolled/nameForm";

ReactDOM.render(
    <NameForm/>,
    document.getElementById('root'),
)
