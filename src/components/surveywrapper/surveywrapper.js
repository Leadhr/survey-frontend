import React, { useState, useEffect} from "react";
import Survey from "../survey/survey"

function Surveywrapper() {

  const [questionBank, setQuestionBank] = useState([])
  const [progress, setProgress] = useState(0)

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
  return (
    <Survey question={questionBank[progress]} />
  );
}

export default Surveywrapper;
