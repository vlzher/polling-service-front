import React, {useEffect, useState} from "react";

import Navbar from "../components/Navbar.jsx";
import { pollsMocks } from "../../pollsMocks.js";
import CustomPoll from "../components/CustomPoll.jsx";

const PollsPage = () => {
  const [isPollAdded, setIsPollAdded] = useState(false);

  useEffect(()=> {
      // logic to fetch data again from server
  },[isPollAdded])
  return (
    <div className="w-full flex items-center flex-col">
      <Navbar isPollAdded={isPollAdded} setIsPollAdded={setIsPollAdded}/>
      <div className="p-5 w-full text-4xl flex justify-start">
        <div>Current polls:</div>
      </div>
      {pollsMocks.map((poll) => (
        <CustomPoll key={poll.pollQuestion} answers={poll.answers} pollQuestion={poll.pollQuestion} />
      ))}
    </div>
  );
};

export default PollsPage;
