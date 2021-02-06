import React, { useEffect } from "react"
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {



  useEffect(() => {
    axios({
      method: 'get',
      url: "http://localhost:8080/ping",
    }).then((response) => {
      console.log("data is = > ", response.data);

    }, (error) => {
    })
  })




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
