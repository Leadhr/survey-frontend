import React from "react";
import "./answer.css";

function Answer(props) {
  function handleClick(e) {
    e.preventDefault();
    //if even
    if (props.current % 2 === 0) {
      props.hideAnswer(props.number);
      props.setAnswer(props.number, props.current);
      props.setCurrent(props.current + 1);
      //if odd
    } else {
      props.setAnswer(props.number, props.current);
      props.setCurrent(props.current + 1);
      //show all
      props.hideAnswer(false);
    }
  }

  if (props.answer) {
    return (
      <div
        onClick={handleClick}
        className="answer d-flex justify-content-center"
      >
        {props.answer}
      </div>
    );
  } else {
    return null;
  }
}

export default Answer;
