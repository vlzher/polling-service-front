import React, { useState} from "react";

import Navbar from "../components/Navbar.jsx";
import { pollsMocks } from "../../pollsMocks.js";
import CustomPoll from "../components/CustomPoll.jsx";

const PollsPage = () => {

  const [polls, setPolls] = useState(pollsMocks)

  return (
    <div className="w-full flex items-center flex-col">
      <Navbar setPolls={setPolls}/>
      <div className="p-5 w-full text-4xl flex justify-start">
        <div>Current polls:</div>
      </div>
      {polls.map((poll) => (
        <CustomPoll  setPolls={setPolls} key={poll.pollQuestion} answers={poll.answers} pollQuestion={poll.pollQuestion} />
      ))}
    </div>
  );
};

export default PollsPage;
