import React, { useState } from "react";
import Poll from "react-polls";
import { Button } from "flowbite-react";

const CustomPoll = ({ pollQuestion, answers, setPolls }) => {
  const [pollAnswers, setPollAnswers] = useState(answers);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setPollAnswers(newPollAnswers);
    // send data
  };

  const handleDelete = () => {
      // logic to delete back
      setPolls(prev => prev.filter(val => val["pollQuestion"]!==pollQuestion))
  }

  return (
    <div className={"bg-white w-1/2 rounded mt-5"}>
      <Poll
        question={pollQuestion}
        answers={pollAnswers}
        customStyles={{ theme: "blue" }}
        onVote={handleVote}
      />
      <div className="w-full flex items-center justify-center p-2">
        <Button color="failure" onClick={handleDelete}>Delete</Button>
      </div>
    </div>
  );
};

export default CustomPoll;
