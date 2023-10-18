import React, { useState } from "react";
import Poll from "react-polls";

const CustomPoll = ({ pollQuestion, answers }) => {
  const [pollAnswers, setPollAnswers] = useState(answers);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setPollAnswers(newPollAnswers);
    // send data
  };

  return (
    <div className={"bg-white w-1/2 rounded mt-5"}>
      <Poll
        question={pollQuestion}
        answers={pollAnswers}
        customStyles={{ theme: "blue" }}
        onVote={handleVote}
      />
    </div>
  );
};

export default CustomPoll;
