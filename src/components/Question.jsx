import React, { useState } from "react";
import Poll from "react-polls";
import { Button } from "flowbite-react";
import { answerQuestion, removeQuestionFromPoll } from "../api/api.js";
import { useParams } from "react-router-dom";

const Question = ({
  questionID,
  questionName,
  options,
  setQuestions,
  isMyPoll,
}) => {
  const [questionOptions, setQuestionOptions] = useState(options);
  const { id } = useParams();
  const handleVote = (optionName) => {
    answerQuestion(
      id,
      questionOptions.find((option) => option.option === optionName).optionID
    );
    const newPollAnswers = questionOptions.map((answer) => {
      if (answer.option === optionName) answer.votes++;
      return answer;
    });
    setQuestionOptions(newPollAnswers);
    // send data
  };

  const handleDelete = () => {
    removeQuestionFromPoll(id, questionID).then((ok) => {
      if (ok) {
        setQuestions((prev) =>
          prev.filter((val) => val["questionName"] !== questionName)
        );
      }
    });
  };

  return (
    <div className={"bg-white w-1/2 rounded mt-5"}>
      <Poll
        question={questionName}
        answers={questionOptions}
        customStyles={{ theme: "blue" }}
        onVote={handleVote}
      />
      {isMyPoll && (
        <div className="w-full flex items-center justify-center p-2">
          <Button color="failure" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default Question;
