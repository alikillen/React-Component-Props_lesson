import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"
import App from "./components/App.js"

// const styles = {color: "blue", textAlign: "center"}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// class keyword will not work here for styling - need to use camelCase className

