import React from "react";
import Survey from "./components/surveywrapper/surveywrapper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Surveywrapper from "./components/surveywrapper/surveywrapper";

function App() {
  return (
    <Container fluid>
      <Navbar className="navbar">
        <Navbar.Brand>
          <img
            src="https://leadhr.co/wp-content/themes/leadhr/img/logo.svg"
            height="35"
          />
        </Navbar.Brand>
      </Navbar>
      <Row className="d-flex justify-content-center">
        <Surveywrapper />
      </Row>
    </Container>
  );
}

export default App;
