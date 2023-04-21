import { useState } from 'react';

function IterationCard(props) {
  const [showAnswers, setShowAnswers] = useState(false);
  return (
    <div>
      <h2>{props.iteration.iterationName}</h2>
      <p>{props.iteration.iterationDate}</p>
      <p>{props.iteration.iterationState}</p>
      <button onClick={() => setShowAnswers(!showAnswers)}>Show Answers</button>
      {showAnswers && (
        <ul>
          {props.iteration.iterationAnswers.map((answer) => {
            return (
              <li
                key={`iteration-${props.iteration.iterationName}-answer-${answer.questionText}`}
              >
                {answer.questionText}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default IterationCard;
