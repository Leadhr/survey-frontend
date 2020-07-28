import React, { useState } from "react";
import Answer from "../answer/answer";
import ListGroup from "react-bootstrap/ListGroup";

function Answerbox(props) {
  const [hidden, setHidden] = useState(4);

  //given num from 0 to 3 hide the one, pass 4 to reset
  function hideAnswer(arg) {
    if (arg === 0) {
      setHidden(0);
    } else if (arg === 1) {
      setHidden(1);
    } else if (arg === 2) {
      setHidden(2);
    } else if (arg === false) {
      setHidden(false);
    }
  }

  if (props.answers) {
    return (
      <ListGroup>
        {hidden !== 0 ? (
          <ListGroup.Item>
            <Answer
              hideAnswer={hideAnswer}
              setAnswer={props.setAnswer}
              setCurrent={props.setCurrent}
              current={props.current}
              number={0}
              answer={props.answers[0].text}
            />
          </ListGroup.Item>
        ) : null}

        {hidden !== 1 ? (
          <ListGroup.Item>
            <Answer
              hideAnswer={hideAnswer}
              setAnswer={props.setAnswer}
              setCurrent={props.setCurrent}
              current={props.current}
              number={1}
              answer={props.answers[1].text}
            />
          </ListGroup.Item>
        ) : null}
        {hidden !== 2 ? (
          <ListGroup.Item>
            <Answer
              hideAnswer={hideAnswer}
              setAnswer={props.setAnswer}
              setCurrent={props.setCurrent}
              current={props.current}
              number={2}
              answer={props.answers[2].text}
            />
          </ListGroup.Item>
        ) : null}
      </ListGroup>
    );
  } else {
    return null;
  }
}

export default Answerbox;
