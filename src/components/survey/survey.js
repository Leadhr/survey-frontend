import React from "react";
import Prompt from "../prompt/prompt";
import Answerbox from "../answerbox/answerbox";
import { Col } from "react-bootstrap";

function Survey(props) {
  console.log("props", props);
  if (props.question) {
    return (
      <Col md="auto" className="justify-content-center">
        <Prompt current={props.current} text={props.question.question} />
        <Answerbox setAnswer={props.setAnswer} setCurrent={props.setCurrent} current={props.current} answers={props.question.answers} />
      </Col>
    );
  } else {
    return null;
  }
}

export default Survey;
