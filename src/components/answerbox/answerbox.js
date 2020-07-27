import React from "react";
import Answer from "../answer/answer";
import ListGroup from "react-bootstrap/ListGroup";

function Answerbox(props) {
  return (
    <ListGroup>
      <ListGroup.Item>
        <Answer />
      </ListGroup.Item>
      <ListGroup.Item>
        <Answer />
      </ListGroup.Item>
      <ListGroup.Item>
        <Answer />
      </ListGroup.Item>
    </ListGroup>
  );
}

export default Answerbox;
