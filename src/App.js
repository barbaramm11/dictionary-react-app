import React from "react";
import "./App.css";

import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Barbara's Dictionary</h1>
          <p>
            Get clear definitions and audio pronunciations of words in British
            and American English.
          </p>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by{" "}
            <a
              href="https://dancing-crostata-234d9f.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Barbara Morales
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/barbaramm11/dictionary-react-app"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
