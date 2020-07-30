import React from "react";

function Reset(props) {
  function handleSubmit(e) {
    props.resetSurvey();
    props.setSubmitted(true);
    e.preventDefault();
  }
  return <button type="button" onClick={handleSubmit}>retake assesment</button>;
}

export default Reset;
