import React from "react";
import ReactDOM from 'react-dom';
import App from './App.jsx';

let HelloWorld = () => {
    return <h1> Hello there </h1>
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)