/*import logo from "./logo.svg";
import "./App.css";

function App() {
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

export default App;*/

import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Mainsection from "./components/Mainsection.js";
import EntryForm from "./components/Entryform.js";
import TabBar from "./components/Tabbar.js";
import EntryList from "./components/Entrylist.js";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Mainsection>
        <EntryForm />

        <TabBar />
        <EntryList />
      </Mainsection>
      <footer>Journal App-2028</footer>
    </div>
  );
}
