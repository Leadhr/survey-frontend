import React, { useState } from "react";
import Prompt from "../prompt/prompt";
import Answerbox from "../answerbox/answerbox";
import InstructionOne from "../instructions/instructionOne";

function Survey(props) {
  // if (props.current === 0) {
  //   return (
  //     <div className="col-md-auto justify-content-center">
  //       <InstructionOne setCurrent={props.setCurrent} current={props.current} />
  //     </div>
  //   )
  // } 
  if (props.question) {
    return (
      <div className="col-md-auto justify-content-center">
        <Prompt current={props.current} question={props.question} />
        <Answerbox setAnswer={props.setAnswer} setCurrent={props.setCurrent} current={props.current} answers={props.question.answers} />
      </div>
    );
  } else {
    return null;
  }
}

export default Survey;
