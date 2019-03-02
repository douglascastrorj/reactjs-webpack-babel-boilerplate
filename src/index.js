import React from "react";
import ReactDOM from 'react-dom';

let HelloWorld = () => {
    return <h1> Hello there </h1>
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById("root")
)