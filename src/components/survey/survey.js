import React from "react";
import Prompt from "../prompt/prompt";
import Answerbox from "../answerbox/answerbox";

function Survey(props) {
  if (props.question) {
    return (
      <div className="col-md-auto justify-content-center">
        <Prompt current={props.current} text={props.question.question} />
        <Answerbox setAnswer={props.setAnswer} setCurrent={props.setCurrent} current={props.current} answers={props.question.answers} />
      </div>
    );
  } else {
    return null;
  }
}

export default Survey;
