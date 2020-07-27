import React from "react";
import Prompt from "../prompt/prompt";
import Answerbox from "../answerbox/answerbox";
import { Col } from "react-bootstrap";

function Survey(props) {
    console.log('props', props)
  if (props.question) {
    return (
        <Col>
          <Prompt text={ props.question.question }/>
          <Answerbox answers={ props.question.answers} />
        </Col>
      );
  } else {
      return null
  }
}

export default Survey;
