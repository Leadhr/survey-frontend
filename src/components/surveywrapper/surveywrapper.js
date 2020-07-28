import React, { useState, useEffect} from "react";
import Survey from "../survey/survey"
import Submission from "../submission/submission"

function Surveywrapper() {
  const [complete, setComplete] = useState(false)
  const [questionBank, setQuestionBank] = useState([])
  const [answerBank, setAnswerBank] = useState(Array(112).fill(null))
  const [current, setCurrent] = useState(110)

  //takes two args, answer and index
  function handleSetAnswer(answer, index) {
    let copy = [...answerBank];
    copy[index] = answer
    setAnswerBank(copy)
  }

  function handleSetCurrent(num) {
    setCurrent(num)
  }

  function submitAnswers() {
    //submit answers
  }

  useEffect(() => {
    if (current >= 112) {
      setComplete(true)
    }
  }, [current])

  //fetch questions
  useEffect(() => {
    fetch("http://localhost:3001/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestionBank(data);
      })
      .catch(console.log);
  }, []);

  // console.log(questionBank)
  if (!complete) {
    return (
      <Survey setAnswer={handleSetAnswer} setCurrent={handleSetCurrent} current={current} question={questionBank[Math.floor(current / 2)]} />
    );
  } else {
    return <Submission />
  }
}

export default Surveywrapper;
