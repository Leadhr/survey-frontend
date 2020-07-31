import React from "react";
import "./instructions.css";

function InstructionOne(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.setCurrent(props.current + 1);
  }
  return (
    <div className="instructions">
          <p>SECTION 1 of 3:</p>
          <p>Keep these things in mind as you answer questions:</p>
          <p>{"1)"} Think primarily about yourself at work.</p>
          <p>
            {"2)"} Don't overthink it. Some choices may seem odd or repetitive -
            just go with your gut.
          </p>
          <p>
            {"3)"} Try to answer all the questions in one sitting for the best
            results!
          </p>
          <button onClick={handleSubmit} className="btn btn-primary">
            Next
          </button>
        </div>
  );
}

export default InstructionOne;
