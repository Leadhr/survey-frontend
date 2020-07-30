import React, { useState } from "react";
import Reset from "../reset/reset";

function Submission(props) {
  const [submitted, setSubmitted] = useState(false);
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    //call submit from surveywrapper
    props.submitAnswers(value);
    setSubmitted(true);
    e.preventDefault();
  }

  return !submitted ? (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        class="form-control"
        onChange={handleChange}
        value={value}
        type="username"
        placeholder="enter your name"
      />
      <button class="btn" type="submit">
        Submit
      </button>
    </form>
  ) : (
    <Reset setSubmitted={setSubmitted} resetSurvey={props.resetSurvey}></Reset>
  );
}

export default Submission;
