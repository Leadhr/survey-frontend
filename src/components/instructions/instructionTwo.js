import React from "react";
import "./instructions.css";

function InstructionTwo(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.setCurrent(props.current + 1);
  }
  return (
    <div className="row">
      <div className="col-md-auto justify-content-center">
        <div className="instructions">
          <p>SECTION 2 of 3:</p>
          <p>Please take note of the slight change in question format</p>
          <button onClick={handleSubmit} className="btn btn-primary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstructionTwo;
