import React, { useState, useEffect } from "react";
import Survey from "../survey/survey";
import Submission from "../submission/submission";
import Navbar from "../navbar/navbar";

function Surveywrapper() {
  const [complete, setComplete] = useState(false);
  const [questionBank, setQuestionBank] = useState([]);
  const [answerBank, setAnswerBank] = useState(Array(112).fill(null));
  const [current, setCurrent] = useState(0);
  //holds response data from submission attempt
  const [submitData, setSubmitData] = useState([]);

  //reset survey
  function resetSurvey() {
    setCurrent(0);
    setAnswerBank(Array(112).fill(null));
    setComplete(false);
  }

  //takes two args, answer and index
  function handleSetAnswer(answer, index) {
    let copy = [...answerBank];
    copy[index] = answer;
    setAnswerBank(copy);
  }

  function handleSetCurrent(num) {
    setCurrent(num);
  }

  function submitAnswers(name) {
    console.log("submitted");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, answers: answerBank }),
    };
    fetch("http://localhost:3001/answers", requestOptions)
      .then((response) => response.json())
      .then((data) => setSubmitData([...submitData].push(data.id)));
    setComplete(true);
  }

  useEffect(() => {
    if (current >= 115) {
      setComplete(true);
    }
  }, [current]);

  //fetch questions
  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestionBank(data);
      })
      .catch(console.log);
  }, []);

  if (!complete) {
    return (
      <div className="container-fluid">
        <Navbar />
        <div className="row d-flex justify-content-center">
          <Survey
            setAnswer={handleSetAnswer}
            setCurrent={handleSetCurrent}
            current={current}
            question={questionBank[Math.floor(current / 2)]}
          />
        </div>
      </div>
    );
  } else {
    return (
      <Submission
        complete={complete}
        resetSurvey={resetSurvey}
        submitAnswers={submitAnswers}
      />
    );
  }
}

export default Surveywrapper;
