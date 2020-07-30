import React from "react";
import "./App.css";
import Surveywrapper from "./components/surveywrapper/surveywrapper";

function App() {
  return (
    <div class="container-fluid">
      <div class="navbar navbar0">
        <a class="navbar-brand" href="/">
          <img
            src="https://leadhr.co/wp-content/themes/leadhr/img/logo.svg"
            height="35"
            alt="logo"
          />
        </a>
      </div>
      <div class="row d-flex justify-content-center">
        <Surveywrapper />
      </div>
    </div>
  );
}

export default App;
